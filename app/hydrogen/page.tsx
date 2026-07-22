import { NextChapter } from "@/app/components/HydrogenFrame";

const properties = [
  ["Atomic number", "1", "one proton"],
  ["Standard atomic weight", "1.0080", "conventional value"],
  ["Electron configuration", "1s¹", "one electron"],
  ["Phase at 20 °C", "Gas", "diatomic H₂"],
  ["Melting point", "13.99 K", "−259.16 °C"],
  ["Boiling point", "20.27 K", "−252.88 °C"],
  ["Density", "0.08988 g/L", "at 0 °C, 1 atm"],
  ["Electronegativity", "2.20", "Pauling scale"],
  ["1st ionization energy", "1312.0 kJ/mol", "gas-phase atoms"],
];

export default function HydrogenOverview() {
  return (
    <>
      <section className="chapter-hero identity-hero page-width">
        <div className="chapter-label">
          <span>01</span>
          <p>Identity</p>
        </div>
        <div className="chapter-title">
          <p className="eyebrow cyan">Hydrogen · H · Atomic number 1</p>
          <h1>The atom<br />before all others.</h1>
          <p className="chapter-deck">
            Strip matter down to its simplest durable architecture and Hydrogen remains: one proton, usually one electron, and no neutron at all.
          </p>
        </div>
        <div className="identity-orb" aria-label="Stylized Hydrogen atom: one proton and one electron">
          <div className="nucleus"><span>p⁺</span></div>
          <div className="electron-path"><i>e⁻</i></div>
          <div className="orbital-cloud" />
          <p>1s atomic orbital</p>
        </div>
      </section>

      <section className="lead-story page-width">
        <div className="section-index">H / 1.0080</div>
        <div className="prose-large">
          <p className="drop-cap">
            Hydrogen is the first element because its nucleus carries a single positive charge. That lone proton fixes its atomic number at one; a neutral atom balances it with one electron. The most common isotope, protium, adds no neutron. No other element can be built with fewer massive pieces.
          </p>
          <p>
            Simplicity does not make Hydrogen chemically dull. Its electron shell is half-filled, so it can lose an electron, gain one, or share its electron in a covalent bond. Under ordinary conditions elemental Hydrogen pairs into H₂, a colorless, odorless, highly flammable gas. In water and organic matter, Hydrogen is bound into compounds rather than roaming free.
          </p>
        </div>
        <aside className="margin-fact">
          <span className="fact-glyph">H₂</span>
          <strong>Two by two</strong>
          <p>Free Hydrogen normally travels as a diatomic molecule: two atoms joined by a strong covalent bond.</p>
        </aside>
      </section>

      <section className="property-section page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow cyan">Measured identity</p>
            <h2>Hydrogen, by the numbers</h2>
          </div>
          <p>Reference values describe ordinary molecular Hydrogen or isolated atoms under the stated conditions. Temperature and pressure matter enormously for a gas this light.</p>
        </div>
        <div className="property-grid">
          {properties.map(([label, value, note], index) => (
            <article key={label} className={index === 0 ? "featured-property" : ""}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{label}</p>
              <strong>{value}</strong>
              <small>{note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="molecule-section page-width">
        <div className="molecule-visual" aria-label="Diagram of an H2 molecule">
          <div className="atom atom-a">H</div>
          <div className="molecule-bond"><span>74 pm</span></div>
          <div className="atom atom-b">H</div>
        </div>
        <div className="molecule-copy">
          <p className="eyebrow cyan">The molecule</p>
          <h2>Alone, but rarely solitary.</h2>
          <p>
            Two Hydrogen atoms can lower their energy by sharing electrons. Their nuclei settle about 74 picometres apart, producing H₂. The molecule is nonpolar and its bond is strong—roughly 436 kilojoules per mole must be supplied to separate the atoms in the gas phase.
          </p>
          <p>
            Hydrogen’s tiny molecules move quickly and diffuse through small leaks. They also have very low density, which is useful for lift and challenging for storage. Liquid Hydrogen requires cryogenic temperatures below its 20.27 K boiling point.
          </p>
        </div>
      </section>

      <section className="character-grid page-width">
        <article>
          <span>01</span>
          <h3>A nonmetal apart</h3>
          <p>Hydrogen sits above Group 1 because it has one valence electron, yet it is not an alkali metal under ordinary conditions. Its chemistry also echoes the halogens, which need one electron to fill a shell. The solitary top-left position is useful—and imperfect.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Three oxidation stories</h3>
          <p>Hydrogen is commonly assigned +1 when bonded to more electronegative atoms, −1 in many metal hydrides, and 0 in H₂. Those simple bookkeeping numbers reveal its unusual ability to give, take, or share electron density.</p>
        </article>
        <article>
          <span>03</span>
          <h3>A flame easy to miss</h3>
          <p>Hydrogen ignites readily in air and can burn with a pale blue, nearly invisible flame. It is not intrinsically poisonous, but it can displace oxygen; safe systems must manage leaks, ignition, pressure, and ventilation.</p>
        </article>
      </section>

      <NextChapter href="/hydrogen/origins" number="02" label="Cosmic origins" title="Born before the stars." />
    </>
  );
}

