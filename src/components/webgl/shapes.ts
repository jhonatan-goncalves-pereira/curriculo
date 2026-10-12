/**
 * Target point clouds for the particle system. Every shape has exactly `count`
 * points so the vertex shader can blend any two of them per particle.
 *
 * Order matters: it is the `data-scene` index used by the page sections.
 *   0 core · 1 helix · 2 wave · 3 lattice · 4 knot · 5 galaxy
 */
export const SHAPE_COUNT = 6;

/** Deterministic PRNG so the scene looks identical on every load. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Fill = (i: number, out: Float32Array, o: number) => void;

function build(count: number, fill: Fill): Float32Array {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) fill(i, out, i * 3);
  return out;
}

export function buildShapes(count: number): Float32Array[] {
  const rand = mulberry32(20261);
  const gauss = () => (rand() + rand() + rand() + rand() - 2) / 2;
  const GOLDEN = Math.PI * (3 - Math.sqrt(5));

  // 0 — core: a Fibonacci shell with a dense nucleus inside.
  const core = build(count, (i, out, o) => {
    const inner = i % 6 === 0;
    const r = inner ? 0.55 + rand() * 0.35 : 2.0 + gauss() * 0.04;
    const y = 1 - (i / (count - 1)) * 2;
    const ring = Math.sqrt(1 - y * y);
    const theta = i * GOLDEN;
    out[o] = Math.cos(theta) * ring * r;
    out[o + 1] = y * r;
    out[o + 2] = Math.sin(theta) * ring * r;
  });

  // 1 — helix: two strands plus the rungs between them.
  const helix = build(count, (i, out, o) => {
    const t = i / count;
    const angle = t * Math.PI * 2 * 3.2;
    const y = (t - 0.5) * 4.8;
    const radius = 1.05;
    const kind = i % 4;
    if (kind === 3) {
      const k = rand() * 2 - 1;
      const snapped = Math.round(angle / 0.55) * 0.55;
      out[o] = Math.cos(snapped) * radius * k;
      out[o + 1] = (snapped / (Math.PI * 2 * 3.2) - 0.5) * 4.8;
      out[o + 2] = Math.sin(snapped) * radius * k;
    } else {
      const phase = kind === 0 ? 0 : Math.PI;
      const j = 0.06;
      out[o] = Math.cos(angle + phase) * radius + gauss() * j;
      out[o + 1] = y + gauss() * j;
      out[o + 2] = Math.sin(angle + phase) * radius + gauss() * j;
    }
  });

  // 2 — wave: a rolling terrain grid.
  const side = Math.ceil(Math.sqrt(count));
  const wave = build(count, (i, out, o) => {
    const gx = (i % side) / (side - 1) - 0.5;
    const gz = Math.floor(i / side) / (side - 1) - 0.5;
    const x = gx * 7.4;
    const z = gz * 5.2;
    out[o] = x;
    out[o + 1] = Math.sin(x * 1.25) * 0.42 + Math.cos(z * 1.7 + x * 0.6) * 0.34;
    out[o + 2] = z;
  });

  // 3 — lattice: points riding the edges of a 4×4×4 node grid.
  const nodes = [-1.5, -0.5, 0.5, 1.5];
  const lattice = build(count, (i, out, o) => {
    const axis = i % 3;
    const a = nodes[Math.floor(rand() * 4)];
    const b = nodes[Math.floor(rand() * 4)];
    const along = (rand() - 0.5) * 3;
    const j = 0.018;
    const p =
      axis === 0 ? [along, a, b] : axis === 1 ? [a, along, b] : [a, b, along];
    out[o] = p[0] * 1.15 + gauss() * j;
    out[o + 1] = p[1] * 1.15 + gauss() * j;
    out[o + 2] = p[2] * 1.15 + gauss() * j;
  });

  // 4 — knot: a (2,3) torus knot with a soft tube around the curve.
  const knot = build(count, (i, out, o) => {
    const t = (i / count) * Math.PI * 2;
    const p = 2;
    const q = 3;
    const r = 1.25 + 0.5 * Math.cos(q * t);
    const tube = 0.2;
    out[o] = r * Math.cos(p * t) + gauss() * tube;
    out[o + 1] = r * Math.sin(p * t) + gauss() * tube;
    out[o + 2] = -0.62 * Math.sin(q * t) * 1.5 + gauss() * tube;
  });

  // 5 — galaxy: three spiral arms flattening toward the rim.
  const galaxy = build(count, (i, out, o) => {
    const arm = i % 3;
    const r = Math.pow(rand(), 0.62) * 3.1;
    const spread = (1 - r / 3.4) * 0.5 + 0.08;
    const angle = (arm / 3) * Math.PI * 2 + r * 1.25 + gauss() * spread;
    out[o] = Math.cos(angle) * r;
    out[o + 1] = gauss() * 0.14 * (1.2 - r / 3.4);
    out[o + 2] = Math.sin(angle) * r;
  });

  return [core, helix, wave, lattice, knot, galaxy];
}

/** Per-particle random seeds: x = morph delay, y = burst, z = noise phase, w = size. */
export function buildSeeds(count: number): Float32Array {
  const rand = mulberry32(7);
  const out = new Float32Array(count * 4);
  for (let i = 0; i < out.length; i++) out[i] = rand();
  return out;
}
