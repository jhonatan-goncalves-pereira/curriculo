import { appReady, sceneState } from "@/lib/store";
import { identity, multiply, perspective, rotationX, rotationY, rotationZ, scaling, translation } from "./mat4";
import { fragmentShader, vertexShader } from "./shaders";
import { buildSeeds, buildShapes, SHAPE_COUNT } from "./shapes";

/*
 * A single additive point cloud, drawn with raw WebGL. One draw call and one
 * shader do not justify a 3D engine: this file plus mat4.ts replace ~240 kB
 * (gzipped) of library code.
 */

interface Layout {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  /** Rotation of the whole cloud around X (toward the camera) and Z (lean). */
  tilt: number;
  roll: number;
}

/* One entry per shape, same order as shapes.ts. The hero owns the stage;
   every other section pushes the cloud to a margin and dims it so the copy
   on top stays readable. */
const DESKTOP: Layout[] = [
  { x: 2.55, y: 0.05, scale: 1.0, opacity: 1.0, tilt: 0.18, roll: 0.0 },
  { x: 3.9, y: 0.1, scale: 0.92, opacity: 0.5, tilt: 0.2, roll: 0.32 },
  { x: 0.0, y: -1.75, scale: 1.05, opacity: 0.42, tilt: 0.62, roll: 0.0 },
  { x: -4.1, y: 0.2, scale: 0.86, opacity: 0.4, tilt: 0.42, roll: 0.2 },
  { x: 4.0, y: 0.0, scale: 0.95, opacity: 0.42, tilt: 0.3, roll: 0.0 },
  { x: 0.6, y: -1.15, scale: 1.3, opacity: 0.5, tilt: 1.12, roll: 0.12 },
];

/* Phones have no free margin, so the cloud lives above the hero copy and
   then retreats to the screen edges at low opacity. */
const MOBILE: Layout[] = [
  { x: 0.0, y: 1.72, scale: 0.46, opacity: 0.95, tilt: 0.18, roll: 0.0 },
  { x: 1.2, y: 0.5, scale: 0.5, opacity: 0.26, tilt: 0.2, roll: 0.32 },
  { x: 0.0, y: -1.9, scale: 0.5, opacity: 0.3, tilt: 0.62, roll: 0.0 },
  { x: -1.05, y: 0.4, scale: 0.46, opacity: 0.22, tilt: 0.42, roll: 0.2 },
  { x: 1.0, y: 1.9, scale: 0.36, opacity: 0.24, tilt: 0.3, roll: 0.0 },
  { x: 0.2, y: -1.5, scale: 0.5, opacity: 0.36, tilt: 1.12, roll: 0.12 },
];

const FOV = (42 * Math.PI) / 180;
const CAMERA_Z = 7.5;
const MAX_DPR = 1.75;

/* Brand mint (#5ef2c2) and violet (#8b7cff), converted to linear light: the
   shader blends in linear space, which keeps the mix saturated instead of muddy. */
const MINT = [0.112, 0.888, 0.539];
const VIOLET = [0.258, 0.202, 1.0];

const UNIFORMS = [
  "uProjection",
  "uModelView",
  "uTime",
  "uShape",
  "uSize",
  "uPixelRatio",
  "uPointer",
  "uPush",
  "uAspect",
  "uTanFov",
  "uOpacity",
  "uColorA",
  "uColorB",
] as const;

type UniformName = (typeof UNIFORMS)[number];

function compile(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("WebGL: could not create shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`WebGL: shader failed to compile: ${log}`);
  }
  return shader;
}

/**
 * Starts the particle scene on `canvas`. Returns a disposer, or `null` when
 * WebGL is unavailable (the CSS backdrop then carries the page on its own).
 */
export function startScene(canvas: HTMLCanvasElement, count: number): (() => void) | null {
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: "high-performance",
  });
  if (!gl) return null;

  const shapes = buildShapes(count);
  const seeds = buildSeeds(count);

  let program: WebGLProgram | null = null;
  let buffers: WebGLBuffer[] = [];
  let locations = {} as Record<UniformName, WebGLUniformLocation | null>;

  /** (Re)creates every GPU resource; also runs after a restored context. */
  const setup = () => {
    const vs = compile(gl, gl.VERTEX_SHADER, vertexShader);
    const fs = compile(gl, gl.FRAGMENT_SHADER, fragmentShader);
    const p = gl.createProgram();
    if (!p) throw new Error("WebGL: could not create program");
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      throw new Error(`WebGL: program failed to link: ${gl.getProgramInfoLog(p)}`);
    }
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    gl.useProgram(p);
    program = p;

    const attribute = (name: string, data: Float32Array, size: number) => {
      const location = gl.getAttribLocation(p, name);
      const buffer = gl.createBuffer();
      if (location < 0 || !buffer) return;
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
      buffers.push(buffer);
    };
    buffers = [];
    for (let i = 0; i < SHAPE_COUNT; i++) attribute(`aS${i}`, shapes[i], 3);
    attribute("aSeed", seeds, 4);

    for (const name of UNIFORMS) locations[name] = gl.getUniformLocation(p, name);
    gl.uniform3fv(locations.uColorA, MINT);
    gl.uniform3fv(locations.uColorB, VIOLET);
    gl.uniform1f(locations.uSize, 30);
    gl.uniform1f(locations.uTanFov, Math.tan(FOV / 2));

    // Additive glow: order does not matter, so no depth buffer is needed.
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.clearColor(0, 0, 0, 0);
  };

  try {
    setup();
  } catch {
    return null;
  }

  const projection = identity();
  const view = translation(0, 0, -CAMERA_Z);
  const modelView = identity();
  let aspect = 1;
  let dpr = 1;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const width = Math.max(1, Math.round(canvas.clientWidth * dpr));
    const height = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    gl.viewport(0, 0, width, height);
    aspect = width / height;
    perspective(projection, FOV, aspect, 0.1, 60);
  };
  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);

  // Smoothed values that chase their targets a little every frame.
  const live = {
    shape: 0,
    x: DESKTOP[0].x,
    y: DESKTOP[0].y,
    scale: 0.55,
    opacity: 0,
    tilt: DESKTOP[0].tilt,
    roll: 0,
    px: 0,
    py: 0,
    push: 0,
    spin: 0,
    time: 0,
  };

  let frame = 0;
  let last = performance.now();
  let lost = false;

  const render = (now: number) => {
    frame = requestAnimationFrame(render);
    if (lost || !program) return;

    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    const target = (aspect < 0.85 ? MOBILE : DESKTOP)[sceneState.shape];
    const ready = appReady.get();
    const ease = 1 - Math.exp(-dt * 2.6);
    const slow = 1 - Math.exp(-dt * 1.7);
    const l = live;

    l.shape += (sceneState.shape - l.shape) * slow;
    l.x += (target.x - l.x) * ease;
    l.y += (target.y - l.y) * ease;
    l.scale += ((ready ? target.scale : 0.55) - l.scale) * slow;
    l.opacity += ((ready ? target.opacity : 0) - l.opacity) * slow;
    l.tilt += (target.tilt - l.tilt) * ease;
    l.roll += (target.roll - l.roll) * ease;
    l.px += (sceneState.pointerX - l.px) * ease;
    l.py += (sceneState.pointerY - l.py) * ease;
    l.push += ((sceneState.pointerActive ? 1 : 0) - l.push) * ease;
    l.spin += dt * 0.085;
    l.time += dt;

    // view · translate · tilt(X) · parallax(Y) · lean(Z) · scale · spin(Y)
    modelView.set(view);
    multiply(modelView, modelView, translation(l.x, l.y, 0));
    multiply(modelView, modelView, rotationX(l.tilt - l.py * 0.16));
    multiply(modelView, modelView, rotationY(l.px * 0.22));
    multiply(modelView, modelView, rotationZ(l.roll));
    multiply(modelView, modelView, scaling(l.scale));
    multiply(modelView, modelView, rotationY(l.spin));

    gl.uniformMatrix4fv(locations.uProjection, false, projection);
    gl.uniformMatrix4fv(locations.uModelView, false, modelView);
    gl.uniform1f(locations.uTime, l.time);
    gl.uniform1f(locations.uShape, l.shape);
    gl.uniform1f(locations.uOpacity, l.opacity);
    gl.uniform1f(locations.uPixelRatio, dpr);
    gl.uniform1f(locations.uAspect, aspect);
    gl.uniform2f(locations.uPointer, l.px, l.py);
    gl.uniform1f(locations.uPush, l.push);

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, count);
  };

  const onLost = (e: Event) => {
    e.preventDefault(); // lets the browser hand the context back later
    lost = true;
  };
  const onRestored = () => {
    try {
      setup();
      resize();
      lost = false;
    } catch {
      /* stay on the CSS backdrop */
    }
  };
  canvas.addEventListener("webglcontextlost", onLost);
  canvas.addEventListener("webglcontextrestored", onRestored);

  frame = requestAnimationFrame(render);

  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    canvas.removeEventListener("webglcontextlost", onLost);
    canvas.removeEventListener("webglcontextrestored", onRestored);
    buffers.forEach((b) => gl.deleteBuffer(b));
    if (program) gl.deleteProgram(program);
    locations = {} as typeof locations;
  };
}
