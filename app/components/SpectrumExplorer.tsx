"use client";

import { useState } from "react";

const series = {
  balmer: {
    label: "Balmer · visible",
    range: "380–700 nm",
    note: "Electrons falling to n = 2 produce Hydrogen’s best-known visible lines.",
    lines: [
      { label: "Hδ", value: "410.17", color: "#7547ff", position: 9 },
      { label: "Hγ", value: "434.05", color: "#6b54ff", position: 17 },
      { label: "Hβ", value: "486.13", color: "#27d9ed", position: 33 },
      { label: "Hα", value: "656.28", color: "#ff394f", position: 86 },
    ],
  },
  lyman: {
    label: "Lyman · ultraviolet",
    range: "91–122 nm",
    note: "Falls to the ground state, n = 1, release ultraviolet photons; Lyman-α is central to astronomy.",
    lines: [
      { label: "Ly-δ", value: "94.97", color: "#926dff", position: 13 },
      { label: "Ly-γ", value: "97.25", color: "#8c72ff", position: 20 },
      { label: "Ly-β", value: "102.57", color: "#7e84ff", position: 37 },
      { label: "Ly-α", value: "121.57", color: "#55c8ff", position: 91 },
    ],
  },
  paschen: {
    label: "Paschen · infrared",
    range: "820–1,875 nm",
    note: "Falls to n = 3 emit infrared light—unseen by our eyes but measurable by instruments.",
    lines: [
      { label: "Pa-δ", value: "1,005", color: "#ff765d", position: 18 },
      { label: "Pa-γ", value: "1,094", color: "#ff6655", position: 26 },
      { label: "Pa-β", value: "1,282", color: "#ff4f4b", position: 44 },
      { label: "Pa-α", value: "1,875", color: "#e93c43", position: 92 },
    ],
  },
};

type SeriesKey = keyof typeof series;

export function SpectrumExplorer() {
  const [active, setActive] = useState<SeriesKey>("balmer");
  const selected = series[active];

  return (
    <div className="spectrum-explorer">
      <div className="spectrum-controls" role="group" aria-label="Choose a Hydrogen spectral series">
        {(Object.keys(series) as SeriesKey[]).map((key) => (
          <button
            key={key}
            type="button"
            className={active === key ? "active" : ""}
            aria-pressed={active === key}
            onClick={() => setActive(key)}
          >
            {series[key].label}
          </button>
        ))}
      </div>
      <div className={`spectrum-stage spectrum-${active}`}>
        <div className="spectrum-scale"><span>{selected.range}</span></div>
        {selected.lines.map((line) => (
          <div
            className="spectral-line"
            key={line.label}
            style={{ left: `${line.position}%`, color: line.color, boxShadow: `0 0 22px ${line.color}` }}
          >
            <span>{line.label}</span>
            <small>{line.value} nm</small>
          </div>
        ))}
      </div>
      <p className="spectrum-note">{selected.note}</p>
    </div>
  );
}

