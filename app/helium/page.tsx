import { HeliumNext } from "@/app/components/HeliumFrame";

const properties = [
  ["Atomic number", "2", "two protons"],
  ["Standard atomic weight", "4.002602", "conventional value"],
  ["Electron configuration", "1s²", "a filled first shell"],
  ["Phase at 20 °C", "Gas", "monatomic He"],
  ["Boiling point", "4.222 K", "−268.928 °C"],
  ["Freezing at 1 atm", "Never", "pressure is required"],
  ["Density", "0.1785 g/L", "at 0 °C, 1 atm"],
  ["1st ionization energy", "2372.3 kJ/mol", "highest of any element"],
];

export default function HeliumOverview() {
  return (
    <>
      <section className="he-identity-hero">
        <div className="page-width he-identity-inner">
          <div className="he-hero-copy">
            <p className="he-eyebrow">Helium · He · Atomic number 2</p>
            <h1>The element<br />hidden in light.</h1>
            <p>Two protons. Two electrons. A completed shell so stable that ordinary chemistry can scarcely persuade it to participate.</p>
          </div>
          <div className="he-orbital" aria-label="Stylized helium atom with a two-proton, two-neutron nucleus and two electrons">
            <div className="he-nucleus"><i>p</i><i>n</i><i>n</i><i>p</i></div>
            <div className="he-electron-ring"><b>e⁻</b><b>e⁻</b></div>
            <span>1s²</span>
          </div>
          <div className="he-d3-line"><span>D<sub>3</sub></span><strong>587.6 nm</strong><small>the solar line that announced a new element</small></div>
        </div>
      </section>

      <section className="he-opening page-width">
        <div className="he-big-number">02</div>
        <div className="he-opening-title"><p className="he-eyebrow">Perfectly full</p><h2>A tiny atom with almost nothing to prove.</h2></div>
        <div className="he-opening-copy">
          <p>Helium’s atomic number is two: every Helium nucleus has two protons. A neutral atom holds two electrons in the compact 1s orbital—the first electron shell filled to capacity. Pulling one away requires more energy than for any other element.</p>
          <p>That closed shell explains Helium’s place above the noble gases and much of its character. It is colorless, odorless, nonflammable, and monatomic under ordinary conditions. Stable neutral Helium compounds do not persist at everyday pressures and temperatures, though exotic ions and high-pressure compounds reveal that “inert” is not the same as absolutely incapable.</p>
        </div>
      </section>

      <section className="he-property-section page-width">
        <div className="he-section-heading"><p className="he-eyebrow">Measured identity</p><h2>At the edge of absolute zero.</h2><p>Helium’s numbers are a study in extremes: the smallest noble-gas atom, the lowest boiling point, and an electron held more tightly than in any other neutral atom.</p></div>
        <div className="he-property-grid">
          {properties.map(([label, value, note], index) => (
            <article key={label} className={index === 4 ? "he-property-hot" : ""}>
              <span>{String(index + 1).padStart(2, "0")}</span><p>{label}</p><strong>{value}</strong><small>{note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="he-noble-section">
        <div className="page-width he-noble-inner">
          <div className="he-shell-diagram" aria-hidden="true"><span>1s</span><div><i>↑</i><i>↓</i></div><small>paired electrons · opposite spins</small></div>
          <div className="he-noble-copy">
            <p className="he-eyebrow">The first noble gas</p><h2>Completion changes everything.</h2>
            <p>Hydrogen’s lone electron leaves its first shell half full. Helium adds a second electron with opposite spin, completing the 1s orbital. With no low-energy vacancy to fill and a very high cost for removing an electron, Helium has little incentive to form ordinary bonds.</p>
            <p>Its weak interatomic attractions also explain why the element condenses only at 4.222 kelvin at one atmosphere. Even after liquefying, Helium’s zero-point motion is large enough to prevent crystallization unless external pressure squeezes the atoms together.</p>
          </div>
        </div>
      </section>

      <section className="he-contrast page-width">
        <article><span>H</span><small>Element 1</small><h3>Reactive by possibility</h3><p>A half-filled shell lets Hydrogen lose, gain, or share an electron. It usually forms H₂ and an enormous range of compounds.</p></article>
        <div className="he-contrast-axis"><i /><strong>one electron apart</strong><i /></div>
        <article><span>He</span><small>Element 2</small><h3>Inert by completion</h3><p>A filled first shell makes Helium monatomic and extraordinarily reluctant to bond. Its most dramatic behavior emerges from physics rather than chemistry.</p></article>
      </section>

      <HeliumNext href="/helium/cosmos" number="02" label="Cosmic forge" title="The universe’s first ash." />
    </>
  );
}
