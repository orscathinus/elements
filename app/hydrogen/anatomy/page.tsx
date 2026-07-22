import type { Metadata } from "next";
import { NextChapter } from "@/app/components/HydrogenFrame";
import { SpectrumExplorer } from "@/app/components/SpectrumExplorer";

export const metadata: Metadata = { title: "Atomic Anatomy of Hydrogen" };

export default function AnatomyPage() {
  return (
    <>
      <section className="anatomy-hero page-width">
        <div>
          <p className="eyebrow cyan">Chapter 03 · Atomic anatomy</p>
          <h1>One atom.<br />Three identities.<br />Infinite lessons.</h1>
        </div>
        <div className="quantum-card">
          <span>Ground state</span>
          <strong>1s¹</strong>
          <p>n = 1 · ℓ = 0 · m<sub>ℓ</sub> = 0</p>
          <div className="quantum-cloud" />
        </div>
      </section>

      <section className="isotope-section page-width">
        <div className="section-heading">
          <div><p className="eyebrow cyan">Isotopes</p><h2>Same element. Different weight.</h2></div>
          <p>All Hydrogen isotopes have one proton, so all are Hydrogen. Changing the neutron count changes the mass and nuclear stability—not the atomic number.</p>
        </div>
        <div className="isotope-grid">
          <article>
            <div className="isotope-symbol"><sup>1</sup>H</div>
            <p className="eyebrow">Protium · stable</p>
            <h3>The ordinary one</h3>
            <div className="mini-nucleus"><i className="proton">p</i></div>
            <p>One proton, zero neutrons. Protium accounts for nearly all naturally occurring Hydrogen atoms. Its nucleus is simply a proton.</p>
            <dl><div><dt>Natural abundance</dt><dd>≈99.985%</dd></div><div><dt>Nuclear spin</dt><dd>½</dd></div></dl>
          </article>
          <article className="deuterium-card">
            <div className="isotope-symbol"><sup>2</sup>H</div>
            <p className="eyebrow">Deuterium · stable</p>
            <h3>The heavy one</h3>
            <div className="mini-nucleus"><i className="proton">p</i><i className="neutron">n</i></div>
            <p>One proton and one neutron. Deuterium forms “heavy water” when it replaces protium in H₂O and serves as a tracer in chemistry, biology, and climate science.</p>
            <dl><div><dt>Symbol</dt><dd>D</dd></div><div><dt>Natural abundance</dt><dd>≈0.015%*</dd></div></dl>
          </article>
          <article>
            <div className="isotope-symbol"><sup>3</sup>H</div>
            <p className="eyebrow">Tritium · radioactive</p>
            <h3>The fleeting one</h3>
            <div className="mini-nucleus"><i className="proton">p</i><i className="neutron">n</i><i className="neutron">n</i></div>
            <p>One proton and two neutrons. Tritium beta-decays into helium-3. It occurs naturally only in traces and is also produced in reactors and the upper atmosphere.</p>
            <dl><div><dt>Symbol</dt><dd>T</dd></div><div><dt>Half-life</dt><dd>12.32 years</dd></div></dl>
          </article>
        </div>
        <p className="isotope-note">*Deuterium abundance varies naturally by reservoir; the value shown is a representative terrestrial proportion.</p>
      </section>

      <section className="spectrum-section page-width">
        <div className="section-heading">
          <div><p className="eyebrow cyan">Atomic fingerprint</p><h2>Hydrogen does not glow continuously.</h2></div>
          <p>Electrons occupy discrete quantum states. When an excited atom drops to a lower state, it emits a photon whose energy exactly matches the gap—creating a line, not a smear.</p>
        </div>
        <SpectrumExplorer />
      </section>

      <section className="bohr-section page-width">
        <div className="energy-ladder" aria-label="Hydrogen energy levels converging toward ionization">
          {[6,5,4,3,2,1].map((level, index) => (
            <div key={level} style={{ bottom: `${12 + (5 - index) * (level === 1 ? 0 : 9)}%` }}><span>n = {level}</span></div>
          ))}
          <i className="energy-jump">photon</i>
        </div>
        <div>
          <p className="eyebrow cyan">A model that changed physics</p>
          <h2>The simplest spectrum was a doorway.</h2>
          <p>In 1913 Niels Bohr proposed that Hydrogen’s electron could occupy only certain energy states. His model reproduced the wavelengths in the Balmer series and connected atomic structure to Planck’s quantum of energy.</p>
          <p>Modern quantum mechanics replaced fixed circular orbits with orbitals: probability distributions described by wavefunctions. The exact Hydrogen solutions remain foundational because the one-electron atom can be solved analytically, providing a benchmark for more complex atoms and precision tests of theory.</p>
          <div className="formula-card"><span>Energy level</span><strong>E<sub>n</sub> = −13.6 eV / n²</strong><small>Useful non-relativistic approximation for Hydrogen</small></div>
        </div>
      </section>

      <NextChapter href="/hydrogen/discovery" number="04" label="Discovery" title="The air that made water." />
    </>
  );
}
