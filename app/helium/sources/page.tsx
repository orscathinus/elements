import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Helium Sources and Further Reading" };

const groups = [
  {
    title: "Properties & atomic data",
    sources: [
      ["Royal Society of Chemistry · Helium", "https://periodic-table.rsc.org/element/2/helium", "Element properties, natural abundance, uses, and discovery history."],
      ["IUPAC · Periodic Table", "https://iupac.org/what-we-do/periodic-table-of-elements/", "Official element names, symbols, atomic numbers, and standard atomic weights."],
      ["CIAAW · Helium", "https://ciaaw.org/helium.htm", "Standard atomic weight and the isotope basis of the conventional value."],
      ["NIST · Atomic Spectra Database", "https://www.nist.gov/pml/atomic-spectra-database", "Critically evaluated Helium energy levels, wavelengths, and transition data."],
      ["NIH PubChem · Helium", "https://pubchem.ncbi.nlm.nih.gov/compound/Helium", "Identifiers, physical description, safety records, and linked chemical data."],
    ],
  },
  {
    title: "Cosmos & stars",
    sources: [
      ["NASA Science · The Big Bang", "https://science.nasa.gov/universe/the-big-bang/", "Cosmic expansion, early matter, and the formation of the lightest elements."],
      ["NASA WMAP · Tests of Big Bang Cosmology", "https://map.gsfc.nasa.gov/universe/bb_tests_ele.html", "Primordial light-element abundance as a test of Big Bang nucleosynthesis."],
      ["NASA Science · Star Types", "https://science.nasa.gov/universe/stars/types/", "Main-sequence Hydrogen fusion and later stages of stellar evolution."],
      ["NASA Imagine the Universe · Stellar Fusion", "https://imagine.gsfc.nasa.gov/educators/lessons/xray_spectra/background-fusion.html", "Educational overview of fusion pathways and energy release in stars."],
    ],
  },
  {
    title: "Low-temperature physics",
    sources: [
      ["Nobel Prize · Pyotr Kapitsa", "https://www.nobelprize.org/prizes/physics/1978/kapitsa/biographical/", "Biographical record connecting Kapitsa with the 1937 discovery of superfluidity."],
      ["Nobel Prize · Superfluid helium-3", "https://www.nobelprize.org/prizes/physics/1996/summary/", "Official prize summary for the discovery of superfluidity in helium-3."],
      ["CERN · Cryogenics", "https://home.cern/science/engineering/cryogenics-low-temperatures-high-performance/", "Liquid and superfluid Helium, the 2.17 K transition, and the LHC cooling system."],
      ["NIST Chemistry WebBook · Helium", "https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440597&Units=SI", "Evaluated gas-phase thermochemical and spectroscopic reference data."],
    ],
  },
  {
    title: "History, supply & applications",
    sources: [
      ["U.S. Bureau of Land Management · About Helium", "https://www.blm.gov/programs/energy-and-minerals/helium/about-helium", "Properties, 1868 solar identification, terrestrial sourcing, and major applications."],
      ["U.S. Geological Survey · Helium Statistics", "https://www.usgs.gov/centers/national-minerals-information-center/helium-and-rare-gases-statistics-and-information", "Current U.S. and global supply, demand, production, and commodity publications."],
      ["USGS · Mineral Commodity Summaries 2026", "https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf", "The latest annual U.S. government commodity summary available for this edition."],
      ["American Chemical Society · Helium", "https://www.acs.org/green-chemistry-sustainability/research-innovation/endangered-elements/helium.html", "Terrestrial scarcity, radiogenic origin, extraction, and conservation context."],
      ["CERN · Large Hadron Collider", "https://home.cern/science/accelerators/large-hadron-collider/", "Superfluid Helium cooling for the LHC’s superconducting magnet system."],
    ],
  },
];

export default function HeliumSourcesPage() {
  return (
    <>
      <section className="he-sources-hero"><div className="page-width"><p className="he-eyebrow">Chapter 06 · Sources</p><h1>Trace every<br />bright line.</h1><p>Helium’s story crosses chemistry, astronomy, geology, engineering, and quantum physics. This shelf prioritizes standards bodies, national laboratories, scientific agencies, and professional societies.</p></div></section>
      <section className="he-source-shelf page-width">{groups.map((group, groupIndex) => <section key={group.title}><div className="he-source-title"><span>{String(groupIndex + 1).padStart(2, "0")}</span><h2>{group.title}</h2></div><div className="he-source-list">{group.sources.map(([title, href, copy], index) => <a key={href} href={href} target="_blank" rel="noreferrer"><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div><i>↗</i></a>)}</div></section>)}</section>
      <section className="he-editorial-note page-width"><div><p className="he-eyebrow">Editorial method</p><h2>Wonder needs footnotes.</h2></div><div><p>Values are rounded only where the page explains a concept rather than reporting a standard. Temperature and pressure are stated when they change the physical meaning. Cosmic abundance is identified by mass rather than confused with atom count.</p><p>Historical “firsts” are presented as linked observations and confirmations. Technical applications are described without treating every use as equally large or irreplaceable. Supply information is dated because production, reserves, ownership, and markets change.</p><small>Content reviewed for the July 2026 edition.</small></div></section>
      <section className="he-finish page-width"><span>He</span><div><p className="he-eyebrow">Edition 002 complete</p><h2>Two elements illuminated.<br />One hundred sixteen to come.</h2><Link href="/#periodic-table">Return to the periodic table →</Link></div></section>
    </>
  );
}
