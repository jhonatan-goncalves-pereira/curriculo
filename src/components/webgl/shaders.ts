/* Simplex 3D noise — Ian McEwan / Ashima Arts (MIT). */
const SIMPLEX = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0)) +
    i.y + vec4(0.0, i1.y, i2.y, 1.0)) +
    i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`;

export const vertexShader = /* glsl */ `
precision highp float;

uniform mat4 uProjection;
uniform mat4 uModelView;
uniform float uTime;
uniform float uShape;
uniform float uSize;
uniform float uPixelRatio;
uniform vec2 uPointer;
uniform float uPush;
uniform float uAspect;
uniform float uTanFov;

attribute vec3 aS0;
attribute vec3 aS1;
attribute vec3 aS2;
attribute vec3 aS3;
attribute vec3 aS4;
attribute vec3 aS5;
attribute vec4 aSeed;

varying float vTint;
varying float vAlpha;
varying float vSpark;

${SIMPLEX}

vec3 shapeAt(float i) {
  if (i < 0.5) return aS0;
  if (i < 1.5) return aS1;
  if (i < 2.5) return aS2;
  if (i < 3.5) return aS3;
  if (i < 4.5) return aS4;
  return aS5;
}

void main() {
  float index = floor(uShape);
  float f = uShape - index;

  // Each particle leaves on its own beat, so shapes dissolve instead of sliding.
  float t = clamp((f - aSeed.x * 0.4) / 0.6, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);

  vec3 from = shapeAt(index);
  vec3 to = shapeAt(min(index + 1.0, 5.0));
  vec3 p = mix(from, to, t);

  // Mid-transition the cloud swells outward, then collapses into the next form.
  float burst = sin(t * 3.14159265);
  p += normalize(p + vec3(0.0001)) * burst * (0.2 + aSeed.y * 1.1);

  // Slow organic drift so a resting shape still breathes.
  float phase = aSeed.z * 20.0;
  vec3 q = p * 0.55 + vec3(0.0, 0.0, uTime * 0.11);
  vec3 drift = vec3(
    snoise(q + phase),
    snoise(q + 31.4 + phase),
    snoise(q + 67.1 + phase)
  );
  p += drift * (0.07 + burst * 0.25);

  vec4 mv = uModelView * vec4(p, 1.0);

  // Pointer pushes nearby particles away, in view space so it tracks the cursor.
  vec2 pointerView = uPointer * (-mv.z) * vec2(uAspect * uTanFov, uTanFov);
  vec2 away = mv.xy - pointerView;
  float d = length(away);
  float push = smoothstep(1.15, 0.0, d) * uPush;
  mv.xy += normalize(away + vec2(0.0001)) * push * 0.42;
  mv.z += push * 0.5;

  gl_Position = uProjection * mv;

  float size = uSize * (0.45 + aSeed.w * aSeed.w * 1.9);
  gl_PointSize = size * uPixelRatio / -mv.z;

  vTint = clamp(0.5 + p.y * 0.2 + p.x * 0.12 + drift.x * 0.35, 0.0, 1.0);
  vSpark = step(0.965, aSeed.y);
  // Depth cue: far particles fade, near ones stay crisp.
  vAlpha = smoothstep(13.5, 4.0, -mv.z) * (0.55 + aSeed.w * 0.45) + push * 0.5;
}
`;

export const fragmentShader = /* glsl */ `
precision highp float;

uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uOpacity;

varying float vTint;
varying float vAlpha;
varying float vSpark;

void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  float glow = pow(smoothstep(0.5, 0.0, d), 1.9);

  vec3 color = mix(uColorA, uColorB, vTint);
  color = mix(color, vec3(1.0), vSpark * 0.75);

  gl_FragColor = vec4(color, glow * vAlpha * uOpacity);
}
`;
