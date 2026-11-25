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
  { d: trace(22, 5, 3, 0, 46), color: "#1F3A93", width: 1.6 },
  { d: trace(14, 8, 2, 1.3, 98), color: "#D9434B", width: 1.4 },
  { d: trace(9, 13, 2, 2.1, 142), color: "rgb(30 42 74 / 0.4)", width: 1.2 },
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
        <div className="absolute inset-0 bg-[linear-gradient(rgb(30_42_74/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(30_42_74/0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
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
        <path d="M40 62H390" stroke="rgb(30 42 74 / 0.16)" strokeWidth="1.5" />
        <path
          d="M110 62C145 62 145 28 180 28H320C355 28 355 62 390 62"
          fill="none"
          stroke="rgb(217 67 75 / 0.55)"
          strokeWidth="1.5"
        />
        {COMMITS.map((c) => (
          <g key={`${c.x}-${c.y}`}>
            {c.risk && (
              <circle cx={c.x} cy={c.y} r="13" fill="none" stroke="#C2410C" strokeOpacity="0.45">
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
              fill={c.risk ? "#C2410C" : "#FCFCF8"}
              stroke={c.risk ? "#C2410C" : "#1F3A93"}
              strokeWidth="1.75"
            />
          </g>
        ))}
      </svg>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[0.68rem] text-dim">p(defect)</span>
        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-fg/[0.07]">
          <span className="block h-full w-[78%] rounded-full bg-gradient-to-r from-mint via-[#E8A93B] to-[#C2410C]" />
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
          stroke="#D9434B"
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

/* OEE = availability × performance × quality. Decorative, made-up values. */
const OEE_PARTS = [
  { k: "D", v: 0.92 },
  { k: "P", v: 0.88 },
  { k: "Q", v: 0.99 },
];

function Oee() {
  return (
    <div className="absolute inset-0 flex items-center gap-6 p-6 md:gap-10 md:p-10 lg:gap-14 lg:p-14">
      <div className="flex flex-1 flex-col gap-4 lg:gap-7">
        {OEE_PARTS.map((part) => (
          <div key={part.k} className="flex items-center gap-3 font-mono text-[0.72rem] text-dim lg:text-[0.9rem]">
            <span className="w-3 text-fg">{part.k}</span>
            <span className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-fg/[0.06] lg:h-4">
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-mint/50 to-mint"
                style={{ width: `${part.v * 100}%` }}
              />
            </span>
            <span className="w-9 text-right">{Math.round(part.v * 100)}%</span>
          </div>
        ))}
      </div>
      <div className="grid size-28 shrink-0 place-items-center rounded-full border border-mint/30 bg-mint/[0.06] md:size-40 lg:size-56">
        <div className="text-center">
          <p className="display text-[2rem] text-fg md:text-[2.8rem] lg:text-[3.8rem]">80%</p>
          <p className="font-mono text-[0.62rem] text-dim">D × P × Q</p>
        </div>
      </div>
    </div>
  );
}

/* Parts crossing a virtual line on the conveyor: counting by camera. */
function Vision() {
  return (
    <div className="absolute inset-0 p-5">
      <svg viewBox="0 0 400 140" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <rect x="0" y="52" width="400" height="36" rx="6" fill="rgb(30 42 74 / 0.04)" />
        <line x1="250" y1="28" x2="250" y2="112" stroke="#1F3A93" strokeWidth="1.5" strokeDasharray="4 4" />
        {[0, 1, 2].map((i) => (
          <rect key={i} y="60" width="34" height="20" rx="4" fill="#D9434B" fillOpacity="0.6">
            <animate attributeName="x" values="-40;400" dur="4.5s" begin={`${i * -1.5}s`} repeatCount="indefinite" />
          </rect>
        ))}
        <text x="258" y="24" fill="#1F3A93" fontFamily="ui-monospace, monospace" fontSize="11">
          +1
        </text>
      </svg>
    </div>
  );
}

/* Planned (violet) versus approved production (mint) per group of procedures. */
const PPI_ROWS = [
  { label: "SIA", planned: 0.92, done: 0.61 },
  { label: "SIH", planned: 0.74, done: 0.58 },
  { label: "APS", planned: 0.66, done: 0.7 },
  { label: "MAC", planned: 0.84, done: 0.31 },
];

function Ppi() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-3 p-5 font-mono text-[0.66rem] text-dim">
      {PPI_ROWS.map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <span className="w-8">{row.label}</span>
          <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-fg/[0.05]">
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-violet/35"
              style={{ width: `${row.planned * 100}%` }}
            />
            <span
              className="absolute inset-y-[3px] left-0 rounded-full bg-mint/80"
              style={{ width: `${row.done * 100}%` }}
            />
          </div>
        </div>
      ))}
      <p className="flex gap-4 pt-1">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-violet/60" />
          plan
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-mint" />
          prod
        </span>
      </p>
    </div>
  );
}

const VISUALS: Record<ProjectId, () => React.JSX.Element> = {
  oee: Oee,
  vision: Vision,
  pulso: Pulso,
  tcc: Tcc,
  bi: Bi,
  qa: Qa,
  ppi: Ppi,
};

export function ProjectVisual({ id }: { id: ProjectId }) {
  const Visual = VISUALS[id];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
      <Visual />
    </div>
  );
}
