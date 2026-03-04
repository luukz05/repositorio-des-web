import { liveMatches, upcomingMatches } from "@/data/mock";
import MatchCard from "./MatchCard";
import SectionTitle from "./SectionTitle";

export default function MatchesSidebar() {
  return (
    <aside className="space-y-8">
      {/* Live */}
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
              <circle cx="12" cy="12" r="10" />
              <polygon
                points="10 8 16 12 10 16 10 8"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          }
        >
          Live Matches
        </SectionTitle>
        <div className="space-y-3">
          {liveMatches.map((m) => (
            <MatchCard key={m.id} match={m} />
          ))}
        </div>
      </div>

      {/* Upcoming */}
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
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          }
        >
          Upcoming
        </SectionTitle>
        <div className="space-y-3">
          {upcomingMatches.map((m) => (
            <MatchCard key={m.id} match={m} />
          ))}
        </div>
      </div>
    </aside>
  );
}
