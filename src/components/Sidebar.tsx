import { liveMatches, recentResults, ranking } from "@/data/mock";

function LiveMatches() {
  return (
    <div className="rounded-xl border border-border bg-bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h3 className="flex items-center gap-2 text-sm font-bold">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
          Live Matches
        </h3>
        <span className="rounded bg-red/15 px-2 py-0.5 text-[10px] font-bold text-red uppercase">
          {liveMatches.length} Active
        </span>
      </div>

      {/* Matches */}
      <div className="divide-y divide-border">
        {liveMatches.map((match) => (
          <div key={match.id} className="px-4 py-3 hover:bg-bg-card-hover transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
                {match.event}
              </span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-red">
                <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse-dot" />
                LIVE
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-sm shrink-0" style={{ background: `${match.team1.color}88` }} />
                  <span className="text-sm font-semibold">{match.team1.name}</span>
                </div>
                <span className={`text-sm font-bold tabular-nums ${(match.score1 ?? 0) > (match.score2 ?? 0) ? "text-text-primary" : "text-text-muted"}`}>
                  {match.score1}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-sm shrink-0" style={{ background: `${match.team2.color}88` }} />
                  <span className="text-sm font-semibold">{match.team2.name}</span>
                </div>
                <span className={`text-sm font-bold tabular-nums ${(match.score2 ?? 0) > (match.score1 ?? 0) ? "text-text-primary" : "text-text-muted"}`}>
                  {match.score2}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="#" className="block border-t border-border px-4 py-2.5 text-center text-xs font-medium text-text-muted hover:text-blue-light transition-colors">
        All live matches ({liveMatches.length})
      </a>
    </div>
  );
}

function RecentResults() {
  return (
    <div className="rounded-xl border border-border bg-bg-card overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <h3 className="flex items-center gap-2 text-sm font-bold">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          Recent Results
        </h3>
      </div>
      <div className="divide-y divide-border">
        {recentResults.slice(0, 4).map((match) => {
          const t1Won = (match.score1 ?? 0) > (match.score2 ?? 0);
          return (
            <a key={match.id} href="#" className="flex items-center gap-2 px-4 py-2.5 hover:bg-bg-card-hover transition-colors group">
              <span className="text-[10px] font-medium text-text-muted w-5 shrink-0">FT</span>
              <span className={`text-sm ${t1Won ? "font-bold" : "font-medium text-text-secondary"}`}>
                {match.team1.name}
              </span>
              <span className="mx-auto flex items-center gap-1.5 text-sm tabular-nums">
                <span className={t1Won ? "font-bold text-blue-light" : "text-text-muted"}>{match.score1}</span>
                <span className="text-text-muted">-</span>
                <span className={!t1Won ? "font-bold text-blue-light" : "text-text-muted"}>{match.score2}</span>
              </span>
              <span className={`text-sm ${!t1Won ? "font-bold" : "font-medium text-text-secondary"}`}>
                {match.team2.name}
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function TopRanking() {
  return (
    <div className="rounded-xl border border-border bg-bg-card overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <h3 className="flex items-center gap-2 text-sm font-bold">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
          Top World Ranking
        </h3>
      </div>
      <div className="divide-y divide-border">
        {ranking.slice(0, 5).map((team) => (
          <div key={team.rank} className="flex items-center gap-3 px-4 py-2.5 hover:bg-bg-card-hover transition-colors cursor-pointer">
            <span className="text-xs font-bold text-text-muted w-5 tabular-nums">{team.rank}.</span>
            <span className="h-5 w-5 rounded shrink-0" style={{ background: `${team.color}66` }} />
            <span className="flex-1 text-sm font-semibold">{team.name}</span>
            <span className="text-xs font-medium text-text-muted tabular-nums">{team.points} pts</span>
          </div>
        ))}
      </div>
      <a href="#" className="block border-t border-border px-4 py-2.5 text-center text-xs font-medium text-blue-light hover:text-blue transition-colors">
        Full Ranking
      </a>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="space-y-4">
      <LiveMatches />
      <RecentResults />
      <TopRanking />
    </aside>
  );
}
