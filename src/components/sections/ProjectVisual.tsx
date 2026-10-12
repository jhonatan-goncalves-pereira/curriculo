import type { ProjectId } from "@/content/types";
import { Check } from "../ui/Icons";

/* Small illustrative scenes for the project cards. They are decorative
   (aria-hidden) and language-neutral, so they never need translating. */

const TILE = 600;

/** One seamless period of a vibration-like trace: fundamental plus a harmonic. */
function trace(amp: number, cycles: number, harmonic: number, phase: number, mid: number) {
  let d = "";
  for (let x = 0; x <= TILE; x += 5) {
    const a = (x / TILE) * Math.PI * 2;
    const y =
      mid +
      amp * Math.sin(a * cycles + phase) +
      amp * 0.38 * Math.sin(a * cycles * harmonic + phase * 2);
    d += `${x === 0 ? "M" : "L"}${x},${y.toFixed(1)}`;
  }
  return d;
}

const TRACES = [
  { d: trace(22, 5, 3, 0, 46), color: "#5ef2c2", width: 1.6 },
  { d: trace(14, 8, 2, 1.3, 98), color: "#8b7cff", width: 1.4 },
  { d: trace(9, 13, 2, 2.1, 142), color: "rgb(255 255 255 / 0.4)", width: 1.2 },
];

function WaveTile() {
  return (
    <svg viewBox={`0 0 ${TILE} 180`} preserveAspectRatio="none" className="h-full w-1/2">
      {TRACES.map((t) => (
        <path
          key={t.color}
          d={t.d}
          fill="none"
          stroke={t.color}
          strokeWidth={t.width}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

const SPECTRUM = [0.3, 0.92, 0.5, 0.74, 0.36, 0.58, 0.26, 0.44, 0.2, 0.32, 0.16, 0.24, 0.12, 0.18];

function Pulso() {
  return (
    <div className="absolute inset-0 flex">
      <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_14%,#000_86%,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-y-6 left-0 flex w-[200%] animate-wave">
          <WaveTile />
          <WaveTile />
        </div>
      </div>
      <div className="hidden w-[30%] flex-col justify-end gap-3 border-l border-line p-5 sm:flex">
        <p className="eyebrow mb-auto text-right">FFT</p>
        <div className="flex h-[62%] items-end gap-[3px]">
          {SPECTRUM.map((h, i) => (
            <span
              key={i}
              className="flex-1 origin-bottom animate-eq rounded-t-sm bg-gradient-to-t from-violet to-mint"
              style={{ height: `${h * 100}%`, animationDelay: `${(i % 5) * -0.26}s` }}
            />
          ))}
        </div>
        <p className="font-mono text-[0.66rem] text-dim">0 — 200 Hz</p>
      </div>
      <p className="eyebrow absolute left-5 top-4 flex items-center gap-2">
        <span className="size-1.5 animate-pulse-dot rounded-full bg-mint" />
        accel · x y z
      </p>
    </div>
  );
}

const BOOKED = new Set([2, 3, 9, 12, 13, 17, 22, 25]);
const TODAY = 12;

function Sis() {
  return (
    <div className="absolute inset-0 flex items-center gap-4 p-5">
      <div className="grid flex-1 grid-cols-7 gap-1.5">
        {Array.from({ length: 28 }, (_, i) => (
          <span
            key={i}
            className={`aspect-square rounded-md border ${
              i === TODAY
                ? "border-mint bg-mint"
                : BOOKED.has(i)
                  ? "border-mint/30 bg-mint/15"
                  : "border-line bg-white/[0.02]"
            }`}
          />
        ))}
      </div>
      <div className="flex w-[34%] flex-col gap-2 rounded-xl border border-line bg-ink-3 p-3">
        <span className="h-1.5 w-3/4 rounded-full bg-white/20" />
        <span className="h-1.5 w-1/2 rounded-full bg-white/10" />
        <span className="mt-2 flex items-center gap-1.5 font-mono text-[0.62rem] text-mint">
          <span className="grid size-4 place-items-center rounded-full bg-mint/15">
            <Check className="text-[0.6rem]" />
          </span>
          RBAC
        </span>
      </div>
    </div>
  );
}

const COMMITS = [
  { x: 40, y: 62, risk: false },
  { x: 110, y: 62, risk: false },
  { x: 180, y: 28, risk: false },
  { x: 250, y: 62, risk: true },
  { x: 320, y: 28, risk: false },
  { x: 390, y: 62, risk: false },
];

function Tcc() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-5">
      <svg viewBox="0 0 430 90" className="w-full overflow-visible">
        <path d="M40 62H390" stroke="rgb(255 255 255 / 0.16)" strokeWidth="1.5" />
        <path
          d="M110 62C145 62 145 28 180 28H320C355 28 355 62 390 62"
          fill="none"
          stroke="rgb(139 124 255 / 0.55)"
          strokeWidth="1.5"
        />
        {COMMITS.map((c) => (
          <g key={`${c.x}-${c.y}`}>
            {c.risk && (
              <circle cx={c.x} cy={c.y} r="13" fill="none" stroke="#ffb86b" strokeOpacity="0.45">
                <animate attributeName="r" values="8;17;8" dur="2.4s" repeatCount="indefinite" />
                <animate
                  attributeName="stroke-opacity"
                  values="0.7;0;0.7"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
            <circle
              cx={c.x}
              cy={c.y}
              r="6"
              fill={c.risk ? "#ffb86b" : "#0a0c11"}
              stroke={c.risk ? "#ffb86b" : "#5ef2c2"}
              strokeWidth="1.75"
            />
          </g>
        ))}
      </svg>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[0.68rem] text-dim">p(defect)</span>
        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
          <span className="block h-full w-[78%] rounded-full bg-gradient-to-r from-mint via-[#ffe08a] to-[#ffb86b]" />
        </span>
      </div>
    </div>
  );
}

const BARS = [0.42, 0.58, 0.5, 0.72, 0.64, 0.86, 0.78, 1];

function Bi() {
  return (
    <div className="absolute inset-0 flex items-end gap-2 p-5 pt-10">
      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="absolute inset-x-5 top-6 h-[42%] w-[calc(100%-2.5rem)]"
      >
        <path
          d="M0 34 14 28 28 30 43 19 57 22 71 10 86 13 100 3"
          fill="none"
          stroke="#8b7cff"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {BARS.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-t-md bg-gradient-to-t from-mint/10 to-mint/70"
          style={{ height: `${h * 62}%` }}
        />
      ))}
    </div>
  );
}

const CHECKS = [
  ["POST", "/login", "200"],
  ["GET", "/usuarios", "200"],
  ["POST", "/produtos", "201"],
  ["POST", "/carrinhos", "201"],
];

function Qa() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-1.5 p-5 font-mono text-[0.72rem]">
      <p className="text-dim">
        <span className="text-mint">$</span> pytest -q
      </p>
      {CHECKS.map(([method, path, status]) => (
        <p key={path} className="flex items-center gap-2 text-muted">
          <Check className="text-mint" />
          <span className="w-9 text-dim">{method}</span>
          <span className="flex-1 truncate">{path}</span>
          <span className="text-mint">{status}</span>
        </p>
      ))}
      <p className="text-dim">
        <span className="animate-blink text-mint">▍</span>
      </p>
    </div>
  );
}

const ROUTES = [
  ["POST", "/logar", "JWT"],
  ["POST", "/laboratorio/novo", "multipart"],
  ["GET", "/laboratorio/relatorio", "PDF"],
];

function Labs() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 p-5 font-mono text-[0.72rem]">
      {ROUTES.map(([method, path, tag]) => (
        <p
          key={path}
          className="flex items-center gap-2.5 rounded-lg border border-line bg-white/[0.02] px-3 py-2"
        >
          <span
            className={`w-10 rounded px-1 py-0.5 text-center text-[0.62rem] font-semibold ${
              method === "GET" ? "bg-violet/15 text-violet" : "bg-mint/15 text-mint"
            }`}
          >
            {method}
          </span>
          <span className="flex-1 truncate text-muted">{path}</span>
          <span className="text-dim">{tag}</span>
        </p>
      ))}
    </div>
  );
}

const VISUALS: Record<ProjectId, () => React.JSX.Element> = {
  pulso: Pulso,
  sis: Sis,
  tcc: Tcc,
  bi: Bi,
  qa: Qa,
  labs: Labs,
};

export function ProjectVisual({ id }: { id: ProjectId }) {
  const Visual = VISUALS[id];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
      <Visual />
    </div>
  );
}
