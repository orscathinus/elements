import type { Metadata } from "next";
import { HeliumNext } from "@/app/components/HeliumFrame";
import { HeliumPhaseExplorer } from "@/app/components/HeliumPhaseExplorer";

export const metadata: Metadata = { title: "Helium at Quantum Extremes" };

const comparisons = [
  ["⁴He", "2 protons · 2 neutrons", "Boson", "Integer nuclear spin", "Becomes superfluid below 2.17 K at saturated vapor pressure. Many atoms can occupy the same collective quantum state."],
  ["³He", "2 protons · 1 neutron", "Fermion", "Half-integer nuclear spin", "Becomes superfluid only at temperatures of a few millikelvin, after atoms form loosely bound Cooper pairs."],
];

export default function HeliumExtremesPage() {
  return (
    <>
      <section className="he-extreme-hero">
        <div className="page-width he-extreme-inner"><p className="he-eyebrow">Chapter 03 · Quantum extremes</p><h1>A liquid that<br />forgets friction.</h1><p>Cool Helium far enough and quantum rules stop hiding at atomic scale. They flow through pipes, climb walls, carry heat, and organize vortices you can see.</p><div className="lambda-mark"><span>λ</span><strong>2.17 K</strong><small>helium-4 lambda point</small></div></div>
      </section>

      <section className="he-phase-section page-width">
        <div className="he-section-heading"><p className="he-eyebrow">Interactive phase portrait</p><h2>Three regimes, one isotope.</h2><p>At one atmosphere, helium-4 boils at 4.222 K and crosses into the superfluid phase near 2.17 K. Select each regime to see how its behavior changes.</p></div>
        <HeliumPhaseExplorer />
      </section>

      <section className="he-superfluid-story">
        <div className="page-width he-superfluid-inner"><div className="superfluid-image" role="img" aria-label="Artistic visualization of superfluid helium climbing a vessel and forming a fountain" /><div><p className="he-eyebrow">Helium II</p><h2>Flow without ordinary viscosity.</h2><p>Below the lambda point, helium-4 enters a phase described by superfluid and normal components. The superfluid component can move through extraordinarily narrow channels without the usual viscous resistance. A thin Rollin film can creep over container walls, seeking the same level on both sides.</p><p>Superfluid Helium also conducts heat in a profoundly nonclassical way. Temperature differences drive counterflow between its components, and heat can propagate as a wave called “second sound.” Rotation produces quantized vortices: circulation comes only in fixed units rather than any arbitrary amount.</p><aside>A superfluid is not “nothing but frictionless water.” Its behavior follows collective quantum order, and real experiments still involve surfaces, excitations, turbulence, and heat transfer.</aside></div></div>
      </section>

      <section className="he-isotope-duel page-width">
        <div className="he-section-heading"><p className="he-eyebrow">Two stable isotopes</p><h2>One neutron changes the rules.</h2><p>Both nuclei contain two protons, so both are Helium. Their different particle statistics produce radically different paths into superfluidity.</p></div>
        <div className="isotope-duel-grid">{comparisons.map(([symbol, nucleus, family, spin, copy]) => <article key={symbol}><div><strong>{symbol}</strong><span>{nucleus}</span></div><dl><div><dt>Quantum family</dt><dd>{family}</dd></div><div><dt>Nuclear spin</dt><dd>{spin}</dd></div></dl><p>{copy}</p></article>)}</div>
      </section>

      <section className="he-no-freeze page-width">
        <div className="pressure-map" aria-label="Conceptual phase map showing liquid helium persisting to absolute zero without pressure"><span className="axis-y">Pressure</span><span className="axis-x">Temperature →</span><div className="solid-zone">solid</div><div className="liquid-zone">liquid</div><div className="gas-zone">gas</div><i className="lambda-line">λ line</i></div>
        <div><p className="he-eyebrow">Zero-point motion</p><h2>Cold alone cannot freeze it.</h2><p>Most substances crystallize when thermal motion becomes weak enough. Helium atoms are so light and their mutual attractions so weak that quantum zero-point motion remains large. At atmospheric pressure, liquid Helium does not solidify even as temperature approaches absolute zero.</p><p>Helium-4 can be forced into a solid only under pressures above roughly 2.5 megapascals near zero kelvin. This refusal to freeze is one of the clearest macroscopic signatures that quantum motion never truly stops.</p></div>
      </section>

      <section className="he-quantum-cards page-width"><article><span>01</span><h3>Fountain effect</h3><p>Heating one side of a superleak creates a pressure difference that can drive a visible jet of Helium.</p></article><article><span>02</span><h3>Second sound</h3><p>Entropy and temperature travel as a wave while the superfluid and normal components move in opposite directions.</p></article><article><span>03</span><h3>Quantized vortices</h3><p>Rotating superfluid organizes circulation into filaments whose strength is fixed by Planck’s constant and particle mass.</p></article><article><span>04</span><h3>Persistent flow</h3><p>Under suitable conditions, superfluid circulation can persist for extremely long times without ordinary viscous decay.</p></article></section>

      <HeliumNext href="/helium/discovery" number="04" label="Discovery" title="An element found off-world." />
    </>
  );
}
