import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamLogo from "@/components/TeamLogo";
import { recentResults, Match } from "@/data/mock";

export default function ResultsPage() {
  const grouped = recentResults.reduce((acc, m) => {
    const key = m.date || "Unknown";
    if (!acc[key]) acc[key] = [];
    acc[key].push(m);
    return acc;
  }, {} as Record<string, Match[]>);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1200px] px-5 py-8">
        <div className="mb-6 text-sm text-text-muted">
          <a href="#" className="hover:text-text-secondary">Home</a><span className="mx-2">&rsaquo;</span><span className="text-text-primary">Results</span>
        </div>
        <h1 className="text-2xl font-bold mb-2">Results</h1>
        <p className="text-sm text-text-muted mb-8">Recent match results from all events</p>
        <div className="flex gap-2 mb-8 flex-wrap">
          {["All", "IEM Katowice", "BLAST Premier", "ESL Pro League", "ESL Challenger"].map((f, i) => (
            <button key={f} className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${i === 0 ? "bg-blue text-white" : "bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-border-hover"}`}>{f}</button>
          ))}
        </div>

        {Object.entries(grouped).map(([date, matches]) => (
          <section key={date} className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3 px-1">{date}</h2>
            <div className="space-y-2">
              {matches.map((match, i) => {
                const t1Won = (match.score1 ?? 0) > (match.score2 ?? 0);
                return (
                  <div key={match.id} className="grid grid-cols-[120px_1fr_60px] items-center rounded-xl border border-border bg-bg-card px-5 py-3.5 transition-all hover:bg-bg-card-hover hover:border-border-hover hover:-translate-y-0.5 cursor-pointer card-glow animate-fade-in-up" style={{ animationDelay: `${i * 0.04}s` }}>
                    <div>
                      <p className="text-[11px] font-medium text-text-muted uppercase tracking-wider">{match.event}</p>
                      <p className="text-[10px] text-text-muted">{match.format}</p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2 min-w-[140px] justify-end">
                        <span className={`text-sm font-semibold ${t1Won ? "text-text-primary" : "text-text-secondary"}`}>{match.team1.name}</span>
                        <TeamLogo src={match.team1.logo} name={match.team1.name} size={20} />
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-bg-surface px-3 py-1 min-w-[64px] justify-center">
                        <span className={`text-sm tabular-nums ${t1Won ? "font-bold text-green" : "text-text-muted"}`}>{match.score1}</span>
                        <span className="text-text-muted text-xs">–</span>
                        <span className={`text-sm tabular-nums ${!t1Won ? "font-bold text-green" : "text-text-muted"}`}>{match.score2}</span>
                      </div>
                      <div className="flex items-center gap-2 min-w-[140px]">
                        <TeamLogo src={match.team2.logo} name={match.team2.name} size={20} />
                        <span className={`text-sm font-semibold ${!t1Won ? "text-text-primary" : "text-text-secondary"}`}>{match.team2.name}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" className="ml-auto"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
