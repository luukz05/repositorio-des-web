import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { liveMatches, upcomingMatches } from "@/data/mock";
import { Match } from "@/data/mock";

function MatchRow({ match }: { match: Match }) {
  const isLive = match.status === "live";
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-bg-card px-5 py-4 transition-all hover:bg-bg-card-hover hover:border-border-hover cursor-pointer">
      {/* Event + Meta */}
      <div className="w-32 shrink-0">
        <p className="text-[11px] font-medium uppercase tracking-wider text-text-muted">{match.event}</p>
        <p className="text-[11px] text-text-muted mt-0.5">{match.format}</p>
      </div>

      {/* Teams + Score */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1.5">
          <span className="h-5 w-5 rounded shrink-0 flex items-center justify-center text-[9px] font-bold text-white" style={{ background: `${match.team1.color}88` }}>{match.team1.abbr.charAt(0)}</span>
          <span className="flex-1 text-sm font-semibold">{match.team1.name}</span>
          {match.score1 !== undefined && (
            <span className={`text-sm font-bold tabular-nums ${(match.score1 ?? 0) > (match.score2 ?? 0) ? "text-text-primary" : "text-text-muted"}`}>{match.score1}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="h-5 w-5 rounded shrink-0 flex items-center justify-center text-[9px] font-bold text-white" style={{ background: `${match.team2.color}88` }}>{match.team2.abbr.charAt(0)}</span>
          <span className="flex-1 text-sm font-semibold">{match.team2.name}</span>
          {match.score2 !== undefined && (
            <span className={`text-sm font-bold tabular-nums ${(match.score2 ?? 0) > (match.score1 ?? 0) ? "text-text-primary" : "text-text-muted"}`}>{match.score2}</span>
          )}
        </div>
      </div>

      {/* Status */}
      <div className="w-20 text-right shrink-0">
        {isLive ? (
          <span className="inline-flex items-center gap-1.5 rounded bg-red/15 px-2.5 py-1 text-[11px] font-bold text-red">
            <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse-dot" />
            LIVE
          </span>
        ) : (
          <div>
            <p className="text-sm font-semibold text-text-secondary">{match.time}</p>
            <p className="text-[11px] text-text-muted">{match.date}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MatchesPage() {
  const grouped = upcomingMatches.reduce((acc, m) => {
    const key = m.date || "TBD";
    if (!acc[key]) acc[key] = [];
    acc[key].push(m);
    return acc;
  }, {} as Record<string, Match[]>);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1200px] px-5 py-8">
        <div className="mb-6 text-sm text-text-muted">
          <a href="#" className="hover:text-text-secondary">Home</a>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-text-primary">Matches</span>
        </div>

        <h1 className="text-2xl font-bold mb-8">Matches &amp; Livescore</h1>

        {/* Live */}
        {liveMatches.length > 0 && (
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-secondary mb-4">
              <span className="h-2 w-2 rounded-full bg-red animate-pulse-dot" />
              Live Now
            </h2>
            <div className="space-y-2">
              {liveMatches.map((m) => <MatchRow key={m.id} match={m} />)}
            </div>
          </section>
        )}

        {/* Upcoming by date */}
        {Object.entries(grouped).map(([date, matches]) => (
          <section key={date} className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-4">{date}</h2>
            <div className="space-y-2">
              {matches.map((m) => <MatchRow key={m.id} match={m} />)}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
