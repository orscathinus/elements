import Link from "next/link";
import { PeriodicTable } from "./components/PeriodicTable";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <SiteHeader />
        <div className="hero-noise" />
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-content page-width">
          <div className="hero-copy">
            <p className="eyebrow cyan">Element 001 · First edition</p>
            <h1>Everything<br />begins with one.</h1>
            <p className="hero-deck">The lightest atom. The oldest element. The fuel of stars.</p>
            <Link className="primary-button" href="/hydrogen">
              <span aria-hidden="true">→</span>
              Enter Hydrogen
            </Link>
          </div>
          <Link className="hero-element" href="/hydrogen" aria-label="Open Hydrogen overview">
            <span className="hero-element-number">1</span>
            <strong>H</strong>
            <span className="hero-element-name">Hydrogen</span>
            <span className="hero-element-mass">1.008</span>
          </Link>
          <div className="hero-fact fact-one"><span>75%</span> of ordinary matter by mass</div>
          <div className="hero-fact fact-two"><span>13.8 bn</span> years of cosmic history</div>
        </div>
        <a className="scroll-cue" href="#periodic-table"><span /> Explore the table</a>
      </section>

      <section id="periodic-table" className="table-section page-width">
        <PeriodicTable />
      </section>

      <section className="opening-note page-width">
        <div className="section-index">02 / 118</div>
        <div>
          <p className="eyebrow cyan">An atlas built element by element</p>
          <h2>Two squares are bright.<br />Their stories diverge.</h2>
        </div>
        <div className="opening-copy">
          <p>
            Hydrogen is not merely the first entry in a catalog. It is the raw material from which stars formed, the reference point for atomic theory, and a quiet participant in water, food, fuel, and every living cell.
          </p>
          <p>
            Its original six-chapter edition remains complete. Now Helium joins it with a separate visual world: sunlight and spectra, stellar ashes, quantum liquids, deep cold, and technologies that depend on an element almost unwilling to react.
          </p>
          <Link className="text-link" href="/hydrogen">Begin the first chapter <span>↗</span></Link>
        </div>
      </section>

      <section className="helium-home-feature">
        <div className="page-width helium-home-inner">
          <div className="helium-feature-copy">
            <p className="eyebrow helium-kicker">Element 002 · New edition</p>
            <h2>Found in<br />the light.</h2>
            <p>
              Helium was recognized in the Sun before it was isolated on Earth. Enter a prismatic six-chapter atlas of noble-gas chemistry, stellar fusion, superfluid matter, scientific discovery, and irreplaceable cold.
            </p>
            <Link className="helium-button" href="/helium"><span>Explore</span><i>He</i><b>→</b></Link>
          </div>
          <Link className="helium-feature-tile" href="/helium" aria-label="Open the Helium atlas">
            <span>2</span>
            <strong>He</strong>
            <small>4.0026</small>
            <em>Helium</em>
          </Link>
          <div className="helium-spectrum-stripe" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        </div>
      </section>
    </main>
  );
}
