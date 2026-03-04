import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamLogo from "@/components/TeamLogo";
import { liveMatches, upcomingMatches } from "@/data/mock";
import { Match } from "@/data/mock";

function MatchRow({ match, index }: { match: Match; index: number }) {
  const isLive = match.status === "live";
  return (
    <div className={`flex items-center gap-4 rounded-xl border border-border bg-bg-card px-5 py-4 transition-all hover:bg-bg-card-hover hover:border-border-hover hover:-translate-y-0.5 cursor-pointer card-glow animate-fade-in-up`} style={{ animationDelay: `${index * 0.04}s` }}>
      <div className="w-32 shrink-0">
        <p className="text-[11px] font-medium uppercase tracking-wider text-text-muted">{match.event}</p>
        <p className="text-[11px] text-text-muted mt-0.5">{match.format}</p>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1.5">
          <TeamLogo src={match.team1.logo} name={match.team1.name} size={20} />
          <span className="flex-1 text-sm font-semibold">{match.team1.name}</span>
          {match.score1 !== undefined && (
            <span className={`text-sm font-bold tabular-nums ${(match.score1 ?? 0) > (match.score2 ?? 0) ? "text-green" : "text-text-muted"}`}>{match.score1}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <TeamLogo src={match.team2.logo} name={match.team2.name} size={20} />
          <span className="flex-1 text-sm font-semibold">{match.team2.name}</span>
          {match.score2 !== undefined && (
            <span className={`text-sm font-bold tabular-nums ${(match.score2 ?? 0) > (match.score1 ?? 0) ? "text-green" : "text-text-muted"}`}>{match.score2}</span>
          )}
        </div>
      </div>
      <div className="w-20 text-right shrink-0">
        {isLive ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red/15 px-2.5 py-1 text-[11px] font-bold text-red">
            <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse-dot" />
            LIVE
          </span>
        ) : (
          <div>
            <p className="text-sm font-semibold text-blue-light">{match.time}</p>
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
          <a href="#" className="hover:text-text-secondary">Home</a><span className="mx-2">&rsaquo;</span><span className="text-text-primary">Matches</span>
        </div>
        <h1 className="text-2xl font-bold mb-8">Matches &amp; Livescore</h1>
        {liveMatches.length > 0 && (
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red mb-4">
              <span className="h-2 w-2 rounded-full bg-red animate-pulse-dot" />
              Live Now
            </h2>
            <div className="space-y-2">{liveMatches.map((m, i) => <MatchRow key={m.id} match={m} index={i} />)}</div>
          </section>
        )}
        {Object.entries(grouped).map(([date, matches]) => (
          <section key={date} className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-4">{date}</h2>
            <div className="space-y-2">{matches.map((m, i) => <MatchRow key={m.id} match={m} index={i} />)}</div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
