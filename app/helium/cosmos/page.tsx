import type { Metadata } from "next";
import { HeliumNext } from "@/app/components/HeliumFrame";

export const metadata: Metadata = { title: "Helium in the Cosmos" };

const stages = [
  ["~1 second", "Neutrons and protons", "The hot early universe cools enough for quarks to remain bound. Helium cannot exist yet, but its nuclear ingredients do."],
  ["~3–20 minutes", "Primordial helium", "Protons and neutrons assemble mostly into helium-4 nuclei. Expansion and cooling halt widespread fusion before heavier elements can become abundant."],
  ["~380,000 years", "Electrons settle", "Nuclei capture electrons as the universe becomes transparent. Neutral Helium forms alongside neutral Hydrogen."],
  ["First stars", "Fusion resumes", "Gravity compresses gas until stars ignite. Hydrogen fusion builds fresh Helium and releases the energy that makes stars shine."],
  ["Red giants", "Helium becomes fuel", "At about 100 million kelvin, three helium-4 nuclei can ultimately combine into carbon through the triple-alpha process."],
];

export default function HeliumCosmosPage() {
  return (
    <>
      <section className="he-cosmos-hero">
        <div className="page-width he-cosmos-inner">
          <p className="he-eyebrow">Chapter 02 · Cosmic forge</p><h1>The universe’s<br />first ash.</h1>
          <p>Helium is both primordial material and the enduring product of starlight—the element created before the first star, then manufactured inside nearly every star thereafter.</p>
          <div className="cosmic-fraction"><strong>≈25%</strong><span>of ordinary elemental mass after Big Bang nucleosynthesis was Helium</span></div>
        </div>
      </section>

      <section className="he-cosmic-intro page-width">
        <div><p className="he-eyebrow">Two birthplaces</p><h2>Before stars.<br />Inside stars.</h2></div>
        <div><p>Big Bang nucleosynthesis produced most of the universe’s primordial helium-4 during its first minutes. The exact abundance depends on the baryon density, neutron lifetime, and expansion history, making primordial Helium a precision test of cosmology.</p><p>Stars later became Helium factories. In a Sun-like star, the proton–proton chain transforms four Hydrogen nuclei into one helium-4 nucleus. The final nucleus weighs slightly less than its starting parts; the mass difference appears as energy, neutrinos, and radiation.</p></div>
      </section>

      <section className="he-origin-track page-width">
        <p className="he-eyebrow">Five thresholds</p>
        <div className="he-origin-list">{stages.map(([time, title, copy], index) => <article key={time}><span>{String(index + 1).padStart(2, "0")}</span><time>{time}</time><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="he-fusion-transform">
        <div className="page-width he-fusion-inner">
          <div className="he-fusion-copy"><p className="he-eyebrow">The proton–proton chain</p><h2>Four become one.</h2><p>The Sun does not simply press four protons together at once. It proceeds through a network of rare weak-interaction steps and faster nuclear reactions. In the dominant branch, deuterium and helium-3 appear as intermediates before helium-4 emerges.</p><p>The complete chain releases about 26.7 megaelectronvolts, although neutrinos carry a small portion away. Those neutrinos leave the solar core almost immediately; photons can take vastly longer to work outward through repeated interactions.</p></div>
          <div className="he-fusion-equation" aria-label="Simplified net proton-proton chain"><div className="four-protons"><i>p</i><i>p</i><i>p</i><i>p</i></div><span>→</span><div className="alpha-core"><i>p</i><i>n</i><i>n</i><i>p</i></div><p>+ 2e⁺ + 2ν<sub>e</sub> + energy</p><small>simplified net reaction</small></div>
        </div>
      </section>

      <section className="he-triple-alpha page-width">
        <div className="triple-visual"><i>⁴He</i><i>⁴He</i><i>⁴He</i><span>100 million K</span><strong>¹²C</strong></div>
        <div><p className="he-eyebrow">The triple-alpha bridge</p><h2>Helium makes the carbon doorway.</h2><p>When a star’s core runs short of Hydrogen, gravity can compress and heat it until Helium itself becomes fuel. Two helium-4 nuclei briefly form unstable beryllium-8. If a third arrives before that nucleus falls apart, the system can form excited carbon-12, which releases energy as it settles.</p><p>The reaction helps explain why carbon is abundant enough for rocky planets and life. More massive or evolved stars can continue with additional alpha captures, building oxygen and other even-numbered nuclei.</p></div>
      </section>

      <section className="he-solar-fate page-width"><p className="he-eyebrow">Our Sun’s long arc</p><h2>Accumulation now. Ignition later.</h2><div><p>Today the Sun’s core steadily accumulates Helium produced by Hydrogen fusion. Helium is not yet the core’s main fuel. In roughly five billion years, after core Hydrogen is depleted, the core will contract while the outer layers swell into a red giant.</p><p>Eventually the central temperature will become high enough for Helium burning. In a low-mass star like the Sun, ignition begins dramatically in a helium flash, though the released energy is absorbed internally rather than exploding the star. Much later, the Sun will shed its outer layers and leave a carbon–oxygen white dwarf.</p></div></section>

      <HeliumNext href="/helium/extremes" number="03" label="Quantum extremes" title="A liquid that forgets friction." />
    </>
  );
}
