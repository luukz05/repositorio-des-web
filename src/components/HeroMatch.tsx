import { liveMatches } from "@/data/mock";

export default function HeroMatch() {
  const match = liveMatches[0];

  return (
    <section className="border-b border-border bg-gradient-to-b from-bg-card/40 to-transparent">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:py-14 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red animate-glow-pulse">
          <span className="inline-block h-2 w-2 rounded-full bg-red animate-pulse-live" />
          Major Final — Live Now
        </div>

        {/* Match */}
        <div className="flex items-center justify-center gap-8 md:gap-16">
          {/* Team 1 */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-2xl text-2xl md:text-3xl font-extrabold text-white shadow-lg shadow-black/30"
              style={{
                background: `linear-gradient(135deg, ${match.team1.color}, ${match.team1.color}99)`,
              }}
            >
              {match.team1.abbr}
            </div>
            <span className="text-xl md:text-2xl font-bold">{match.team1.name}</span>
            <span className="text-sm text-text-muted font-medium">#1 World</span>
          </div>

          {/* Score */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="text-5xl md:text-6xl font-black tracking-tight tabular-nums">
                {match.score1}
              </span>
              <span className="text-3xl font-light text-text-muted">:</span>
              <span className="text-5xl md:text-6xl font-black tracking-tight tabular-nums">
                {match.score2}
              </span>
            </div>
            <span className="text-sm text-text-secondary">
              {match.map} — Round {(match.score1 ?? 0) + (match.score2 ?? 0) + 1}
            </span>
            <a
              href="#"
              className="mt-1 inline-flex items-center gap-2 rounded-lg bg-red px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red/80 hover:shadow-lg hover:shadow-red/20 hover:-translate-y-0.5"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Live
            </a>
          </div>

          {/* Team 2 */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-2xl text-2xl md:text-3xl font-extrabold text-white shadow-lg shadow-black/30"
              style={{
                background: `linear-gradient(135deg, ${match.team2.color}, ${match.team2.color}99)`,
              }}
            >
              {match.team2.abbr}
            </div>
            <span className="text-xl md:text-2xl font-bold">{match.team2.name}</span>
            <span className="text-sm text-text-muted font-medium">#3 World</span>
          </div>
        </div>
      </div>
    </section>
  );
}
