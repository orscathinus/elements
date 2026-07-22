"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";

const chapters = [
  { href: "/helium", label: "Identity", number: "01" },
  { href: "/helium/cosmos", label: "Cosmic forge", number: "02" },
  { href: "/helium/extremes", label: "Quantum extremes", number: "03" },
  { href: "/helium/discovery", label: "Discovery", number: "04" },
  { href: "/helium/uses", label: "Uses & supply", number: "05" },
  { href: "/helium/sources", label: "Sources", number: "06" },
];

export function HeliumFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <main className="helium-site">
      <SiteHeader />
      <div className="helium-chapter-wrap">
        <nav className="helium-chapter-nav page-width" aria-label="Helium chapters">
          {chapters.map((chapter) => (
            <Link key={chapter.href} href={chapter.href} className={pathname === chapter.href ? "active" : ""}>
              <span>{chapter.number}</span>{chapter.label}
            </Link>
          ))}
        </nav>
      </div>
      {children}
      <footer className="helium-footer page-width">
        <div><span className="helium-sun-dot" /><strong>The Helium Atlas</strong></div>
        <p>Edition 002 · First seen in sunlight, now indispensable on Earth.</p>
        <Link href="/#periodic-table">Return to the table ↑</Link>
      </footer>
    </main>
  );
}

export function HeliumNext({ href, number, label, title }: { href: string; number: string; label: string; title: string }) {
  return (
    <Link className="helium-next page-width" href={href}>
      <span>Next chapter · {number} / 06</span>
      <div><p>{label}</p><h2>{title}</h2><i aria-hidden="true">↗</i></div>
    </Link>
  );
}
