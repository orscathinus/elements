"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { elements, type ElementRecord } from "@/lib/elements";

type LockedPreview = Pick<ElementRecord, "number" | "symbol" | "name" | "mass">;

export function PeriodicTable({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<LockedPreview | null>(null);
  const normalized = query.trim().toLowerCase();

  const matches = useMemo(
    () =>
      new Set(
        elements
          .filter((element) =>
            [element.name, element.symbol, String(element.number)].some((value) =>
              value.toLowerCase().includes(normalized),
            ),
          )
          .map((element) => element.number),
      ),
    [normalized],
  );

  return (
    <div className={compact ? "table-shell is-compact" : "table-shell"}>
      {!compact && (
        <div className="table-tools">
          <div>
            <p className="eyebrow">118 positions · 1 illuminated</p>
            <h2>The periodic table, waiting to be explored.</h2>
          </div>
          <label className="element-search">
            <span className="sr-only">Find an element</span>
            <span aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find by name, symbol, or number"
            />
          </label>
        </div>
      )}

      <div className="periodic-scroll" tabIndex={0} aria-label="Scrollable periodic table">
        <div className="periodic-grid">
          <div className="series-placeholder lanthanide-marker" aria-hidden="true">
            <span>57–71</span>
            <small>Lanthanides</small>
          </div>
          <div className="series-placeholder actinide-marker" aria-hidden="true">
            <span>89–103</span>
            <small>Actinides</small>
          </div>
          {elements.map((element) => {
            const visibleMatch = !normalized || matches.has(element.number);
            const style = {
              gridColumn: element.tableColumn,
              gridRow: element.tableRow,
            };
            const card = (
              <>
                <span className="element-number">{element.number}</span>
                <span className="element-symbol">{element.symbol}</span>
                {!compact && <span className="element-name">{element.name}</span>}
                {element.status === "locked" && (
                  <span className="element-lock" aria-hidden="true">◇</span>
                )}
              </>
            );

            if (element.status === "active") {
              return (
                <Link
                  key={element.number}
                  href="/hydrogen"
                  style={style}
                  className={`element-card active-element ${visibleMatch ? "" : "filtered"}`}
                  aria-label="Hydrogen, element 1. Open the Hydrogen atlas."
                >
                  {card}
                </Link>
              );
            }

            return (
              <button
                key={element.number}
                type="button"
                style={style}
                className={`element-card locked-element ${visibleMatch ? "" : "filtered"}`}
                onClick={() => setSelected(element)}
                aria-label={`${element.name}, element ${element.number}. Coming in a future edition.`}
              >
                {card}
              </button>
            );
          })}
        </div>
      </div>

      {!compact && (
        <div className="table-legend">
          <span><i className="legend-active" /> Open atlas</span>
          <span><i className="legend-locked" /> Future edition</span>
          <span className="table-hint">Select any dimmed element to preview its place.</span>
        </div>
      )}

      {selected && (
        <div className="element-drawer" role="dialog" aria-modal="true" aria-labelledby="locked-title">
          <button className="drawer-backdrop" aria-label="Close preview" onClick={() => setSelected(null)} />
          <div className="drawer-card">
            <button className="drawer-close" type="button" onClick={() => setSelected(null)} aria-label="Close">×</button>
            <p className="eyebrow">Future edition</p>
            <div className="drawer-element">
              <span>{selected.number}</span>
              <strong>{selected.symbol}</strong>
              <small>{selected.mass}</small>
            </div>
            <h3 id="locked-title">{selected.name} is still in the dark.</h3>
            <p>
              Its position is mapped and ready. When this element is added, the tile will ignite and open into its own multi-page atlas—without changing the table around it.
            </p>
            <button className="text-button" type="button" onClick={() => setSelected(null)}>Return to the table →</button>
          </div>
        </div>
      )}
    </div>
  );
}

