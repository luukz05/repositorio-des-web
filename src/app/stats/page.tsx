import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { topPlayers } from "@/data/mock";

export default function StatsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1200px] px-5 py-8">
        <div className="mb-6 text-sm text-text-muted">
          <a href="#" className="hover:text-text-secondary">Home</a>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-text-primary">Stats</span>
        </div>

        <h1 className="text-2xl font-bold mb-2">Player Statistics</h1>
        <p className="text-sm text-text-muted mb-8">Top-rated players across all events in 2026</p>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["All Maps", "Mirage", "Inferno", "Nuke", "Anubis", "Ancient", "Dust2"].map((f, i) => (
            <button key={f} className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${i === 0 ? "bg-blue text-white" : "bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-border-hover"}`}>{f}</button>
          ))}
        </div>

        {/* Stats table */}
        <div className="overflow-x-auto rounded-xl border border-border bg-bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-xs font-bold uppercase tracking-wider text-text-muted">
                <th className="px-4 py-3 text-left w-12">#</th>
                <th className="px-4 py-3 text-left">Player</th>
                <th className="px-4 py-3 text-left">Team</th>
                <th className="px-4 py-3 text-center">K-D Diff</th>
                <th className="px-4 py-3 text-center">ADR</th>
                <th className="px-4 py-3 text-center">KAST</th>
                <th className="px-4 py-3 text-center">Rating 2.1</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {topPlayers.map((player) => (
                <tr key={player.rank} className="transition-colors hover:bg-bg-card-hover cursor-pointer group">
                  <td className="px-4 py-3.5 text-text-muted font-bold tabular-nums">{player.rank}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ background: `linear-gradient(135deg, ${player.color}cc, ${player.color}66)` }}>
                        {player.initial}
                      </div>
                      <div>
                        <p className="font-semibold leading-tight">{player.name}</p>
                        <p className="text-[11px] text-text-muted">{player.realName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded shrink-0" style={{ background: `${player.color}44` }} />
                      <span className="text-text-secondary">{player.team}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-center font-medium">
                    <span className={`${player.kd.startsWith("-") ? "text-red" : "text-green"}`}>
                      {player.kd.startsWith("-") ? "" : "+"}{player.kd}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center text-text-secondary tabular-nums">{player.adr.toFixed(1)}</td>
                  <td className="px-4 py-3.5 text-center text-text-secondary">{player.kast}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span className={`inline-block rounded px-2 py-0.5 font-bold tabular-nums ${
                      player.rating >= 1.20 ? "bg-green/15 text-green" :
                      player.rating >= 1.10 ? "bg-blue/15 text-blue-light" :
                      "text-text-secondary"
                    }`}>
                      {player.rating.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm font-medium text-blue-light hover:text-blue transition-colors">View All Player Stats →</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
