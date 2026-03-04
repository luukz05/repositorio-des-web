import Header from "@/components/Header";
import HeroMatch from "@/components/HeroMatch";
import NewsSection from "@/components/NewsSection";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import TeamLogo from "@/components/TeamLogo";
import { news, events, topPlayers, forumThreads, streams } from "@/data/mock";

/* ── Ad placeholder ── */
function AdBanner({ height, label }: { height: string; label: string }) {
  return (
    <div
      className="w-full rounded-xl border border-dashed border-border bg-bg-surface/30 flex items-center justify-center"
      style={{ height }}
    >
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-widest text-text-muted/50 mb-1">Advertisement</p>
        <p className="text-xs text-text-muted/30">{label}</p>
      </div>
    </div>
  );
}

/* ── Breaking News Ticker ── */
function BreakingNewsTicker() {
  const headlines = news.slice(0, 3);
  return (
    <div className="relative bg-bg-surface border-b border-border overflow-hidden">
      <div className="flex items-center px-0">
        <div className="shrink-0 flex items-center gap-2 bg-red px-4 py-2 z-10">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-dot" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white">Breaking</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="animate-marquee flex whitespace-nowrap py-2 pl-4">
            {[...headlines, ...headlines].map((article, i) => (
              <a key={`${article.id}-${i}`} href="#" className="inline-flex items-center gap-3 mr-12 text-sm text-text-secondary hover:text-text-primary transition-colors">
                <span className="h-1 w-1 rounded-full bg-red shrink-0" />
                <span className="font-medium">{article.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Live Events Bar ── */
function LiveEventsBar() {
  const liveEvents = events.filter(e => e.progress > 0);
  const upcomingEvents = events.filter(e => e.progress === 0).slice(0, 3);
  const allEvents = [...liveEvents, ...upcomingEvents];

  return (
    <section className="border-b border-border bg-bg-surface/50">
      <div className="mx-auto max-w-[1440px] px-6 py-4">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted">Events</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {allEvents.map((event) => (
            <a
              key={event.id}
              href="#"
              className="flex items-center gap-3 rounded-lg border border-border bg-bg-card px-4 py-3 hover:border-border-hover hover:bg-bg-card-hover transition-all group"
            >
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {event.progress > 0 ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-red">
                      <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse-dot" />
                      LIVE
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-text-muted uppercase">Upcoming</span>
                  )}
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    event.tier === "S" ? "bg-yellow/15 text-yellow" : event.tier === "A" ? "bg-blue/15 text-blue-light" : "bg-text-muted/15 text-text-muted"
                  }`}>
                    {event.tier}-Tier
                  </span>
                </div>
                <span className="text-sm font-semibold truncate">{event.name}</span>
                <span className="text-[11px] text-text-muted truncate">{event.status} &middot; {event.location}</span>
              </div>
              {event.progress > 0 && (
                <div className="w-12 h-12 relative shrink-0">
                  <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" className="text-border" strokeWidth="3" />
                    <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" className="text-blue" strokeWidth="3"
                      strokeDasharray={`${2 * Math.PI * 20}`}
                      strokeDashoffset={`${2 * Math.PI * 20 * (1 - event.progress / 100)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">{event.progress}%</span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Hot Forum Discussions ── */
function ForumDiscussions() {
  const threads = forumThreads.slice(0, 6);
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-bold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Hot Forum Discussions
        </h2>
        <a href="#" className="text-sm font-medium text-blue-light hover:text-blue transition-colors">View forums</a>
      </div>
      <div className="rounded-xl border border-border bg-bg-card overflow-hidden card-glow">
        <div className="divide-y divide-border">
          {threads.map((thread, i) => (
            <a
              key={thread.id}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 hover:bg-bg-card-hover transition-all group animate-fade-in-up delay-${Math.min(i + 1, 5)} ${thread.pinned ? "bg-blue/5 border-l-2 border-l-blue" : ""}`}
            >
              {thread.pinned && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-blue shrink-0">
                  <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/>
                </svg>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate group-hover:text-blue-light transition-colors">{thread.title}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] text-text-muted">{thread.author}</span>
                  <span className="text-[10px] text-text-muted/50">&middot;</span>
                  <span className="text-[10px] text-text-muted">{thread.category}</span>
                  <span className="text-[10px] text-text-muted/50">&middot;</span>
                  <span className="text-[10px] text-text-muted">{thread.lastReply}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold tabular-nums">{thread.replies}</span>
                  <span className="text-[9px] text-text-muted">replies</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold tabular-nums text-text-secondary">{(thread.views / 1000).toFixed(1)}k</span>
                  <span className="text-[9px] text-text-muted">views</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Top Player Ratings ── */
function TopPlayerRatings() {
  const players = topPlayers.slice(0, 5);
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-bold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Top Player Ratings
        </h2>
        <a href="#" className="text-sm font-medium text-blue-light hover:text-blue transition-colors">Full stats</a>
      </div>
      <div className="rounded-xl border border-border bg-bg-card overflow-hidden card-glow">
        <div className="grid grid-cols-[40px_1fr_60px_50px_50px_50px] gap-2 px-4 py-2 border-b border-border text-[10px] font-bold uppercase tracking-wider text-text-muted">
          <span>#</span>
          <span>Player</span>
          <span className="text-right">Rating</span>
          <span className="text-right">K/D</span>
          <span className="text-right">ADR</span>
          <span className="text-right">Team</span>
        </div>
        <div className="divide-y divide-border">
          {players.map((player, i) => (
            <div
              key={player.rank}
              className={`grid grid-cols-[40px_1fr_60px_50px_50px_50px] gap-2 items-center px-4 py-3 hover:bg-bg-card-hover transition-all cursor-pointer animate-fade-in-up delay-${i + 1}`}
            >
              <span className={`text-sm font-bold tabular-nums ${i === 0 ? "rank-gold" : i === 1 ? "rank-silver" : i === 2 ? "rank-bronze" : "text-text-muted"}`}>
                {player.rank}.
              </span>
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-sm">{player.countryFlag}</span>
                <span className="text-sm font-semibold truncate">{player.name}</span>
              </div>
              <span className="text-sm font-bold text-green text-right tabular-nums">{player.rating.toFixed(2)}</span>
              <span className="text-xs text-text-secondary text-right tabular-nums">{player.kd}</span>
              <span className="text-xs text-text-secondary text-right tabular-nums">{player.adr}</span>
              <div className="flex justify-end">
                <TeamLogo src={player.teamLogo} name={player.team} size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Popular Streams ── */
function PopularStreams() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-bold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9146FF" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
          </svg>
          Popular Streams
        </h2>
        <a href="#" className="text-sm font-medium text-blue-light hover:text-blue transition-colors">All streams</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {streams.map((stream, i) => (
          <a
            key={stream.id}
            href="#"
            className={`group rounded-xl border border-border bg-bg-card overflow-hidden hover:border-border-hover transition-all card-glow animate-fade-in-up delay-${i + 1}`}
          >
            <div className="relative h-36 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={stream.thumbnail} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
              <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-red px-2 py-0.5 rounded text-[10px] font-bold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-dot" />
                LIVE
              </div>
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded text-[10px] font-bold text-white">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/><circle cx="12" cy="12" r="3.5" fill="white"/></svg>
                {stream.viewers >= 1000 ? `${(stream.viewers / 1000).toFixed(1)}K` : stream.viewers}
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold truncate">{stream.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-medium text-purple-400">{stream.channel}</span>
                <span className="text-[10px] text-text-muted">&middot;</span>
                <span className="text-[10px] text-text-muted">{stream.language}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ── Upcoming Events (full-width) ── */
function UpcomingEvents() {
  const upcoming = events.filter(e => e.progress === 0).slice(0, 6);
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-bold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Upcoming Events
        </h2>
        <a href="#" className="text-sm font-medium text-blue-light hover:text-blue transition-colors">All events</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {upcoming.map((event, i) => (
          <a
            key={event.id}
            href="#"
            className={`group rounded-xl border border-border bg-bg-card overflow-hidden hover:border-border-hover transition-all card-glow animate-fade-in-up delay-${Math.min(i + 1, 5)}`}
          >
            <div className="relative h-32 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={event.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />
              <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded ${
                event.tier === "S" ? "bg-yellow/20 text-yellow" : event.tier === "A" ? "bg-blue/20 text-blue-light" : "bg-text-muted/20 text-text-muted"
              }`}>
                {event.tier}-Tier
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold mb-1 truncate">{event.name}</h3>
              <div className="flex items-center gap-2 text-[11px] text-text-muted mb-1.5">
                <span>{event.dates}</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-text-muted">{event.location}</span>
                <span className="font-bold text-green">{event.prize}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ── More News (full-width bottom grid) ── */
function MoreNews() {
  const moreArticles = news.slice(7, 12);
  if (moreArticles.length === 0) return null;
  return (
    <section className="border-t border-border bg-bg-surface/30">
      <div className="mx-auto max-w-[1440px] px-6 py-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-base font-bold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
              <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6z"/>
            </svg>
            More News
          </h2>
          <a href="#" className="text-sm font-medium text-blue-light hover:text-blue transition-colors">View all news</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {moreArticles.map((article, i) => (
            <article
              key={`more-${article.id}`}
              className={`group cursor-pointer overflow-hidden rounded-xl border border-border bg-bg-card transition-all hover:border-border-hover hover:bg-bg-card-hover card-glow animate-fade-in-up delay-${Math.min(i + 1, 5)}`}
            >
              <div className="h-32 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={article.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <div className="flex gap-2 mb-1.5">
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-blue/15 text-blue-light">{tag}</span>
                  ))}
                </div>
                <h4 className="text-[13px] font-semibold leading-tight line-clamp-2 mb-1.5">{article.title}</h4>
                <div className="flex items-center gap-2 text-[11px] text-text-muted">
                  <span>{article.time}</span>
                  <span>&middot;</span>
                  <span>{article.comments} comments</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Main Page ── */
export default function Home() {
  return (
    <>
      <Header />

      {/* Breaking News Ticker — full bleed */}
      <BreakingNewsTicker />

      {/* Leaderboard Ad */}
      <div className="mx-auto max-w-[1440px] px-6 pt-6">
        <AdBanner height="90px" label="728 × 90 — Leaderboard" />
      </div>

      {/* Hero Match — full bleed bg */}
      <HeroMatch />

      {/* Live Events Bar — full bleed bg */}
      <LiveEventsBar />

      {/* Two-column grid */}
      <main className="mx-auto max-w-[1440px] px-6 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          {/* Left column */}
          <div className="space-y-8">
            <NewsSection />

            <AdBanner height="250px" label="728 × 250 — Mid-content" />

            <ForumDiscussions />

            <TopPlayerRatings />

            <AdBanner height="90px" label="728 × 90 — Mid-content" />

            <PopularStreams />

            <UpcomingEvents />
          </div>

          {/* Right sidebar */}
          <div className="space-y-4">
            <AdBanner height="250px" label="300 × 250 — Sidebar Rectangle" />

            <Sidebar />

            <AdBanner height="250px" label="300 × 250 — Sidebar Rectangle" />

            <div className="sticky top-4">
              <AdBanner height="600px" label="300 × 600 — Sidebar Skyscraper" />
            </div>
          </div>
        </div>
      </main>

      {/* Bottom leaderboard ad — full bleed bg */}
      <div className="border-t border-b border-border bg-bg-surface/20">
        <div className="mx-auto max-w-[1440px] px-6 py-6">
          <AdBanner height="90px" label="728 × 90 — Bottom Leaderboard" />
        </div>
      </div>

      {/* More News — full bleed bg */}
      <MoreNews />

      <Footer />
    </>
  );
}
