"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "News", href: "/news" },
  { label: "Matches", href: "/matches" },
  { label: "Results", href: "/results" },
  { label: "Events", href: "/events" },
  { label: "Stats", href: "/stats" },
  { label: "Forums", href: "/forums" },
  { label: "Rankings", href: "/rankings" },
];

const base = process.env.NODE_ENV === "production" ? "/repositorio-des-web" : "";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    const clean = pathname.replace("/repositorio-des-web", "");
    if (href === "/" && (clean === "/" || clean === "")) return true;
    return href !== "/" && clean.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg-surface">
        <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-5 h-14">
          <Link href={`${base}/`} className="flex items-center gap-2 shrink-0">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M6 8h5v16H6zM13 14h5v10h-5zM20 10h5v14h-5z" fill="#2563eb"/>
            </svg>
            <span className="text-lg font-bold text-text-primary">HLTV</span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`${base}${link.href}`}
                className={`relative px-3 py-4 text-sm font-medium transition-colors ${
                  isActive(link.href) ? "text-blue-light" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-full bg-blue-light rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden sm:flex items-center gap-2 rounded-lg border border-border bg-bg-input px-3 py-1.5 w-60">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input type="text" placeholder="Search teams, players..." className="bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted w-full" />
            </div>
            <button className="rounded-lg bg-blue px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-light">Login</button>
            <button className="hidden sm:block rounded-lg border border-border px-4 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary hover:border-border-hover">Sign Up</button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-text-secondary lg:hidden">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[200] bg-black/50" onClick={() => setMobileOpen(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-bg-surface border-l border-border p-5" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setMobileOpen(false)} className="mb-4 ml-auto flex text-text-muted">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={`${base}${link.href}`} onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium ${isActive(link.href) ? "text-blue-light bg-blue-glow" : "text-text-secondary hover:text-text-primary"}`}
                >{link.label}</Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
