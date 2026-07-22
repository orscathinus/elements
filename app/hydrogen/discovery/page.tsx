import type { Metadata } from "next";
import { NextChapter } from "@/app/components/HydrogenFrame";

export const metadata: Metadata = { title: "The Discovery of Hydrogen" };

const timeline = [
  { year: "1671", name: "Robert Boyle", title: "A gas from metal and acid", copy: "Boyle published observations of gas released when iron reacted with dilute acid. The substance was made and burned, but it was not yet understood as an element distinct from other kinds of ‘air.’", mark: "RB" },
  { year: "1766", name: "Henry Cavendish", title: "Inflammable air becomes distinct", copy: "Cavendish carefully isolated and measured ‘inflammable air,’ showing that it had consistent properties and was extraordinarily light. This work is commonly treated as Hydrogen’s discovery as a distinct substance.", mark: "HC" },
  { year: "1781–1783", name: "Cavendish & Lavoisier", title: "Fire makes water", copy: "Experiments showed that burning the gas with oxygen produced water. Antoine Lavoisier interpreted water as a compound rather than an element and named the gas hydrogène—from Greek roots meaning ‘water-former.’", mark: "H₂O" },
  { year: "1800", name: "Nicholson & Carlisle", title: "Water taken apart", copy: "Soon after the voltaic pile was announced, William Nicholson and Anthony Carlisle used electric current to decompose water, collecting Hydrogen and oxygen at opposite electrodes.", mark: "±" },
  { year: "1898", name: "James Dewar", title: "Hydrogen becomes liquid", copy: "Dewar cooled Hydrogen below its 20.27 K boiling point and produced the liquid, a demanding cryogenic achievement that demonstrated how extreme Hydrogen’s phase changes are.", mark: "K" },
  { year: "1913", name: "Niels Bohr", title: "The spectrum yields its rule", copy: "Bohr’s quantum model accounted for Hydrogen’s spectral series with discrete electron energies. The model was incomplete, but its success made Hydrogen the proving ground of atomic physics.", mark: "n" },
  { year: "1931", name: "Urey, Murphy & Brickwedde", title: "Deuterium appears", copy: "A faint extra spectral signature revealed heavy Hydrogen. Harold Urey’s group concentrated the isotope and identified deuterium, work that earned Urey the 1934 Nobel Prize in Chemistry.", mark: "D" },
  { year: "1934", name: "Oliphant, Harteck & Rutherford", title: "Tritium and fusion in the laboratory", copy: "By bombarding deuterium targets, the team produced tritium and observed nuclear fusion reactions among Hydrogen isotopes—foreshadowing a major field of twentieth-century physics.", mark: "T" },
];

export default function DiscoveryPage() {
  return (
    <>
      <section className="discovery-hero page-width">
        <div className="discovery-flame" aria-hidden="true"><i /><i /><i /></div>
        <div>
          <p className="eyebrow cyan">Chapter 04 · Discovery</p>
          <h1>The air<br />that made water.</h1>
          <p>Hydrogen was produced long before it was understood. Its discovery required chemists to rethink air, water, combustion—and eventually the atom itself.</p>
        </div>
      </section>

      <section className="history-preface page-width">
        <span className="history-quote">“water-former”</span>
        <div>
          <p className="eyebrow cyan">A name with an argument inside it</p>
          <h2>Hydro + genēs</h2>
          <p>Lavoisier’s French name <em>hydrogène</em> joined Greek-derived roots for water and forming. It encoded a revolutionary conclusion: water was not an indivisible classical element. It could be made from two gases and decomposed into them.</p>
        </div>
      </section>

      <section className="history-timeline page-width">
        <div className="timeline-heading"><p className="eyebrow cyan">Eight turning points</p><h2>From strange air to quantum archetype.</h2></div>
        <div className="timeline-list">
          {timeline.map((event, index) => (
            <article key={event.year}>
              <div className="timeline-year"><span>{String(index + 1).padStart(2, "0")}</span><time>{event.year}</time></div>
              <div className="timeline-medallion">{event.mark}</div>
              <div className="timeline-copy">
                <p>{event.name}</p>
                <h3>{event.title}</h3>
                <p>{event.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="naming-panel page-width">
        <div className="old-symbols" aria-hidden="true"><span>☉</span><span>△</span><strong>H</strong></div>
        <div>
          <p className="eyebrow cyan">A symbol stabilizes</p>
          <h2>From alchemical marks to H.</h2>
          <p>Early chemical practice used many pictorial signs and local conventions. In the early nineteenth century Jöns Jacob Berzelius promoted alphabetic chemical symbols based on Latin names. The system was compact, printable, and combinable: H for Hydrogen, O for oxygen, H₂O for water.</p>
          <p>Modern formulas carry more information than names alone. Subscripts give atomic ratios, superscripts can identify isotopes or charges, and structural notation reveals how atoms connect.</p>
        </div>
      </section>

      <NextChapter href="/hydrogen/uses" number="05" label="Uses & future" title="Industry’s invisible workhorse." />
    </>
  );
}

