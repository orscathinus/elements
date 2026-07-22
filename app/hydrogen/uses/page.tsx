import type { Metadata } from "next";
import { NextChapter } from "@/app/components/HydrogenFrame";

export const metadata: Metadata = { title: "Hydrogen Uses and Future" };

const uses = [
  ["NH₃", "Ammonia & fertilizer", "Hydrogen reacts with nitrogen in the Haber–Bosch process. The resulting ammonia is the foundation of nitrogen fertilizers that support modern agriculture."],
  ["S↓", "Petroleum refining", "Refineries use Hydrogen in hydrodesulfurization to remove sulfur and in hydrocracking to rearrange heavy hydrocarbons into more useful products."],
  ["CH₃OH", "Methanol & chemicals", "Hydrogen combines with carbon oxides to produce methanol and participates in the manufacture of solvents, polymers, and many chemical intermediates."],
  ["C=C", "Food & materials", "Catalytic hydrogenation changes unsaturated bonds. It is used in chemical synthesis and can alter the texture and stability of oils—though partial hydrogenation can create unwanted trans fats."],
  ["LH₂", "Rocket propulsion", "Liquid Hydrogen paired with liquid oxygen provides high specific impulse. Its very low density and cryogenic temperature demand large, insulated tanks and careful handling."],
  ["e⁻", "Fuel cells", "A fuel cell converts Hydrogen’s chemical energy electrochemically. At the point of use, Hydrogen and oxygen produce electricity, water, and heat without combustion."],
];

const routes = [
  { color: "grey", name: "Reforming", input: "Natural gas + steam", output: "H₂ + CO₂", copy: "The established industrial route. Without carbon capture, carbon dioxide enters the atmosphere." },
  { color: "blue", name: "Reforming + capture", input: "Natural gas + steam", output: "H₂ + captured CO₂", copy: "Adds carbon capture and storage. Climate performance depends on capture rate, methane leakage, and the full supply chain." },
  { color: "green", name: "Electrolysis", input: "Water + renewable electricity", output: "H₂ + O₂", copy: "An electrolyzer splits water. Emissions depend mainly on how the electricity and equipment are produced." },
  { color: "pink", name: "Nuclear electrolysis", input: "Water + nuclear energy", output: "H₂ + O₂", copy: "Uses nuclear electricity, and potentially heat, to produce low-carbon Hydrogen." },
];

export default function UsesPage() {
  return (
    <>
      <section className="uses-hero page-width">
        <div>
          <p className="eyebrow cyan">Chapter 05 · Uses & future</p>
          <h1>Small atom.<br />Heavy industry.</h1>
          <p>Most Hydrogen today is not used in cars or power plants. It works behind the scenes—feeding chemical reactions, refining fuels, and making ammonia.</p>
        </div>
        <div className="pipeline-visual" aria-label="Hydrogen moving from production through storage to use">
          <div><span>01</span><strong>Make</strong><small>separate H₂ from compounds</small></div>
          <i />
          <div><span>02</span><strong>Move</strong><small>compress, liquefy, or convert</small></div>
          <i />
          <div><span>03</span><strong>Use</strong><small>react, burn, or make electricity</small></div>
        </div>
      </section>

      <section className="uses-grid-section page-width">
        <div className="section-heading"><div><p className="eyebrow cyan">Present tense</p><h2>What Hydrogen already does.</h2></div><p>Hydrogen’s value comes from reactivity, not just combustion. Industry often uses it as a chemical feedstock—a material incorporated into another product.</p></div>
        <div className="uses-grid">
          {uses.map(([symbol, title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{symbol}</strong>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="carrier-section">
        <div className="page-width carrier-inner">
          <div className="carrier-orb"><span>H₂</span><i>energy in</i><b>energy out</b></div>
          <div>
            <p className="eyebrow cyan">A crucial distinction</p>
            <h2>Hydrogen is an energy carrier, not a primary source.</h2>
            <p>Free Hydrogen is scarce on Earth because it is usually bound into water, hydrocarbons, and other compounds. Energy must be spent to extract or manufacture H₂. That stored energy can later be moved and released, much as electricity carries energy generated elsewhere.</p>
            <p>This means a Hydrogen technology cannot be judged only by what comes out of a tailpipe or fuel cell. Its full impact depends on feedstock, electricity source, conversion losses, methane leakage, carbon capture, transport, storage, and end-use efficiency.</p>
          </div>
        </div>
      </section>

      <section className="production-section page-width">
        <div className="section-heading"><div><p className="eyebrow cyan">Production pathways</p><h2>The gas is colorless. The labels are not.</h2></div><p>Industry uses informal colors to describe production routes. They are shorthand—not standardized guarantees of emissions or sustainability.</p></div>
        <div className="route-list">
          {routes.map((route) => (
            <article key={route.color} className={`route-${route.color}`}>
              <div className="route-color"><i /><span>{route.color}</span></div>
              <div><p>{route.name}</p><strong>{route.input}</strong></div>
              <div className="route-arrow">→</div>
              <div><p>Outputs</p><strong>{route.output}</strong></div>
              <p>{route.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="future-balance page-width">
        <div className="balance-heading"><p className="eyebrow cyan">The honest balance sheet</p><h2>Promising—within limits.</h2></div>
        <div className="balance-columns">
          <div><span>Where it may help</span><ul><li>Replacing fossil-derived Hydrogen already used in fertilizer and refining</li><li>High-temperature industrial processes that are difficult to electrify directly</li><li>Long-duration or seasonal energy storage in selected systems</li><li>Some heavy transport, shipping fuels, aviation fuels, and remote applications</li></ul></div>
          <div><span>What makes it hard</span><ul><li>Energy is lost during production, compression, transport, and reconversion</li><li>Low volumetric density demands pressure, cryogenics, or chemical carriers</li><li>Hydrogen can embrittle some metals and leaks through small pathways</li><li>Climate benefit vanishes when production remains carbon-intensive</li></ul></div>
        </div>
        <p className="balance-conclusion">The best use of clean Hydrogen is likely selective: prioritize applications that need a molecule or cannot be efficiently electrified, and compare the entire system rather than the flame alone.</p>
      </section>

      <NextChapter href="/hydrogen/sources" number="06" label="Sources" title="Follow the evidence." />
    </>
  );
}

