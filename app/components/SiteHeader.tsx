"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Table", "/#periodic-table"],
  ["Hydrogen", "/hydrogen"],
  ["Origins", "/hydrogen/origins"],
  ["Discovery", "/hydrogen/discovery"],
  ["Uses", "/hydrogen/uses"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="atlas-mark" href="/" aria-label="The Hydrogen Atlas home">
        <span className="atlas-dot" />
        The Hydrogen Atlas
      </Link>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
        <span className="sr-only">Toggle navigation</span>
      </button>
      <nav id="site-navigation" className={open ? "site-nav is-open" : "site-nav"}>
        {links.map(([label, href], index) => {
          const active = href !== "/#periodic-table" && pathname === href;
          return (
            <span className="nav-item" key={href}>
              {index > 0 && <span className="nav-star">•</span>}
              <Link
                className={active ? "active" : ""}
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </span>
          );
        })}
      </nav>
    </header>
  );
}

