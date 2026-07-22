import type { Metadata } from "next";
import { NextChapter } from "@/app/components/HydrogenFrame";

export const metadata: Metadata = { title: "Cosmic Origins of Hydrogen" };

const moments = [
  ["< 1 second", "Protons emerge", "As the early universe cools, quarks become bound into protons and neutrons. Every ordinary Hydrogen nucleus is a proton, so the element’s nuclear foundation is already present."],
  ["~3 minutes", "Big Bang nucleosynthesis", "Some protons and neutrons fuse into helium and traces of lithium. Most protons remain unbound as Hydrogen nuclei, leaving Hydrogen dominant among the elements."],
  ["~380,000 years", "Neutral atoms form", "The cosmos cools enough for electrons to stay attached to nuclei. Neutral Hydrogen fills space and the cosmic microwave background travels freely."],
  ["Within a few hundred million years", "The first stars ignite", "Gravity gathers pristine clouds of Hydrogen and helium. Their dense cores become hot enough for Hydrogen fusion, ending the cosmic dark ages."],
  ["Today", "The cycle continues", "Hydrogen still feeds new stars, traces galactic structure, enters planets and oceans, and participates in the chemistry of living cells."],
];

export default function OriginsPage() {
  return (
    <>
      <section className="origin-hero">
        <div className="origin-hero-inner page-width">
          <p className="eyebrow cyan">Chapter 02 · Cosmic origins</p>
          <h1>Born before<br />the stars.</h1>
          <p>Hydrogen did not form inside a sun. It was waiting in the dark before the first sun existed.</p>
          <div className="cosmic-time"><span>13.8</span><small>billion years of history</small></div>
        </div>
      </section>

      <section className="cosmic-intro page-width">
        <div className="section-index">02 / 06</div>
        <div>
          <p className="eyebrow cyan">The primordial element</p>
          <h2>A universe almost simple enough to count.</h2>
        </div>
        <div className="prose-stack">
          <p>During the universe’s first minutes, conditions allowed the lightest nuclei to form but changed too quickly for extensive construction of heavier elements. The result was a cosmos made overwhelmingly of Hydrogen, with helium in second place and only traces of lithium.</p>
          <p>Roughly 380,000 years later, expansion had cooled the plasma enough for electrons to remain bound to protons. Neutral Hydrogen appeared. For hundreds of millions of years there were no stars, only gas, dark matter, radiation, and the slow work of gravity.</p>
        </div>
      </section>

      <section className="cosmic-timeline page-width">
        <p className="eyebrow cyan">Five thresholds</p>
        <div className="cosmic-track">
          {moments.map(([time, title, copy], index) => (
            <article key={time}>
              <div className="moment-marker"><i /><span>{String(index + 1).padStart(2, "0")}</span></div>
              <time>{time}</time>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fusion-section page-width">
        <div className="fusion-copy">
          <p className="eyebrow cyan">Stellar engine</p>
          <h2>Gravity lights the fuse.</h2>
          <p>In a main-sequence star, gravity holds hot plasma under enormous pressure. Protons sometimes approach closely enough for the strong nuclear force to bind them through a sequence of reactions. In the Sun, the proton–proton chain is the principal route.</p>
          <p>The net result converts four Hydrogen nuclei into one helium-4 nucleus, two positrons, two electron neutrinos, photons, and kinetic energy. The helium nucleus has slightly less mass than the original participants; that missing mass leaves as energy according to <em>E = mc²</em>.</p>
          <aside>Fusion is not chemical burning. It reorganizes atomic nuclei and operates at energies millions of times larger per reaction than ordinary chemical bonds.</aside>
        </div>
        <div className="fusion-visual" aria-label="Simplified net result of the proton-proton chain">
          <div className="fusion-protons">
            {[1,2,3,4].map((n) => <i key={n}>p⁺</i>)}
          </div>
          <span className="fusion-arrow">→</span>
          <div className="helium-nucleus"><b>2p</b><b>2n</b></div>
          <div className="fusion-energy">γ <span>+</span> ν <span>+</span> 26.7 MeV</div>
          <small>Simplified net energy release for the complete chain</small>
        </div>
      </section>

      <section className="signal-section page-width">
        <div className="signal-graphic" aria-label="Visualization of the 21-centimeter Hydrogen radio signal">
          <div className="radio-wave" />
          <span>21.106 cm</span>
          <strong>1,420.4 MHz</strong>
        </div>
        <div>
          <p className="eyebrow cyan">A whisper across the galaxy</p>
          <h2>The line that maps invisible Hydrogen.</h2>
          <p>Neutral Hydrogen can undergo a rare “spin-flip” transition in which the relative orientation of its proton and electron changes. The atom emits a radio photon with a wavelength near 21 centimetres. Dust that blocks visible light is largely transparent to this radiation.</p>
          <p>Radio astronomers use the 21-centimetre line to trace vast clouds of neutral Hydrogen, measure their motion through Doppler shifts, and map the spiral structure of the Milky Way. A single atom waits millions of years on average to make the transition, but galactic clouds contain enough atoms to create a detectable signal.</p>
        </div>
      </section>

      <NextChapter href="/hydrogen/anatomy" number="03" label="Atomic anatomy" title="One atom, many revelations." />
    </>
  );
}
