"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";

const chapters = [
  { href: "/hydrogen", label: "Identity", number: "01" },
  { href: "/hydrogen/origins", label: "Cosmic origins", number: "02" },
  { href: "/hydrogen/anatomy", label: "Atomic anatomy", number: "03" },
  { href: "/hydrogen/discovery", label: "Discovery", number: "04" },
  { href: "/hydrogen/uses", label: "Uses & future", number: "05" },
  { href: "/hydrogen/sources", label: "Sources", number: "06" },
];

export function HydrogenFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <main className="hydrogen-site">
      <SiteHeader />
      <div className="chapter-nav-wrap">
        <nav className="chapter-nav page-width" aria-label="Hydrogen chapters">
          {chapters.map((chapter) => (
            <Link
              key={chapter.href}
              href={chapter.href}
              className={pathname === chapter.href ? "active" : ""}
            >
              <span>{chapter.number}</span>
              {chapter.label}
            </Link>
          ))}
        </nav>
      </div>
      {children}
      <footer className="site-footer page-width">
        <div>
          <span className="atlas-dot" />
          <strong>The Hydrogen Atlas</strong>
        </div>
        <p>Edition 001 · The periodic table, illuminated one element at a time.</p>
        <Link href="/#periodic-table">Return to the table ↑</Link>
      </footer>
    </main>
  );
}

export function NextChapter({ href, number, label, title }: { href: string; number: string; label: string; title: string }) {
  return (
    <Link className="next-chapter page-width" href={href}>
      <span className="eyebrow">Next chapter · {number} / 06</span>
      <div>
        <p>{label}</p>
        <h2>{title}</h2>
        <i aria-hidden="true">→</i>
      </div>
    </Link>
  );
}

