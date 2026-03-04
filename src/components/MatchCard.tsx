import { Match } from "@/data/mock";

export default function MatchCard({ match }: { match: Match }) {
  const isLive = match.status === "live";

  return (
    <div
      className={`group rounded-xl border bg-bg-card p-4 transition-all hover:bg-bg-card-hover hover:border-border-hover hover:-translate-y-0.5 cursor-pointer ${
        isLive
          ? "border-l-[3px] border-l-red border-t-border border-r-border border-b-border"
          : "border-l-[3px] border-l-accent border-t-border border-r-border border-b-border"
      }`}
    >
      {/* Event */}
      <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-text-muted">
        {match.event}
      </p>

      {/* Teams */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span
            className="h-2.5 w-2.5 rounded-sm shrink-0"
            style={{ background: match.team1.color }}
          />
          <span className="flex-1 text-sm font-semibold">{match.team1.name}</span>
          {match.score1 !== undefined && (
            <span
              className={`text-sm font-bold tabular-nums ${
                match.score1 > (match.score2 ?? 0)
                  ? "text-green"
                  : "text-text-muted"
              }`}
            >
              {match.score1}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span
            className="h-2.5 w-2.5 rounded-sm shrink-0"
            style={{ background: match.team2.color }}
          />
          <span className="flex-1 text-sm font-semibold">{match.team2.name}</span>
          {match.score2 !== undefined && (
            <span
              className={`text-sm font-bold tabular-nums ${
                match.score2 > (match.score1 ?? 0)
                  ? "text-green"
                  : "text-text-muted"
              }`}
            >
              {match.score2}
            </span>
          )}
        </div>
      </div>

      {/* Meta */}
      <div className="mt-3 flex items-center gap-2 text-[11px] text-text-muted">
        <span className="rounded bg-bg-secondary px-2 py-0.5 font-semibold">
          {match.format}
        </span>
        {match.map && <span>{match.map}</span>}
        {match.time && (
          <span className="ml-auto font-semibold text-text-secondary">
            {match.time}
          </span>
        )}
        {isLive && (
          <span className="ml-auto flex items-center gap-1.5 rounded bg-red/15 px-2 py-0.5 font-bold text-red">
            <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse-live" />
            LIVE
          </span>
        )}
      </div>
    </div>
  );
}
