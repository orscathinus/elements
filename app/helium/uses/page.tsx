import type { Metadata } from "next";
import { HeliumNext } from "@/app/components/HeliumFrame";

export const metadata: Metadata = { title: "Helium Uses and Supply" };

const uses = [
  ["MRI", "Superconducting magnets", "Liquid Helium cools the superconducting coils in many MRI and NMR systems. Modern magnet designs reduce losses, but cold Helium remains central to much of the installed base."],
  ["1.9 K", "Particle accelerators", "CERN’s Large Hadron Collider circulates superfluid Helium around powerful superconducting magnets, keeping them colder than interstellar space and efficiently carrying heat away."],
  ["He leak", "Vacuum leak detection", "Helium atoms move through very small leaks and are rare in ambient air. A mass spectrometer can detect a trace deliberately sprayed around a sealed system."],
  ["Si", "Semiconductor manufacture", "High-purity Helium provides controlled atmospheres, heat transfer, cooling, and leak testing in processes where chemical reactivity or contamination would be costly."],
  ["LOX", "Spaceflight systems", "Helium can pressurize and purge propellant tanks because it is light, inert, and remains gaseous at temperatures that condense many other gases."],
  ["He–O₂", "Special breathing mixtures", "Heliox reduces gas density and breathing resistance. It has medical applications and can be used in deep diving, with composition and procedure tailored to the pressure and task."],
  ["Arc", "Shielding & fabrication", "Helium shields hot metal from reactive air during some arc-welding processes and offers high heat input, especially for nonferrous metals and specialized work."],
  ["↑", "Lift", "Because it is less dense than air and nonflammable, Helium lifts balloons, scientific instruments, and airships—though this visible use competes with higher-value applications."],
];

export default function HeliumUsesPage() {
  return (
    <>
      <section className="he-uses-hero"><div className="page-width he-uses-inner"><p className="he-eyebrow">Chapter 05 · Uses & supply</p><h1>Cold enough<br />for modern science.</h1><p>Helium’s commercial value comes from a rare combination: chemical indifference, low density, high thermal conductivity, easy detectability, and a boiling point no other element can match.</p><div className="use-orbit"><span>MRI</span><span>SPACE</span><span>CHIPS</span><span>SCIENCE</span><i>He</i></div></div></section>

      <section className="he-use-mosaic page-width">
        <div className="he-section-heading"><p className="he-eyebrow">Beyond balloons</p><h2>An invisible infrastructure.</h2><p>The same qualities that make Helium seem uneventful in a flask make it invaluable when heat, contamination, fire, or tiny leaks cannot be tolerated.</p></div>
        <div className="he-uses-grid">{uses.map(([mark, title, copy], index) => <article key={title} className={index === 0 || index === 1 ? "major-use" : ""}><span>{String(index + 1).padStart(2, "0")}</span><strong>{mark}</strong><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="he-lhc-section"><div className="page-width he-lhc-inner"><div className="lhc-rings" aria-hidden="true"><i /><i /><i /><span>27 km</span><strong>1.9 K</strong></div><div><p className="he-eyebrow">A river of cold at CERN</p><h2>Superfluid cooling at planetary scale.</h2><p>The Large Hadron Collider bends proton beams with thousands of superconducting magnets. Its principal magnets operate at 1.9 kelvin, using a closed Helium circuit and one of the largest cryogenic systems ever built.</p><p>Below the lambda point, superfluid Helium transfers heat extremely effectively and can cool long strings of magnets. CERN reports a total Helium inventory on the order of 120 tonnes for the LHC cryogenic system, alongside tens of thousands of leak-tight pipe seals.</p><dl><div><dt>Magnet field</dt><dd>8.33 T</dd></div><div><dt>Operating current</dt><dd>11,850 A</dd></div><div><dt>Cold mass</dt><dd>≈36,000 t</dd></div></dl></div></div></section>

      <section className="he-earth-cycle page-width">
        <div><p className="he-eyebrow">Made slowly underground</p><h2>Earth does not mine primordial starlight.</h2><p>Most commercial Helium on Earth is radiogenic. Uranium and thorium in rocks decay by emitting alpha particles—helium-4 nuclei. After gaining electrons, some Helium migrates through rock and becomes trapped in certain geological gas reservoirs.</p><p>Producers separate it from natural gas streams, often through cryogenic processing. Economically useful concentrations are geographically uneven, and a Helium-bearing field is not automatically viable: composition, flow, infrastructure, coproducts, and market access all matter.</p></div>
        <div className="earth-column" aria-label="Helium journey from radioactive rock to a gas reservoir"><span className="atmosphere">escape to space ↑</span><span className="caprock">caprock</span><div className="reservoir"><i>He</i><i>CH₄</i><i>He</i><i>N₂</i></div><div className="source-rock"><b>U</b><em>α</em><b>Th</b><em>α</em></div></div>
      </section>

      <section className="he-conservation">
        <div className="page-width he-conservation-inner"><div><p className="he-eyebrow">A finite terrestrial resource</p><h2>Use it. Capture it. Use it again.</h2></div><div><p>Helium is abundant in the universe but scarce in Earth’s atmosphere—only about five parts per million by volume. Once released, it disperses; over geological time, some reaches the upper atmosphere and escapes to space. The underground accumulations used by industry formed over immense spans of time, so they are nonrenewable on a human schedule.</p><p>Conservation does not mean forbidding every balloon. It means matching purity and supply to need, maintaining leak-tight systems, recovering boil-off, reliquefying gas, and designing magnets and instruments that require less inventory. Recycling can turn a one-pass consumable into a working fluid.</p><div className="recovery-loop"><span>USE</span><i>→</i><span>RECOVER</span><i>→</i><span>PURIFY</span><i>→</i><span>RELIQUEFY</span><b>↺</b></div></div></div>
      </section>

      <section className="he-safety page-width"><div><p className="he-eyebrow">Safety without combustion</p><h2>Inert is not harmless.</h2></div><div className="safety-grid"><article><strong>01</strong><h3>Asphyxiation</h3><p>Helium can displace oxygen without smell or warning, especially in confined spaces. Oxygen monitoring and ventilation are essential.</p></article><article><strong>02</strong><h3>Pressure</h3><p>Cylinders store gas at high pressure. Restraints, correct regulators, compatible fittings, and trained handling prevent mechanical hazards.</p></article><article><strong>03</strong><h3>Cryogenic injury</h3><p>Liquid Helium can cause severe cold burns and makes materials brittle. Boil-off expands dramatically and must never be trapped.</p></article><article><strong>04</strong><h3>Never inhale for amusement</h3><p>Breathing Helium deprives the brain of oxygen; pressurized inhalation can also injure lungs or introduce gas into blood vessels.</p></article></div></section>

      <HeliumNext href="/helium/sources" number="06" label="Sources" title="Trace every bright line." />
    </>
  );
}
