import { liveMatches } from "@/data/mock";

export default function HeroMatch() {
  const match = liveMatches[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0c1929] via-[#111d2e] to-bg-body">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(37,99,235,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1200px] px-5 py-10 md:py-14">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-3">
          <span className="flex items-center gap-2 rounded bg-red/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-red">
            <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse-dot" />
            Live
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-text-secondary">
            {match.event} &middot; Grand Final
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 md:justify-between">
          {/* Match display */}
          <div className="flex items-center gap-6 md:gap-10">
            {/* Team 1 */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-xl text-xl md:text-2xl font-extrabold text-white"
                style={{ background: `linear-gradient(135deg, ${match.team1.color}cc, ${match.team1.color}66)` }}
              >
                {match.team1.abbr}
              </div>
              <span className="text-sm font-semibold">{match.team1.name}</span>
            </div>

            {/* Score */}
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl md:text-6xl font-black tabular-nums">{match.score1}</span>
                <span className="text-xl text-text-muted font-light">:</span>
                <span className="text-5xl md:text-6xl font-black tabular-nums">{match.score2}</span>
              </div>
              <span className="mt-1 rounded bg-blue/15 px-2.5 py-0.5 text-xs font-semibold text-blue-light">
                Map 2: {match.map}
              </span>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-xl text-xl md:text-2xl font-extrabold text-white"
                style={{ background: `linear-gradient(135deg, ${match.team2.color}cc, ${match.team2.color}66)` }}
              >
                {match.team2.abbr}
              </div>
              <span className="text-sm font-semibold">{match.team2.name}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2.5">
            <a href="#" className="flex items-center justify-center gap-2 rounded-lg bg-blue px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-light">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Watch Broadcast
            </a>
            <a href="#" className="flex items-center justify-center rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary hover:border-border-hover">
              Detailed Stats
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
