"use client";

import { useState } from "react";

const navLinks = [
  "Home",
  "News",
  "Matches",
  "Results",
  "Events",
  "Stats",
  "Rankings",
  "Forums",
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-bg-secondary border-b border-border text-xs text-text-muted">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-1.5">
          <span className="flex items-center gap-2 font-semibold uppercase tracking-wider text-red">
            <span className="inline-block h-2 w-2 rounded-full bg-red animate-pulse-live" />
            3 Live Matches
          </span>
          <div className="hidden gap-4 sm:flex">
            <a href="#" className="transition-colors hover:text-text-secondary">
              Download App
            </a>
            <a href="#" className="transition-colors hover:text-text-secondary">
              GOTV
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-bg-secondary/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center gap-8 px-6 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-bg-card-hover to-bg-accent text-sm font-extrabold text-white">
              H
            </div>
            <span className="text-xl font-extrabold tracking-tight text-text-primary">
              HLTV<span className="text-accent-light">.org</span>
            </span>
          </a>

          {/* Nav */}
          <nav className="hidden flex-1 gap-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActive(link)}
                className={`rounded-md px-3.5 py-2 text-sm font-medium transition-all ${
                  active === link
                    ? "bg-bg-accent text-white"
                    : "text-text-secondary hover:bg-bg-card/60 hover:text-text-primary"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition-all hover:border-border-hover hover:text-text-primary hover:bg-bg-card/40"
              aria-label="Search"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className="hidden rounded-lg bg-bg-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-light sm:block">
              Sign In
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center text-text-secondary lg:hidden"
              aria-label="Menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-72 border-l border-border bg-bg-secondary p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-6 ml-auto flex text-text-muted"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    setActive(link);
                    setMobileOpen(false);
                  }}
                  className={`rounded-lg px-4 py-3 text-left text-base font-medium transition-all ${
                    active === link
                      ? "bg-bg-accent text-white"
                      : "text-text-secondary hover:bg-bg-card/60 hover:text-text-primary"
                  }`}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[300] flex items-start justify-center bg-black/60 backdrop-blur-sm pt-[18vh]"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-[560px] max-w-[90vw] rounded-xl border border-border-hover bg-bg-card p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              type="text"
              placeholder="Search teams, players, events..."
              className="w-full bg-transparent text-lg text-text-primary outline-none placeholder:text-text-muted"
              onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
            />
            <p className="mt-3 text-xs text-text-muted">
              Press <kbd className="rounded bg-bg-secondary px-1.5 py-0.5 text-text-secondary">ESC</kbd> to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
