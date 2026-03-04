export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 pb-6 pt-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-bg-card-hover to-bg-accent text-xs font-extrabold text-white">
                H
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                HLTV<span className="text-accent-light">.org</span>
              </span>
            </a>
            <p className="mb-5 text-sm leading-relaxed text-text-muted">
              The home of competitive Counter-Strike. News, matches, stats, and
              rankings since 2002.
            </p>
            <div className="flex gap-2">
              {[
                <svg key="x" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
                <svg key="yt" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
                <svg key="ig" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition-all hover:border-accent-light hover:text-accent-light hover:bg-bg-accent/10"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Content",
              links: ["News", "Matches", "Results", "Events", "Galleries"],
            },
            {
              title: "Statistics",
              links: ["World Ranking", "Player Stats", "Team Stats", "Maps", "Leaderboards"],
            },
            {
              title: "Community",
              links: ["Forums", "Fantasy", "Bets", "About", "Contact"],
            },
          ].map((col) => (
            <div key={col.title} className="flex flex-col gap-2.5">
              <h4 className="mb-1 text-[11px] font-bold uppercase tracking-widest text-text-secondary">
                {col.title}
              </h4>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-text-muted sm:flex-row">
          <span>&copy; 2026 HLTV.org Redesign — Educational Project</span>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-text-secondary">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-text-secondary">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-text-secondary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
