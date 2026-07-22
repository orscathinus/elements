"use client";

import { useState } from "react";

const phases = {
  gas: {
    label: "Gas",
    range: "Above 4.22 K at 1 atm",
    title: "Restless and monatomic",
    copy: "Ordinary Helium is a gas of single atoms. With no molecular rotations or vibrations to absorb energy, it carries heat and sound in distinctive ways and diffuses through tiny openings.",
  },
  liquid: {
    label: "Helium I",
    range: "4.22 K → 2.17 K",
    title: "A classical liquid—barely",
    copy: "Below its boiling point, helium-4 becomes a transparent liquid. It remains extraordinarily light and refuses to freeze at atmospheric pressure, even as temperature approaches absolute zero.",
  },
  superfluid: {
    label: "Helium II",
    range: "Below the 2.17 K lambda point",
    title: "Quantum behavior, room-sized",
    copy: "A large fraction of the liquid occupies one collective quantum state. It can flow through microscopic pores, form persistent currents, climb surfaces as a thin film, and transport heat with startling efficiency.",
  },
};

type Phase = keyof typeof phases;

export function HeliumPhaseExplorer() {
  const [active, setActive] = useState<Phase>("superfluid");
  const phase = phases[active];

  return (
    <div className={`phase-explorer phase-${active}`}>
      <div className="phase-tabs" role="group" aria-label="Explore states of helium-4">
        {(Object.keys(phases) as Phase[]).map((key) => (
          <button key={key} type="button" className={active === key ? "active" : ""} aria-pressed={active === key} onClick={() => setActive(key)}>
            <span>{phases[key].label}</span><small>{phases[key].range}</small>
          </button>
        ))}
      </div>
      <div className="phase-vessel" aria-hidden="true">
        <div className="phase-liquid"><i /><i /><i /><i /><i /></div>
        <div className="film-left" /><div className="film-right" />
        <span className="phase-temperature">{active === "gas" ? "4.22 K +" : active === "liquid" ? "3.0 K" : "1.8 K"}</span>
      </div>
      <div className="phase-copy"><p>{phase.range}</p><h3>{phase.title}</h3><div>{phase.copy}</div></div>
    </div>
  );
}
