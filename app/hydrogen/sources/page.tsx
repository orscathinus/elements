import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hydrogen Sources and Further Reading" };

const sourceGroups = [
  {
    title: "Properties & standards",
    sources: [
      ["Royal Society of Chemistry · Hydrogen", "https://periodic-table.rsc.org/element/1/hydrogen", "Element data, discovery summary, chemistry, uses, and historical context."],
      ["IUPAC · Periodic Table of Elements", "https://iupac.org/what-we-do/periodic-table-of-elements/", "Official names, symbols, atomic numbers, and standard atomic weights."],
      ["CIAAW · Hydrogen", "https://ciaaw.org/hydrogen.htm", "Standard atomic-weight interval, isotope abundances, and the reasons natural samples vary."],
      ["NIST Chemistry WebBook · Hydrogen", "https://webbook.nist.gov/cgi/cbook.cgi?ID=C1333740&Units=SI", "Critically evaluated thermochemical and spectroscopic data for molecular Hydrogen."],
      ["NIH PubChem · Hydrogen", "https://pubchem.ncbi.nlm.nih.gov/compound/Hydrogen", "Physical description, identifiers, safety data, and linked scientific records."],
    ],
  },
  {
    title: "Atoms, spectra & isotopes",
    sources: [
      ["NIST Atomic Spectra Database", "https://www.nist.gov/pml/atomic-spectra-database", "Critically evaluated wavelengths, energy levels, and transition probabilities."],
      ["NIST · Atomic Spectroscopy Databases", "https://www.nist.gov/pml/atomic-spectroscopy-databases", "Hydrogen and deuterium energy-level calculations and related reference databases."],
      ["NIST · Henry Moseley and the Periodic Table", "https://www.nist.gov/news-events/news/2024/02/henry-moseley-and-periodic-table-elements", "Historical account linking spectra, Bohr’s Hydrogen model, and atomic number."],
      ["Nobel Prize · Harold Urey", "https://www.nobelprize.org/prizes/chemistry/1934/summary/", "Official prize record for the discovery of deuterium and heavy water."],
    ],
  },
  {
    title: "Cosmos & stars",
    sources: [
      ["NASA Science · Cosmic History", "https://science.nasa.gov/universe/overview/", "A timeline from the early universe through neutral Hydrogen, first stars, and galaxies."],
      ["NASA Webb · What Were the First Stars Like?", "https://science.nasa.gov/mission/webb/science-overview/science-explainers/what-were-the-first-stars-like/", "Evidence for Hydrogen-and-helium Population III stars and what remains uncertain."],
      ["NASA Science · Star Types", "https://science.nasa.gov/universe/stars/types/", "Main-sequence stars, Hydrogen fusion, stellar mass, and evolution."],
      ["NASA Webb · Early Universe", "https://science.nasa.gov/mission/webb/early-universe/", "Recombination, reionization, and how early stars transformed neutral Hydrogen."],
    ],
  },
  {
    title: "Industry, energy & safety",
    sources: [
      ["U.S. Department of Energy · Hydrogen Fuel Basics", "https://www.energy.gov/cmei/fuels/hydrogen-fuel-basics", "Hydrogen as an energy carrier, production routes, electrolysis, and fuel cells."],
      ["U.S. Energy Information Administration · Uses", "https://www.eia.gov/energyexplained/hydrogen/use-of-hydrogen.php", "Industrial uses, refining, fertilizer, fuel cells, and energy applications."],
      ["International Energy Agency · Hydrogen", "https://www.iea.org/energy-system/low-emission-fuels/hydrogen", "Global production, demand, policy, and low-emissions Hydrogen analysis."],
      ["H2Tools · Hydrogen Safety Guide", "https://h2tools.org/codes-standards-permitting-tools", "DOE-supported guidance on Hydrogen technologies, hazards, codes, and safe project planning."],
    ],
  },
];

export default function SourcesPage() {
  return (
    <>
      <section className="sources-hero page-width">
        <p className="eyebrow cyan">Chapter 06 · Sources</p>
        <h1>Follow<br />the evidence.</h1>
        <p>This atlas favors scientific agencies, standards bodies, laboratories, and professional societies. Values are rounded for readability; the linked references preserve the precision and qualifications.</p>
      </section>
      <section className="source-shelf page-width">
        {sourceGroups.map((group, groupIndex) => (
          <section key={group.title}>
            <div className="source-group-title"><span>{String(groupIndex + 1).padStart(2, "0")}</span><h2>{group.title}</h2></div>
            <div className="source-list">
              {group.sources.map(([title, href, copy], index) => (
                <a key={href} href={href} target="_blank" rel="noreferrer">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <i>↗</i>
                </a>
              ))}
            </div>
          </section>
        ))}
      </section>
      <section className="editorial-note page-width">
        <div><p className="eyebrow cyan">Editorial note</p><h2>Accuracy is a living practice.</h2></div>
        <p>Atomic weights can be expressed as intervals because natural isotope mixtures vary. Engineering and energy figures change with technology and system boundaries. Historical credit can also simplify longer chains of work. This edition states the context where it matters and keeps a traceable source shelf so future revisions can improve rather than overwrite the record.</p>
      </section>
    </>
  );
}
