import type { Metadata } from "next";
import { HeliumNext } from "@/app/components/HeliumFrame";

export const metadata: Metadata = { title: "The Discovery of Helium" };

const events = [
  ["18 Aug 1868", "Jules Janssen", "A yellow line during an eclipse", "Observing a total solar eclipse from Guntur, India, Janssen used a spectroscope to study prominences and found a bright yellow line near—but not identical to—the sodium D lines."],
  ["Oct 1868", "Norman Lockyer", "A solar element is proposed", "Lockyer observed the same line from England without an eclipse and concluded that the Sun contained an unknown substance. The feature became known as D₃."],
  ["1868–1871", "Lockyer & colleagues", "Helium receives a solar name", "The name came from hēlios, Greek for Sun. Spectroscopy had inferred a new element across 150 million kilometres before any terrestrial sample was secured."],
  ["1882", "Luigi Palmieri", "A terrestrial spectral clue", "Palmieri reported the Helium line while analyzing material associated with Mount Vesuvius, an early indication that the solar substance existed on Earth."],
  ["1895", "William Ramsay", "Gas released from cleveite", "Ramsay treated the uranium mineral cleveite with acid and isolated a gas whose spectrum included the yellow Helium line. Per Teodor Cleve and Nils Langlet independently confirmed it and measured its atomic weight."],
  ["1905", "Cady & McFarland", "A resource under Kansas", "Analysis of nonflammable natural gas from Dexter, Kansas, revealed unusually high Helium content and pointed toward a practical terrestrial source."],
  ["1908", "Heike Kamerlingh Onnes", "The last gas becomes liquid", "At Leiden, Onnes cooled Helium to about 4 K and liquefied it, opening a new experimental continent of low-temperature physics."],
  ["1937–1938", "Kapitsa · Allen · Misener", "Superfluidity appears", "Independent experiments established the extraordinary flow and heat-transfer behavior of Helium II, turning a rare gas into a model quantum fluid."],
];

export default function HeliumDiscoveryPage() {
  return (
    <>
      <section className="he-discovery-hero">
        <div className="page-width he-discovery-inner"><p className="he-eyebrow">Chapter 04 · Discovery</p><h1>Found in the Sun.<br />Captured on Earth.</h1><p>Helium was the first element discovered somewhere other than Earth—an extraordinary victory for the idea that light itself could identify matter.</p><div className="d3-spectrum" aria-label="Stylized spectral line at 587.6 nanometres"><i /><span>D₃</span><strong>587.6 nm</strong></div></div>
      </section>

      <section className="he-spectroscopy-preface page-width"><div><p className="he-eyebrow">A new kind of evidence</p><h2>A dark instrument reads a burning star.</h2></div><div><p>A spectroscope separates light by wavelength. Atoms and ions absorb or emit at characteristic energies, leaving lines in a spectrum. By the 1860s, researchers had connected many solar lines with terrestrial substances. But one bright yellow feature resisted the sodium label.</p><p>The unfamiliar line appeared close to sodium’s famous doublet, yet at a distinct position. Lockyer designated it D₃ and argued for an unknown solar element. The claim was daring: no bottle existed, no mineral sample could be weighed, and the evidence arrived only as light.</p></div></section>

      <section className="he-discovery-timeline page-width"><div className="he-section-heading"><p className="he-eyebrow">Eight turning points</p><h2>From eclipse to quantum fluid.</h2><p>Credit is distributed across observers, interpreters, chemists, and low-temperature physicists. Discovery was a chain, not a single theatrical moment.</p></div><div className="he-event-list">{events.map(([year, person, title, copy], index) => <article key={year}><div className="event-index">{String(index + 1).padStart(2, "0")}</div><time>{year}</time><div><span>{person}</span><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>

      <section className="he-name-panel"><div className="page-width he-name-inner"><div className="helios-word"><span>ἥλιος</span><strong>HĒLIOS</strong><small>Sun</small></div><div><p className="he-eyebrow">A name looking upward</p><h2>Helium carried its birthplace into language.</h2><p>The name derives from the Greek word for the Sun. Its “-ium” ending would normally suggest a metal, reflecting the fact that the element’s chemical nature was unknown when it was named. Only after terrestrial isolation did Helium take its place as the lightest noble gas.</p><p>The symbol He fits the alphabetic system promoted by Jöns Jacob Berzelius. Unlike Hydrogen, whose name describes water formation, Helium’s name preserves the location of its first convincing signal.</p></div></div></section>

      <section className="he-instrument-grid page-width"><article><span>1868</span><h3>Spectroscope</h3><p>Turned a point of sunlight into a chemical fingerprint.</p></article><article><span>1895</span><h3>Discharge tube</h3><p>Made the terrestrial gas glow so its spectrum could be compared with the Sun.</p></article><article><span>1908</span><h3>Cryostat</h3><p>Pushed cooling low enough to condense the element with the lowest boiling point.</p></article><article><span>1938</span><h3>Capillary experiments</h3><p>Revealed flow that classical viscosity could not explain.</p></article></section>

      <HeliumNext href="/helium/uses" number="05" label="Uses & supply" title="Cold enough for modern science." />
    </>
  );
}
