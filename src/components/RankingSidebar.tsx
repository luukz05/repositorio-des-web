import { ranking, events, topPlayers } from "@/data/mock";
import SectionTitle from "./SectionTitle";

function RankChangeIcon({ change }: { change: "up" | "down" | "same" }) {
  if (change === "up")
    return <span className="text-[10px] text-green">&#9650;</span>;
  if (change === "down")
    return <span className="text-[10px] text-red">&#9660;</span>;
  return <span className="text-[10px] text-text-muted">–</span>;
}

export default function RankingSidebar() {
  return (
    <aside className="space-y-8">
      {/* World Ranking */}
      <div>
        <SectionTitle
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 7 12 7s5-3 7.5-3a2.5 2.5 0 0 1 0 5H18" />
              <path d="m6 9 6 12 6-12" />
            </svg>
          }
        >
          World Ranking
        </SectionTitle>
        <div className="space-y-1">
          {ranking.map((team) => (
            <div
              key={team.rank}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all hover:bg-bg-card/60 cursor-pointer"
            >
              <span
                className={`w-7 text-xs font-bold tabular-nums ${
                  team.rank === 1
                    ? "text-yellow"
                    : team.rank === 2
                      ? "text-text-secondary"
                      : team.rank === 3
                        ? "text-orange"
                        : "text-text-muted"
                }`}
              >
                #{team.rank}
              </span>
              <span
                className="h-2.5 w-2.5 rounded-sm shrink-0"
                style={{ background: team.color }}
              />
              <span className="flex-1 text-sm font-semibold">{team.name}</span>
              <RankChangeIcon change={team.change} />
              <span className="text-xs font-semibold text-text-muted tabular-nums">
                {team.points}
              </span>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="mt-3 block rounded-lg py-2.5 text-center text-xs font-semibold text-accent-light transition-all hover:bg-bg-card/40"
        >
          View Full Ranking →
        </a>
      </div>

      {/* Events */}
      <div>
        <SectionTitle
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          }
        >
          Upcoming Events
        </SectionTitle>
        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border border-border bg-bg-card p-4 transition-all hover:border-border-hover hover:bg-bg-card-hover cursor-pointer"
            >
              <div className="mb-2 flex items-center justify-between">
                <span
                  className={`rounded px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${
                    event.tier === "S"
                      ? "bg-yellow/15 text-yellow"
                      : "bg-accent-light/15 text-accent-light"
                  }`}
                >
                  {event.tier}-Tier
                </span>
                <span className="text-[11px] text-text-muted">{event.dates}</span>
              </div>
              <h3 className="mb-2 text-sm font-semibold">{event.name}</h3>
              <div className="mb-3 flex gap-4 text-[11px] text-text-muted">
                <span>{event.prize}</span>
                <span>{event.teams} Teams</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-bg-accent to-accent-light transition-all duration-1000"
                  style={{ width: `${event.progress}%` }}
                />
              </div>
              <span className="mt-2 block text-[11px] text-text-muted">
                {event.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Players */}
      <div>
        <SectionTitle
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
        >
          Top Players
        </SectionTitle>
        <div className="space-y-1">
          {topPlayers.map((player) => (
            <div
              key={player.rank}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all hover:bg-bg-card/60 cursor-pointer"
            >
              <span className="w-4 text-xs font-bold text-text-muted tabular-nums">
                {player.rank}
              </span>
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shrink-0"
                style={{ background: `linear-gradient(135deg, ${player.color}, ${player.color}99)` }}
              >
                {player.initial}
              </div>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-semibold leading-tight">
                  {player.name}
                </span>
                <span className="text-[11px] text-text-muted">{player.team}</span>
              </div>
              <span className="text-sm font-bold text-green tabular-nums">
                {player.rating.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
