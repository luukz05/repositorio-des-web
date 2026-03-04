import { recentResults } from "@/data/mock";
import SectionTitle from "./SectionTitle";

export default function ResultsSection() {
  return (
    <section className="mt-10">
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
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        }
      >
        Recent Results
      </SectionTitle>

      <div className="space-y-2">
        {recentResults.map((match) => {
          const team1Won = (match.score1 ?? 0) > (match.score2 ?? 0);
          return (
            <div
              key={match.id}
              className="flex items-center gap-4 rounded-xl border border-border bg-bg-card px-5 py-3.5 transition-all hover:bg-bg-card-hover hover:border-border-hover cursor-pointer"
            >
              <span className="min-w-[100px] text-[11px] font-medium uppercase tracking-wider text-text-muted">
                {match.event}
              </span>
              <div className="flex flex-1 items-center justify-center gap-3">
                <span
                  className={`min-w-[80px] text-right text-sm font-semibold ${
                    team1Won ? "text-green" : ""
                  }`}
                >
                  {match.team1.name}
                </span>
                <span className="min-w-[60px] rounded-lg bg-bg-secondary px-3 py-1 text-center text-sm font-bold tabular-nums">
                  {team1Won ? (
                    <>
                      <strong>{match.score1}</strong> – {match.score2}
                    </>
                  ) : (
                    <>
                      {match.score1} – <strong>{match.score2}</strong>
                    </>
                  )}
                </span>
                <span
                  className={`min-w-[80px] text-sm font-semibold ${
                    !team1Won ? "text-green" : ""
                  }`}
                >
                  {match.team2.name}
                </span>
              </div>
              <span className="rounded bg-bg-secondary px-2 py-0.5 text-[11px] font-semibold text-text-muted">
                {match.format}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
