export interface Team {
  name: string;
  color: string;
  abbr: string;
  logo: string;
}

export interface Match {
  id: number;
  team1: Team;
  team2: Team;
  score1?: number;
  score2?: number;
  event: string;
  format: string;
  map?: string;
  time?: string;
  date?: string;
  status: "live" | "upcoming" | "finished";
}

export interface NewsArticle {
  id: number;
  title: string;
  description?: string;
  author: string;
  time: string;
  comments: number;
  tags: string[];
  image: string;
  featured?: boolean;
}

export interface RankedTeam {
  rank: number;
  name: string;
  color: string;
  points: number;
  change: "up" | "down" | "same";
  changeVal?: number;
  region: string;
  logo: string;
}

export interface Event {
  id: number;
  name: string;
  tier: "S" | "A" | "B";
  dates: string;
  prize: string;
  teams: number;
  progress: number;
  status: string;
  location: string;
  image: string;
}

export interface Player {
  rank: number;
  name: string;
  realName: string;
  team: string;
  country: string;
  countryFlag: string;
  rating: number;
  kd: string;
  adr: number;
  kast: string;
  image: string;
  teamLogo: string;
}

export interface ForumThread {
  id: number;
  title: string;
  author: string;
  authorRank: string;
  replies: number;
  views: number;
  lastReply: string;
  category: string;
  pinned?: boolean;
}

export interface Stream {
  id: number;
  channel: string;
  title: string;
  viewers: number;
  game: string;
  language: string;
  thumbnail: string;
}

export interface PlayerHighlight {
  player: Player;
  event: string;
  maps: number;
  kills: number;
  deaths: number;
  title: string;
}

export interface RoundHighlight {
  id: number;
  title: string;
  event: string;
  team1: Team;
  team2: Team;
  round: number;
  player: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
}

// -- Base path for static assets (must match next.config.ts basePath) --
const B = process.env.NODE_ENV === "production" ? "/repositorio-des-web" : "";

// -- Team Logos (local, downloaded from Liquipedia) --
const logo = {
  navi: `${B}/teams/navi.png`,
  vitality: `${B}/teams/vitality.png`,
  faze: `${B}/teams/faze.png`,
  g2: `${B}/teams/g2.png`,
  spirit: `${B}/teams/spirit.png`,
  liquid: `${B}/teams/liquid.png`,
  mouz: `${B}/teams/mouz.png`,
  heroic: `${B}/teams/heroic.png`,
  furia: `${B}/teams/furia.png`,
  astralis: `${B}/teams/astralis.png`,
  cloud9: `${B}/teams/cloud9.png`,
  complexity: `${B}/teams/complexity.png`,
  pain: `${B}/teams/pain.png`,
  falcons: `${B}/teams/falcons.svg`,
  imperial: `${B}/teams/imperial.svg`,
  nine_z: `${B}/teams/9z.png`,
  mongolz: `${B}/teams/mongolz.svg`,
  virtuspro: `${B}/teams/virtuspro.png`,
  gamerlegion: `${B}/teams/gamerlegion.svg`,
  saw: `${B}/teams/saw.svg`,
};

// -- Player Photos (local, downloaded from Liquipedia) --
const playerPhoto = {
  donk: `${B}/players/donk.jpg`,
  zywoo: `${B}/players/zywoo.jpg`,
  niko: `${B}/players/niko.jpg`,
  m0nesy: `${B}/players/m0nesy.jpg`,
  ropz: `${B}/players/ropz.jpg`,
};

// -- News/Event Images (local, downloaded from Unsplash) --
const esportsArena = `${B}/news/arena.jpg`;
const gamingSetup = `${B}/news/setup.jpg`;
const crowdArena = `${B}/news/crowd.jpg`;
const gamingKeyboard = `${B}/news/keyboard.jpg`;
const esportStage = `${B}/news/stage.jpg`;
const trophyCup = `${B}/news/trophy.jpg`;
const gamingMonitor = `${B}/news/monitor.jpg`;
const teamPhoto = `${B}/news/team.jpg`;
const conferenceHall = `${B}/news/conference.jpg`;
const gamingChair = `${B}/news/chair.jpg`;
const neonLights = `${B}/news/neon.jpg`;
const pcBuild = `${B}/news/pc.jpg`;
const headphones = `${B}/news/headphones.jpg`;
const stadium = `${B}/news/stadium.jpg`;
const fireworks = `${B}/news/fireworks.jpg`;

// -- Country Flags (emoji) --
const flag = {
  RU: "🇷🇺", FR: "🇫🇷", BA: "🇧🇦", EE: "🇪🇪", UA: "🇺🇦",
  LV: "🇱🇻", IL: "🇮🇱", SK: "🇸🇰", BR: "🇧🇷", NO: "🇳🇴",
};

// -- Teams --
export const teams: Team[] = [
  { name: "Natus Vincere", color: "#fbbf24", abbr: "NAVI", logo: logo.navi },
  { name: "Vitality", color: "#fcd34d", abbr: "VIT", logo: logo.vitality },
  { name: "FaZe Clan", color: "#ef4444", abbr: "FaZe", logo: logo.faze },
  { name: "G2 Esports", color: "#c084fc", abbr: "G2", logo: logo.g2 },
  { name: "Team Spirit", color: "#34d399", abbr: "Spirit", logo: logo.spirit },
  { name: "Team Liquid", color: "#38bdf8", abbr: "TL", logo: logo.liquid },
  { name: "MOUZ", color: "#2dd4bf", abbr: "MOUZ", logo: logo.mouz },
  { name: "Heroic", color: "#f472b6", abbr: "Heroic", logo: logo.heroic },
  { name: "FURIA", color: "#fbbf24", abbr: "FURIA", logo: logo.furia },
  { name: "Astralis", color: "#fb923c", abbr: "Astralis", logo: logo.astralis },
  { name: "Cloud9", color: "#94a3b8", abbr: "C9", logo: logo.cloud9 },
  { name: "Complexity", color: "#60a5fa", abbr: "COL", logo: logo.complexity },
  { name: "paiN Gaming", color: "#4ade80", abbr: "paiN", logo: logo.pain },
  { name: "Falcons", color: "#a78bfa", abbr: "Falcons", logo: logo.falcons },
  { name: "Imperial", color: "#f59e0b", abbr: "IMP", logo: logo.imperial },
  { name: "9z Team", color: "#e879f9", abbr: "9z", logo: logo.nine_z },
];

const t = (i: number) => teams[i];

// -- Live Matches --
export const liveMatches: Match[] = [
  { id: 1, team1: t(0), team2: t(2), score1: 13, score2: 11, event: "IEM Katowice 2026", format: "BO3", map: "Mirage", status: "live" },
  { id: 2, team1: t(1), team2: t(4), score1: 16, score2: 9, event: "IEM Katowice 2026", format: "BO3", map: "Inferno", status: "live" },
  { id: 3, team1: t(3), team2: t(5), score1: 7, score2: 10, event: "BLAST Premier", format: "BO1", map: "Anubis", status: "live" },
];

export const upcomingMatches: Match[] = [
  { id: 4, team1: t(7), team2: t(9), event: "IEM Katowice 2026", format: "BO3", time: "18:00", date: "Today", status: "upcoming" },
  { id: 5, team1: t(6), team2: t(13), event: "BLAST Premier", format: "BO3", time: "20:30", date: "Today", status: "upcoming" },
  { id: 6, team1: t(8), team2: t(10), event: "ESL Pro League", format: "BO1", time: "22:00", date: "Today", status: "upcoming" },
  { id: 7, team1: t(0), team2: t(1), event: "IEM Katowice 2026", format: "BO5", time: "14:00", date: "Tomorrow", status: "upcoming" },
  { id: 8, team1: t(11), team2: t(12), event: "ESL Pro League", format: "BO3", time: "16:00", date: "Tomorrow", status: "upcoming" },
  { id: 9, team1: t(3), team2: t(6), event: "BLAST Premier", format: "BO3", time: "19:00", date: "Tomorrow", status: "upcoming" },
  { id: 20, team1: t(14), team2: t(15), event: "ESL Challenger", format: "BO3", time: "15:00", date: "Mar 7", status: "upcoming" },
  { id: 21, team1: t(5), team2: t(9), event: "BLAST Premier", format: "BO3", time: "18:00", date: "Mar 7", status: "upcoming" },
];

export const recentResults: Match[] = [
  { id: 10, team1: t(1), team2: t(4), score1: 2, score2: 0, event: "IEM Katowice", format: "BO3", date: "Today", status: "finished" },
  { id: 11, team1: t(6), team2: t(7), score1: 1, score2: 2, event: "BLAST Premier", format: "BO3", date: "Today", status: "finished" },
  { id: 12, team1: t(8), team2: t(10), score1: 16, score2: 12, event: "ESL Pro League", format: "BO1", date: "Today", status: "finished" },
  { id: 13, team1: t(11), team2: t(12), score1: 2, score2: 1, event: "ESL Pro League", format: "BO3", date: "Yesterday", status: "finished" },
  { id: 14, team1: t(9), team2: t(3), score1: 0, score2: 2, event: "IEM Katowice", format: "BO3", date: "Yesterday", status: "finished" },
  { id: 15, team1: t(5), team2: t(0), score1: 1, score2: 2, event: "IEM Katowice", format: "BO3", date: "Yesterday", status: "finished" },
  { id: 16, team1: t(2), team2: t(7), score1: 2, score2: 0, event: "IEM Katowice", format: "BO3", date: "Mar 2", status: "finished" },
  { id: 17, team1: t(4), team2: t(6), score1: 2, score2: 1, event: "BLAST Premier", format: "BO3", date: "Mar 2", status: "finished" },
  { id: 18, team1: t(13), team2: t(14), score1: 2, score2: 0, event: "ESL Challenger", format: "BO3", date: "Mar 1", status: "finished" },
  { id: 19, team1: t(8), team2: t(15), score1: 16, score2: 8, event: "ESL Challenger", format: "BO1", date: "Mar 1", status: "finished" },
];

// -- News --
export const news: NewsArticle[] = [
  { id: 1, title: "IEM Katowice 2026 Grand Finals: NAVI vs FaZe in an epic rematch for the title", description: "After an incredible run through the lower bracket, FaZe Clan faces NAVI in a best-of-five grand final that promises to be one of the most exciting matches of the year.", author: "HLTV Staff", time: "15 min ago", comments: 234, tags: ["Major", "Hot"], image: esportsArena, featured: true },
  { id: 2, title: "s1mple officially returns to competitive CS2 for upcoming Major cycle", description: "After a brief hiatus, the GOAT returns to the active roster of NAVI.", author: "Striker", time: "1h ago", comments: 891, tags: ["Roster Move"], image: gamingSetup },
  { id: 3, title: "Valve announces new map pool changes for CS2 competitive season", description: "Tuscan enters the active duty map pool while Vertigo is removed.", author: "HLTV Staff", time: "2h ago", comments: 456, tags: ["Update"], image: gamingKeyboard },
  { id: 4, title: "Top 20 players of 2025: The final list revealed with surprising entries", description: "donk takes the crown as the youngest ever #1.", author: "Nomad", time: "3h ago", comments: 1200, tags: ["Awards"], image: trophyCup },
  { id: 5, title: "BLAST Premier Spring Groups 2026: Schedule, format, and teams confirmed", author: "HLTV Staff", time: "5h ago", comments: 189, tags: ["Event"], image: crowdArena },
  { id: 6, title: "Workshop creators highlight the best community skins of March 2026", author: "HLTV Staff", time: "6h ago", comments: 342, tags: ["Community"], image: neonLights },
  { id: 7, title: "G2 Esports announce new performance facility in Berlin", author: "Striker", time: "8h ago", comments: 156, tags: ["Org News"], image: gamingChair },
  { id: 8, title: "ESL Pro League Season 21: Groups and opening matchups revealed", description: "The stage is set for one of the most stacked seasons.", author: "HLTV Staff", time: "10h ago", comments: 278, tags: ["Event"], image: conferenceHall },
  { id: 9, title: "Heroic complete roster with signing of rising Danish talent", author: "Nomad", time: "12h ago", comments: 445, tags: ["Roster Move"], image: teamPhoto },
  { id: 10, title: "New anti-cheat measures coming to CS2 matchmaking next month", author: "HLTV Staff", time: "14h ago", comments: 1890, tags: ["Update"], image: pcBuild },
  { id: 11, title: "FURIA sign promising Brazilian AWPer from Academy roster", author: "Striker", time: "16h ago", comments: 367, tags: ["Roster Move"], image: headphones },
  { id: 12, title: "IEM Chengdu 2026 tickets go on sale next week", author: "HLTV Staff", time: "18h ago", comments: 98, tags: ["Event"], image: stadium },
];

// -- Rankings --
export const ranking: RankedTeam[] = [
  { rank: 1, name: "Natus Vincere", color: "#fbbf24", points: 1000, change: "same", region: "Europe", logo: logo.navi },
  { rank: 2, name: "G2 Esports", color: "#c084fc", points: 892, change: "up", changeVal: 1, region: "Europe", logo: logo.g2 },
  { rank: 3, name: "Vitality", color: "#fcd34d", points: 845, change: "down", changeVal: 1, region: "Europe", logo: logo.vitality },
  { rank: 4, name: "MOUZ", color: "#2dd4bf", points: 756, change: "same", region: "Europe", logo: logo.mouz },
  { rank: 5, name: "FaZe Clan", color: "#ef4444", points: 723, change: "up", changeVal: 2, region: "Europe", logo: logo.faze },
  { rank: 6, name: "Team Spirit", color: "#34d399", points: 698, change: "down", changeVal: 1, region: "Europe", logo: logo.spirit },
  { rank: 7, name: "Team Liquid", color: "#38bdf8", points: 654, change: "up", changeVal: 1, region: "Americas", logo: logo.liquid },
  { rank: 8, name: "Heroic", color: "#f472b6", points: 612, change: "same", region: "Europe", logo: logo.heroic },
  { rank: 9, name: "FURIA", color: "#fbbf24", points: 589, change: "up", changeVal: 3, region: "Americas", logo: logo.furia },
  { rank: 10, name: "Astralis", color: "#fb923c", points: 567, change: "down", changeVal: 2, region: "Europe", logo: logo.astralis },
  { rank: 11, name: "Cloud9", color: "#94a3b8", points: 534, change: "down", changeVal: 1, region: "Americas", logo: logo.cloud9 },
  { rank: 12, name: "Complexity", color: "#60a5fa", points: 501, change: "up", changeVal: 2, region: "Americas", logo: logo.complexity },
  { rank: 13, name: "Falcons", color: "#a78bfa", points: 478, change: "same", region: "Europe", logo: logo.falcons },
  { rank: 14, name: "paiN Gaming", color: "#4ade80", points: 445, change: "up", changeVal: 1, region: "Americas", logo: logo.pain },
  { rank: 15, name: "Imperial", color: "#f59e0b", points: 412, change: "down", changeVal: 3, region: "Americas", logo: logo.imperial },
  { rank: 16, name: "9z Team", color: "#e879f9", points: 389, change: "same", region: "Americas", logo: logo.nine_z },
  { rank: 17, name: "TheMongolz", color: "#f97316", points: 367, change: "up", changeVal: 4, region: "Asia", logo: logo.mongolz },
  { rank: 18, name: "Virtus.pro", color: "#fb923c", points: 345, change: "down", changeVal: 1, region: "Europe", logo: logo.virtuspro },
  { rank: 19, name: "GamerLegion", color: "#a3e635", points: 323, change: "up", changeVal: 2, region: "Europe", logo: logo.gamerlegion },
  { rank: 20, name: "SAW", color: "#67e8f9", points: 301, change: "same", region: "Europe", logo: logo.saw },
];

// -- Events --
export const events: Event[] = [
  { id: 1, name: "IEM Katowice 2026", tier: "S", dates: "Mar 10 – 23, 2026", prize: "$1,000,000", teams: 16, progress: 75, status: "Playoffs", location: "Katowice, Poland", image: esportsArena },
  { id: 2, name: "BLAST Premier Spring", tier: "S", dates: "Mar 25 – Apr 6, 2026", prize: "$425,000", teams: 12, progress: 20, status: "Group Stage", location: "Copenhagen, Denmark", image: crowdArena },
  { id: 3, name: "ESL Pro League Season 21", tier: "A", dates: "Apr 14 – 27, 2026", prize: "$850,000", teams: 24, progress: 0, status: "Upcoming", location: "Malta", image: conferenceHall },
  { id: 4, name: "PGL Major Copenhagen", tier: "S", dates: "May 5 – 18, 2026", prize: "$1,250,000", teams: 24, progress: 0, status: "Upcoming", location: "Copenhagen, Denmark", image: stadium },
  { id: 5, name: "IEM Chengdu 2026", tier: "A", dates: "Jun 2 – 8, 2026", prize: "$500,000", teams: 16, progress: 0, status: "Upcoming", location: "Chengdu, China", image: fireworks },
  { id: 6, name: "BLAST Premier Spring Final", tier: "S", dates: "Jun 18 – 22, 2026", prize: "$425,000", teams: 8, progress: 0, status: "Upcoming", location: "London, UK", image: esportStage },
  { id: 7, name: "ESL Challenger Valencia", tier: "B", dates: "Apr 7 – 13, 2026", prize: "$150,000", teams: 16, progress: 0, status: "Upcoming", location: "Valencia, Spain", image: gamingMonitor },
  { id: 8, name: "Thunderpick World Championship", tier: "A", dates: "Jul 1 – 13, 2026", prize: "$1,000,000", teams: 16, progress: 0, status: "Upcoming", location: "TBD", image: neonLights },
];

// -- Players --
export const topPlayers: Player[] = [
  { rank: 1, name: "donk", realName: "Danil Kryshkovets", team: "Spirit", country: "RU", countryFlag: flag.RU, rating: 1.36, kd: "1.42", adr: 94.2, kast: "78.5%", image: playerPhoto.donk, teamLogo: logo.spirit },
  { rank: 2, name: "ZywOo", realName: "Mathieu Herbaut", team: "Vitality", country: "FR", countryFlag: flag.FR, rating: 1.31, kd: "1.35", adr: 88.7, kast: "75.2%", image: playerPhoto.zywoo, teamLogo: logo.vitality },
  { rank: 3, name: "NiKo", realName: "Nikola Kovač", team: "G2", country: "BA", countryFlag: flag.BA, rating: 1.27, kd: "1.30", adr: 85.4, kast: "73.8%", image: playerPhoto.niko, teamLogo: logo.g2 },
  { rank: 4, name: "m0NESY", realName: "Ilya Osipov", team: "G2", country: "RU", countryFlag: flag.RU, rating: 1.25, kd: "1.28", adr: 82.1, kast: "72.4%", image: playerPhoto.m0nesy, teamLogo: logo.g2 },
  { rank: 5, name: "ropz", realName: "Robin Kool", team: "FaZe", country: "EE", countryFlag: flag.EE, rating: 1.21, kd: "1.24", adr: 79.8, kast: "74.1%", image: playerPhoto.ropz, teamLogo: logo.faze },
  { rank: 6, name: "b1t", realName: "Valeriy Vakhovskiy", team: "NAVI", country: "UA", countryFlag: flag.UA, rating: 1.19, kd: "1.22", adr: 78.3, kast: "71.6%", image: playerPhoto.donk, teamLogo: logo.navi },
  { rank: 7, name: "jL", realName: "Justin Wills", team: "NAVI", country: "LV", countryFlag: flag.LV, rating: 1.18, kd: "1.20", adr: 76.9, kast: "70.8%", image: playerPhoto.donk, teamLogo: logo.navi },
  { rank: 8, name: "Spinx", realName: "Lotan Giladi", team: "Vitality", country: "IL", countryFlag: flag.IL, rating: 1.16, kd: "1.18", adr: 75.4, kast: "72.0%", image: playerPhoto.zywoo, teamLogo: logo.vitality },
  { rank: 9, name: "frozen", realName: "David Čerňanský", team: "MOUZ", country: "SK", countryFlag: flag.SK, rating: 1.15, kd: "1.17", adr: 74.1, kast: "69.5%", image: playerPhoto.niko, teamLogo: logo.mouz },
  { rank: 10, name: "huNter-", realName: "Nemanja Kovač", team: "G2", country: "BA", countryFlag: flag.BA, rating: 1.14, kd: "1.16", adr: 73.8, kast: "71.2%", image: playerPhoto.niko, teamLogo: logo.g2 },
  { rank: 11, name: "broky", realName: "Helvijs Saukants", team: "FaZe", country: "LV", countryFlag: flag.LV, rating: 1.13, kd: "1.15", adr: 72.5, kast: "68.9%", image: playerPhoto.ropz, teamLogo: logo.faze },
  { rank: 12, name: "rain", realName: "Håvard Nygaard", team: "FaZe", country: "NO", countryFlag: flag.NO, rating: 1.11, kd: "1.13", adr: 71.2, kast: "70.3%", image: playerPhoto.ropz, teamLogo: logo.faze },
  { rank: 13, name: "sh1ro", realName: "Dmitry Sokolov", team: "Spirit", country: "RU", countryFlag: flag.RU, rating: 1.10, kd: "1.12", adr: 70.8, kast: "67.5%", image: playerPhoto.donk, teamLogo: logo.spirit },
  { rank: 14, name: "yuurih", realName: "Yuri Santos", team: "FURIA", country: "BR", countryFlag: flag.BR, rating: 1.09, kd: "1.11", adr: 69.4, kast: "69.0%", image: playerPhoto.m0nesy, teamLogo: logo.furia },
  { rank: 15, name: "KSCERATO", realName: "Kaike Cerato", team: "FURIA", country: "BR", countryFlag: flag.BR, rating: 1.08, kd: "1.10", adr: 68.1, kast: "71.8%", image: playerPhoto.m0nesy, teamLogo: logo.furia },
];

// -- Forum Threads --
export const forumThreads: ForumThread[] = [
  { id: 1, title: "NAVI vs FaZe Grand Final predictions?", author: "CSGOfan123", authorRank: "Global Elite", replies: 342, views: 12400, lastReply: "2 min ago", category: "Match Discussion", pinned: true },
  { id: 2, title: "s1mple comeback - will he be the same?", author: "Hiko_Fan", authorRank: "Legendary Eagle", replies: 567, views: 28900, lastReply: "5 min ago", category: "General" },
  { id: 3, title: "Best crosshair settings for 2026?", author: "NovicePlayer", authorRank: "Gold Nova", replies: 89, views: 4500, lastReply: "12 min ago", category: "Help" },
  { id: 4, title: "Tuscan replacing Vertigo - good or bad?", author: "MapLover99", authorRank: "Supreme", replies: 234, views: 9800, lastReply: "18 min ago", category: "General" },
  { id: 5, title: "donk is the most talented player ever", author: "SpiritFanBoy", authorRank: "Master Guardian", replies: 445, views: 15600, lastReply: "25 min ago", category: "General" },
  { id: 6, title: "FaZe roster needs changes after this event", author: "TacticsMaster", authorRank: "Legendary Eagle", replies: 178, views: 7200, lastReply: "32 min ago", category: "Team Discussion" },
  { id: 7, title: "Best CS2 clips of the week - March edition", author: "ClipHunter", authorRank: "Distinguished Master Guardian", replies: 56, views: 3400, lastReply: "45 min ago", category: "Multimedia" },
  { id: 8, title: "Mouse sensitivity guide for beginners", author: "AimTrainer", authorRank: "Gold Nova", replies: 123, views: 18900, lastReply: "1h ago", category: "Help", pinned: true },
  { id: 9, title: "Brazilian CS is back? FURIA and Imperial looking strong", author: "BRfan", authorRank: "Master Guardian", replies: 267, views: 11200, lastReply: "1h ago", category: "Team Discussion" },
  { id: 10, title: "Rate my inventory - just got a new knife!", author: "SkinCollector", authorRank: "Silver", replies: 45, views: 2100, lastReply: "2h ago", category: "Off Topic" },
  { id: 11, title: "Why ZywOo deserves #1 over donk", author: "VitalityFan", authorRank: "Supreme", replies: 678, views: 23400, lastReply: "2h ago", category: "General" },
  { id: 12, title: "New smoke lineups for Tuscan - complete guide", author: "NadeKing", authorRank: "Global Elite", replies: 89, views: 6700, lastReply: "3h ago", category: "Help" },
];

// -- Streams --
export const streams: Stream[] = [
  { id: 1, channel: "ESL_CSGO", title: "IEM Katowice 2026 - Semifinals", viewers: 124500, game: "Counter-Strike 2", language: "EN", thumbnail: esportsArena },
  { id: 2, channel: "gaules", title: "WATCHPARTY IEM Katowice - VAMO FURIA!", viewers: 51200, game: "Counter-Strike 2", language: "PT", thumbnail: crowdArena },
  { id: 3, channel: "MaDHousE_TV", title: "Analisando as semis do IEM Katowice", viewers: 14800, game: "Counter-Strike 2", language: "PT", thumbnail: esportStage },
  { id: 4, channel: "fl0m", title: "Rank S Grind & IEM Watch Along", viewers: 12300, game: "Counter-Strike 2", language: "EN", thumbnail: gamingSetup },
  { id: 5, channel: "BLAST_TV", title: "BLAST Premier Spring Groups", viewers: 82300, game: "Counter-Strike 2", language: "EN", thumbnail: stadium },
  { id: 6, channel: "s1mple", title: "Ranked Grind - Road to Global", viewers: 38700, game: "Counter-Strike 2", language: "RU", thumbnail: gamingKeyboard },
  { id: 7, channel: "Pimp", title: "IEM Katowice Co-stream w/ analysis", viewers: 8400, game: "Counter-Strike 2", language: "EN", thumbnail: gamingMonitor },
  { id: 8, channel: "mch_agg", title: "FPL ao vivo - grind noturno", viewers: 6200, game: "Counter-Strike 2", language: "PT", thumbnail: neonLights },
];

// -- Maps --
export interface GameMap {
  slug: string;
  name: string;
  image: string;
  description: string;
  pool: "active" | "reserve" | "removed";
  ctWinRate: number;
  tWinRate: number;
  avgRounds: number;
  pickRate: number;
  banRate: number;
  totalProMatches: number;
  bestTeams: { name: string; logo: string; winRate: number }[];
  callouts: string[];
  utilityGuides: {
    type: "smoke" | "flash" | "molotov" | "he";
    name: string;
    from: string;
    description: string;
    difficulty: "Easy" | "Medium" | "Hard";
  }[];
  highlights: {
    title: string;
    player: string;
    event: string;
    round: string;
    description: string;
  }[];
  recentResults: {
    team1: string;
    team1Logo: string;
    score1: number;
    team2: string;
    team2Logo: string;
    score2: number;
    event: string;
    date: string;
  }[];
}

export const gameMaps: GameMap[] = [
  {
    slug: "mirage",
    name: "Mirage",
    image: crowdArena,
    description: "One of the most iconic and balanced maps in CS history. Set in a Moroccan-inspired setting, Mirage features a classic three-lane layout with mid control being the key to success. It rewards both strategic play and individual skill.",
    pool: "active",
    ctWinRate: 52.3,
    tWinRate: 47.7,
    avgRounds: 26.4,
    pickRate: 28.5,
    banRate: 12.3,
    totalProMatches: 14820,
    bestTeams: [
      { name: "Natus Vincere", logo: logo.navi, winRate: 74.2 },
      { name: "FaZe Clan", logo: logo.faze, winRate: 71.8 },
      { name: "G2 Esports", logo: logo.g2, winRate: 69.5 },
      { name: "Team Spirit", logo: logo.spirit, winRate: 67.3 },
      { name: "Vitality", logo: logo.vitality, winRate: 65.1 },
    ],
    callouts: ["A Site", "A Ramp", "Tetris", "Ticket", "Jungle", "Connector", "CT Spawn", "Window", "Mid", "Top Mid", "Underpass", "B Site", "B Apps", "B Short", "Van", "Kitchen", "Market", "Palace", "T Spawn", "Catwalk"],
    utilityGuides: [
      { type: "smoke", name: "Window Smoke from T Spawn", from: "T Spawn", description: "Line up with the corner of the building on the left, aim at the antenna tip, and throw. This blocks CT sniper from Window room.", difficulty: "Easy" },
      { type: "smoke", name: "Connector Smoke from A Ramp", from: "A Ramp", description: "Stand at the corner of A Ramp near the boxes, aim at the edge of the building above connector, jump-throw.", difficulty: "Medium" },
      { type: "smoke", name: "Jungle Smoke from T Spawn", from: "T Spawn", description: "Position yourself against the wall at T Spawn, crosshair at the specific gap in the building, running throw.", difficulty: "Easy" },
      { type: "flash", name: "A Site Pop Flash from Palace", from: "Palace", description: "Turn away from A site, right-click throw over the wall for a perfect pop flash that blinds site players.", difficulty: "Easy" },
      { type: "flash", name: "B Apartments Flash", from: "B Apartments", description: "Throw over the wall from B apps entrance, bounces once and pops right as you peek.", difficulty: "Medium" },
      { type: "molotov", name: "Under Window Molotov", from: "Top Mid", description: "From top mid, aim at the bottom of window room and throw. Forces the AWPer out of position.", difficulty: "Medium" },
      { type: "he", name: "B Van HE", from: "B Apartments", description: "Peek the corner and throw at the van. Does massive damage to anyone playing behind it.", difficulty: "Easy" },
    ],
    highlights: [
      { title: "coldzera's jumping AWP double kill", player: "coldzera", event: "MLG Columbus 2016", round: "OT Round 4", description: "The most iconic play in CS history. coldzera jumped from the boxes on B site and hit two no-scope AWP kills mid-air." },
      { title: "NiKo 1v5 ace clutch", player: "NiKo", event: "ESL Pro League S14", round: "Round 24", description: "NiKo single-handedly won a 1v5 on the A site retake with all headshots." },
      { title: "donk 1v4 clutch", player: "donk", event: "IEM Katowice 2026", round: "Round 28", description: "donk dismantled NAVI's defense with a 1v4 clutch that turned the semifinal around." },
    ],
    recentResults: [
      { team1: "NAVI", team1Logo: logo.navi, score1: 13, team2: "FaZe", team2Logo: logo.faze, score2: 11, event: "IEM Katowice 2026", date: "Today" },
      { team1: "Spirit", team1Logo: logo.spirit, score1: 16, team2: "G2", team2Logo: logo.g2, score2: 9, event: "BLAST Premier", date: "Yesterday" },
      { team1: "Vitality", team1Logo: logo.vitality, score1: 13, team2: "MOUZ", team2Logo: logo.mouz, score2: 16, event: "ESL Pro League", date: "Mar 2" },
    ],
  },
  {
    slug: "inferno",
    name: "Inferno",
    image: esportsArena,
    description: "A classic map set in an Italian village. Inferno is known for its tight corridors, crucial banana control, and intense A site executions. Team play and utility usage are essential here.",
    pool: "active",
    ctWinRate: 53.8,
    tWinRate: 46.2,
    avgRounds: 27.1,
    pickRate: 25.2,
    banRate: 14.1,
    totalProMatches: 15340,
    bestTeams: [
      { name: "Vitality", logo: logo.vitality, winRate: 76.1 },
      { name: "Natus Vincere", logo: logo.navi, winRate: 72.4 },
      { name: "Astralis", logo: logo.astralis, winRate: 70.8 },
      { name: "FURIA", logo: logo.furia, winRate: 68.2 },
      { name: "Team Liquid", logo: logo.liquid, winRate: 66.9 },
    ],
    callouts: ["A Site", "Pit", "Graveyard", "Library", "Arch", "Apartments", "Balcony", "Mid", "Second Mid", "Banana", "B Site", "Coffins", "New Box", "Dark", "CT Spawn", "Construction", "Hay Bales", "T Spawn", "Top Banana", "Bottom Banana"],
    utilityGuides: [
      { type: "smoke", name: "Coffins Smoke from Banana", from: "Banana", description: "From top banana, aim at the specific spot on the sky above the building and throw. Covers coffins position on B site.", difficulty: "Easy" },
      { type: "smoke", name: "CT Smoke from Banana", from: "Banana", description: "Stand at the corner of top banana, aim at the edge of the church tower, jump-throw. Blocks CT rotations.", difficulty: "Medium" },
      { type: "smoke", name: "Arch Smoke from T Spawn", from: "T Spawn", description: "Line up with the chimney and throw. Essential for A executions to block rotations from arch.", difficulty: "Hard" },
      { type: "flash", name: "Banana Pop Flash", from: "Top Banana", description: "Throw against the right wall at top banana for a perfect pop that catches aggressive CTs.", difficulty: "Easy" },
      { type: "molotov", name: "Pit Molotov from Apartments", from: "Apartments", description: "Aim at the wall above pit from apartments balcony. Forces the AWPer out of pit during A exec.", difficulty: "Medium" },
    ],
    highlights: [
      { title: "s1mple 1v3 AWP clutch", player: "s1mple", event: "Cologne 2018", round: "Round 30", description: "s1mple hit three insane flick shots to win a 1v3 and save NAVI from elimination." },
      { title: "flusha 4k through smoke", player: "flusha", event: "DreamHack Winter 2014", round: "Round 15", description: "The controversial 4k through smoke on B site that became one of the most debated plays ever." },
    ],
    recentResults: [
      { team1: "Vitality", team1Logo: logo.vitality, score1: 16, team2: "Spirit", team2Logo: logo.spirit, score2: 9, event: "IEM Katowice 2026", date: "Today" },
      { team1: "NAVI", team1Logo: logo.navi, score1: 16, team2: "G2", team2Logo: logo.g2, score2: 13, event: "BLAST Premier", date: "Yesterday" },
    ],
  },
  {
    slug: "dust2",
    name: "Dust II",
    image: gamingKeyboard,
    description: "The most famous map in FPS history. Dust II's simple yet deep layout makes it perfect for both casual and pro play. Long range duels, mid control, and fast rotations define gameplay here.",
    pool: "active",
    ctWinRate: 50.8,
    tWinRate: 49.2,
    avgRounds: 25.8,
    pickRate: 18.7,
    banRate: 22.4,
    totalProMatches: 18560,
    bestTeams: [
      { name: "G2 Esports", logo: logo.g2, winRate: 72.3 },
      { name: "FaZe Clan", logo: logo.faze, winRate: 69.8 },
      { name: "FURIA", logo: logo.furia, winRate: 67.5 },
      { name: "MOUZ", logo: logo.mouz, winRate: 65.2 },
      { name: "Heroic", logo: logo.heroic, winRate: 64.1 },
    ],
    callouts: ["A Site", "A Long", "A Short", "A Car", "Goose", "A Platform", "CT Spawn", "Mid", "Mid Doors", "B Site", "B Tunnels", "Upper Tunnels", "B Car", "B Window", "B Closet", "Catwalk", "T Spawn", "Outside Long", "Pit", "Xbox"],
    utilityGuides: [
      { type: "smoke", name: "Cross Smoke from T Spawn", from: "T Spawn", description: "Blocks mid doors so you can cross to B tunnels safely. Essential T-side fundamental.", difficulty: "Easy" },
      { type: "smoke", name: "A Long Corner Smoke", from: "A Long", description: "Throw at the corner of A long to block the CT's vision from the site. Allows safe entry.", difficulty: "Easy" },
      { type: "flash", name: "A Long Flash", from: "Outside Long", description: "Pop flash over the wall from outside long. Perfect for peeking long doors.", difficulty: "Easy" },
      { type: "molotov", name: "B Car Molotov", from: "B Tunnels", description: "Molotov the car position on B site from tunnels entrance.", difficulty: "Medium" },
    ],
    highlights: [
      { title: "ScreaM's one-taps on Long", player: "ScreaM", event: "ECS Season 2", round: "Round 8", description: "The Headshot Machine hit 4 consecutive one-taps at Long, showcasing the purest aim in CS history." },
      { title: "s1mple no-scope across mid", player: "s1mple", event: "ESL One Cologne 2016", round: "Round 22", description: "s1mple hit a falling no-scope AWP shot through mid doors that defied all logic." },
    ],
    recentResults: [
      { team1: "G2", team1Logo: logo.g2, score1: 16, team2: "FaZe", team2Logo: logo.faze, score2: 12, event: "ESL Pro League", date: "Mar 2" },
      { team1: "FURIA", team1Logo: logo.furia, score1: 13, team2: "Liquid", team2Logo: logo.liquid, score2: 16, event: "BLAST Premier", date: "Mar 1" },
    ],
  },
  {
    slug: "anubis",
    name: "Anubis",
    image: neonLights,
    description: "An ancient Egyptian-themed map that joined the competitive pool in CS2. Known for its unique vertical gameplay, water canal, and multi-level engagements. Teams are still developing the meta.",
    pool: "active",
    ctWinRate: 54.1,
    tWinRate: 45.9,
    avgRounds: 27.8,
    pickRate: 15.3,
    banRate: 25.8,
    totalProMatches: 3240,
    bestTeams: [
      { name: "Team Spirit", logo: logo.spirit, winRate: 73.4 },
      { name: "MOUZ", logo: logo.mouz, winRate: 70.2 },
      { name: "G2 Esports", logo: logo.g2, winRate: 68.9 },
      { name: "Natus Vincere", logo: logo.navi, winRate: 66.5 },
      { name: "Heroic", logo: logo.heroic, winRate: 64.8 },
    ],
    callouts: ["A Site", "A Main", "A Connector", "Palace", "Pillar", "Water", "Canal", "Mid", "Bridge", "B Site", "B Main", "B Connector", "Ruins", "Heaven", "CT Spawn", "T Spawn", "Walkway", "Boat", "Alley", "Street"],
    utilityGuides: [
      { type: "smoke", name: "Bridge Smoke from T Spawn", from: "T Spawn", description: "Blocks bridge crossing to allow mid control takes. Standard T-side opener.", difficulty: "Medium" },
      { type: "smoke", name: "Heaven Smoke for B Execute", from: "B Main", description: "Blocks the heaven/elevated position watching B site. Critical for any B execute.", difficulty: "Medium" },
      { type: "flash", name: "Canal Pop Flash", from: "Canal", description: "Bounce off the wall in canal for a flash that catches A site defenders.", difficulty: "Hard" },
      { type: "molotov", name: "A Pillar Molotov", from: "A Main", description: "Forces the defender from behind the pillar on A site. Key to clearing common positions.", difficulty: "Medium" },
    ],
    highlights: [
      { title: "donk ace through water", player: "donk", event: "BLAST Premier 2025", round: "Round 18", description: "donk pushed through the canal and aced the entire CT side with a Deagle in a force buy round." },
    ],
    recentResults: [
      { team1: "G2", team1Logo: logo.g2, score1: 7, team2: "Liquid", team2Logo: logo.liquid, score2: 10, event: "BLAST Premier", date: "Today" },
      { team1: "Spirit", team1Logo: logo.spirit, score1: 16, team2: "MOUZ", team2Logo: logo.mouz, score2: 12, event: "IEM Katowice 2026", date: "Yesterday" },
    ],
  },
  {
    slug: "ancient",
    name: "Ancient",
    image: conferenceHall,
    description: "Set in ancient Aztec ruins, this map features a compact layout with tight angles and quick rotations. It has evolved significantly since its introduction, becoming a staple in competitive play.",
    pool: "active",
    ctWinRate: 55.2,
    tWinRate: 44.8,
    avgRounds: 27.3,
    pickRate: 14.8,
    banRate: 20.1,
    totalProMatches: 4560,
    bestTeams: [
      { name: "Vitality", logo: logo.vitality, winRate: 75.8 },
      { name: "FaZe Clan", logo: logo.faze, winRate: 72.1 },
      { name: "Cloud9", logo: logo.cloud9, winRate: 68.4 },
      { name: "Astralis", logo: logo.astralis, winRate: 66.7 },
      { name: "NAVI", logo: logo.navi, winRate: 65.3 },
    ],
    callouts: ["A Site", "A Main", "Donut", "Elbow", "Temple", "Cave", "Mid", "B Site", "B Ramp", "Alley", "CT Spawn", "T Spawn", "Jaguar", "Totem", "Red Room", "Water", "Side Path", "House", "Garden", "Sniper Nest"],
    utilityGuides: [
      { type: "smoke", name: "Donut Smoke from A Main", from: "A Main", description: "Blocks the donut connection allowing you to take A without being flanked.", difficulty: "Easy" },
      { type: "smoke", name: "CT Smoke for B Execute", from: "B Ramp", description: "Blocks CT spawn rotation to B site. Essential for any B take.", difficulty: "Medium" },
      { type: "flash", name: "A Site Entry Flash", from: "A Main", description: "Bounce off the left wall for a flash that pops right as you enter A site.", difficulty: "Easy" },
      { type: "molotov", name: "Cave Molotov from Mid", from: "Mid", description: "Clears the cave position which is a common off-angle hold.", difficulty: "Hard" },
    ],
    highlights: [
      { title: "ZywOo 1v3 retake on B", player: "ZywOo", event: "PGL Major 2025", round: "Match Point", description: "ZywOo clutched a 1v3 retake on B site at match point to keep Vitality alive in the Major." },
    ],
    recentResults: [
      { team1: "Vitality", team1Logo: logo.vitality, score1: 16, team2: "Astralis", team2Logo: logo.astralis, score2: 10, event: "IEM Katowice 2026", date: "Mar 2" },
    ],
  },
  {
    slug: "nuke",
    name: "Nuke",
    image: pcBuild,
    description: "A nuclear power plant map with a unique dual-level layout. Nuke's vertical gameplay, with A site above B site, creates a distinct tactical challenge. Sound plays a massive role here.",
    pool: "active",
    ctWinRate: 57.4,
    tWinRate: 42.6,
    avgRounds: 28.2,
    pickRate: 12.1,
    banRate: 28.7,
    totalProMatches: 8920,
    bestTeams: [
      { name: "Astralis", logo: logo.astralis, winRate: 78.3 },
      { name: "Natus Vincere", logo: logo.navi, winRate: 73.6 },
      { name: "FaZe Clan", logo: logo.faze, winRate: 70.2 },
      { name: "Team Spirit", logo: logo.spirit, winRate: 68.9 },
      { name: "Vitality", logo: logo.vitality, winRate: 67.1 },
    ],
    callouts: ["A Site", "Heaven", "Hell", "Hut", "Main", "Squeaky", "Vent", "B Site", "Ramp", "Secret", "Decon", "CT Spawn", "T Spawn", "Outside", "Silo", "Yard", "Garage", "Control Room", "Trophy", "Radio"],
    utilityGuides: [
      { type: "smoke", name: "Heaven Smoke from Outside", from: "Outside", description: "Blocks heaven allowing safe plant on A site. One of the most important smokes on the map.", difficulty: "Hard" },
      { type: "smoke", name: "Ramp Smoke from T Spawn", from: "T Spawn", description: "Blocks CT vision down ramp. Allows B site take.", difficulty: "Medium" },
      { type: "flash", name: "Squeaky Door Flash", from: "Lobby", description: "Flash through squeaky door. Pop flash catches anyone playing on A site.", difficulty: "Easy" },
      { type: "molotov", name: "Vent Molotov from Outside", from: "Outside", description: "Molotov into the vent to deny rotations from B to A. Critical for splits.", difficulty: "Hard" },
    ],
    highlights: [
      { title: "device 4k AWP hold", player: "device", event: "IEM Katowice 2019", round: "Round 27", description: "device held outside with the AWP and hit four consecutive picks to shut down the T execute." },
    ],
    recentResults: [
      { team1: "NAVI", team1Logo: logo.navi, score1: 16, team2: "Spirit", team2Logo: logo.spirit, score2: 14, event: "IEM Katowice 2026", date: "Yesterday" },
    ],
  },
  {
    slug: "tuscan",
    name: "Tuscan",
    image: esportStage,
    description: "The long-awaited return of Tuscan to competitive CS! Set in an Italian town, Tuscan features wide open spaces, complex mid control, and multiple angles. It replaced Vertigo in the active pool.",
    pool: "active",
    ctWinRate: 51.2,
    tWinRate: 48.8,
    avgRounds: 26.1,
    pickRate: 8.9,
    banRate: 18.5,
    totalProMatches: 890,
    bestTeams: [
      { name: "G2 Esports", logo: logo.g2, winRate: 71.2 },
      { name: "MOUZ", logo: logo.mouz, winRate: 68.5 },
      { name: "FaZe Clan", logo: logo.faze, winRate: 66.3 },
      { name: "Heroic", logo: logo.heroic, winRate: 64.8 },
      { name: "FURIA", logo: logo.furia, winRate: 63.1 },
    ],
    callouts: ["A Site", "A Main", "A Halls", "Ivy", "Balcony", "Mid", "Connector", "B Site", "B Lobby", "B Halls", "CT Spawn", "T Spawn", "Garage", "Arch", "Vineyards", "Church", "Patio", "Stairs", "Olive", "Fountain"],
    utilityGuides: [
      { type: "smoke", name: "Connector Smoke from T Spawn", from: "T Spawn", description: "Blocks connector to allow safe mid control or A split. Still being optimized in the meta.", difficulty: "Medium" },
      { type: "smoke", name: "Church Smoke for B Execute", from: "B Lobby", description: "Covers the church angle watching B site. Essential for B executes.", difficulty: "Easy" },
      { type: "flash", name: "A Main Entry Flash", from: "A Main", description: "Pop flash around the corner into A main. Catches defenders off guard.", difficulty: "Easy" },
    ],
    highlights: [
      { title: "m0NESY ace on debut", player: "m0NESY", event: "ESL Pro League S21", round: "Round 5", description: "m0NESY opened Tuscan's competitive debut with a clean ace, setting the tone for G2's dominance on the map." },
    ],
    recentResults: [
      { team1: "G2", team1Logo: logo.g2, score1: 16, team2: "MOUZ", team2Logo: logo.mouz, score2: 11, event: "ESL Pro League", date: "Mar 1" },
    ],
  },
  {
    slug: "vertigo",
    name: "Vertigo",
    image: headphones,
    description: "Set on top of a skyscraper under construction, Vertigo was known for its tight corridors, vertical duels, and unique aesthetic. Removed from the active pool in 2026 after the Tuscan update.",
    pool: "removed",
    ctWinRate: 53.5,
    tWinRate: 46.5,
    avgRounds: 27.6,
    pickRate: 0,
    banRate: 0,
    totalProMatches: 6780,
    bestTeams: [
      { name: "Astralis", logo: logo.astralis, winRate: 77.5 },
      { name: "Team Liquid", logo: logo.liquid, winRate: 73.1 },
      { name: "Natus Vincere", logo: logo.navi, winRate: 71.8 },
      { name: "Cloud9", logo: logo.cloud9, winRate: 69.4 },
      { name: "Complexity", logo: logo.complexity, winRate: 67.2 },
    ],
    callouts: ["A Site", "A Ramp", "Elevator", "Scaffolding", "Heaven", "Hell", "B Site", "B Stairs", "B Default", "Generator", "Mid", "CT Spawn", "T Spawn", "Sandbags", "Silo", "Ladder", "Window", "Tunnels", "Construction", "Bridge"],
    utilityGuides: [
      { type: "smoke", name: "CT Smoke from T Stairs", from: "T Stairs", description: "Blocks CT rotation to A site. Classic Vertigo execute smoke.", difficulty: "Easy" },
      { type: "flash", name: "B Stairs Flash", from: "B Stairs", description: "Pop flash from stairs to clear site. Bounces off ceiling.", difficulty: "Medium" },
    ],
    highlights: [
      { title: "gla1ve's perfect B execute", player: "gla1ve", event: "Stockholm Major 2021", round: "Round 23", description: "Astralis showcased the perfect Vertigo B execute with gla1ve's calling, winning the round without a single trade." },
    ],
    recentResults: [],
  },
];

// -- Highlights --
export interface Highlight {
  id: number;
  title: string;
  player: string;
  playerImage: string;
  team: string;
  teamLogo: string;
  event: string;
  map: string;
  type: "clutch" | "ace" | "awp" | "pistol" | "wallbang" | "deagle";
  date: string;
  views: number;
  likes: number;
  thumbnail: string;
  description: string;
}

export const highlights: Highlight[] = [
  { id: 1, title: "donk 1v4 AK clutch on Mirage", player: "donk", playerImage: playerPhoto.donk, team: "Spirit", teamLogo: logo.spirit, event: "IEM Katowice 2026", map: "Mirage", type: "clutch", date: "Today", views: 524000, likes: 41200, thumbnail: esportsArena, description: "In the semifinal, donk found himself in an impossible 1v4 situation. What followed was a masterclass in positioning and aim that will be remembered for years." },
  { id: 2, title: "ZywOo insane AWP 4k holds B site", player: "ZywOo", playerImage: playerPhoto.zywoo, team: "Vitality", teamLogo: logo.vitality, event: "IEM Katowice 2026", map: "Inferno", type: "awp", date: "Today", views: 312000, likes: 28500, thumbnail: crowdArena, description: "ZywOo locked down banana with four consecutive AWP kills, denying FaZe's B execute completely." },
  { id: 3, title: "NiKo pistol round ace with USP-S", player: "NiKo", playerImage: playerPhoto.niko, team: "G2", teamLogo: logo.g2, event: "BLAST Premier 2026", map: "Dust II", type: "pistol", date: "Yesterday", views: 267000, likes: 22300, thumbnail: gamingKeyboard, description: "NiKo opened the half with a clean pistol ace, hitting all five headshots with the USP-S." },
  { id: 4, title: "m0NESY no-scope collateral through smoke", player: "m0NESY", playerImage: playerPhoto.m0nesy, team: "G2", teamLogo: logo.g2, event: "ESL Pro League S21", map: "Anubis", type: "awp", date: "Yesterday", views: 445000, likes: 38100, thumbnail: neonLights, description: "A blind no-scope through smoke that collateraled two players. The entire arena erupted." },
  { id: 5, title: "ropz 1v3 ninja defuse on Nuke", player: "ropz", playerImage: playerPhoto.ropz, team: "FaZe", teamLogo: logo.faze, event: "IEM Katowice 2026", map: "Nuke", type: "clutch", date: "Mar 2", views: 198000, likes: 15600, thumbnail: pcBuild, description: "ropz hid in secret, waited for all Ts to rotate away, and pulled off the ninja defuse to save the half." },
  { id: 6, title: "donk Deagle ace on eco round", player: "donk", playerImage: playerPhoto.donk, team: "Spirit", teamLogo: logo.spirit, event: "BLAST Premier 2026", map: "Ancient", type: "deagle", date: "Mar 2", views: 389000, likes: 31200, thumbnail: conferenceHall, description: "On a full eco, donk bought a Deagle and proceeded to one-tap the entire enemy team in 8 seconds." },
  { id: 7, title: "ZywOo wallbang triple through mid doors", player: "ZywOo", playerImage: playerPhoto.zywoo, team: "Vitality", teamLogo: logo.vitality, event: "ESL Pro League S21", map: "Dust II", type: "wallbang", date: "Mar 1", views: 276000, likes: 21800, thumbnail: gamingKeyboard, description: "ZywOo wallbanged three players through mid doors with the AWP in rapid succession." },
  { id: 8, title: "NiKo 1v2 clutch with 1 HP", player: "NiKo", playerImage: playerPhoto.niko, team: "G2", teamLogo: logo.g2, event: "IEM Katowice 2026", map: "Mirage", type: "clutch", date: "Mar 1", views: 334000, likes: 27500, thumbnail: crowdArena, description: "At 1 HP, NiKo hit two insane headshots to win the round and secure the map for G2." },
  { id: 9, title: "m0NESY jumping AWP shot on Ancient", player: "m0NESY", playerImage: playerPhoto.m0nesy, team: "G2", teamLogo: logo.g2, event: "BLAST Premier 2026", map: "Ancient", type: "awp", date: "Feb 28", views: 512000, likes: 42100, thumbnail: conferenceHall, description: "Reminiscent of the legendary coldzera play, m0NESY hit a jumping AWP shot at A Main." },
  { id: 10, title: "ropz spray transfer 4k on Inferno", player: "ropz", playerImage: playerPhoto.ropz, team: "FaZe", teamLogo: logo.faze, event: "ESL Pro League S21", map: "Inferno", type: "ace", date: "Feb 27", views: 178000, likes: 14200, thumbnail: esportsArena, description: "ropz pulled off a ridiculous spray transfer from banana to dark, killing four players in one spray." },
];

// -- Academy Guides --
export interface Guide {
  id: number;
  title: string;
  category: "economy" | "aim" | "movement" | "utility" | "communication" | "mindset";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  readTime: string;
  description: string;
  image: string;
  sections: { title: string; content: string }[];
}

export const academyGuides: Guide[] = [
  {
    id: 1, title: "CS2 Economy Guide — Buy, Save, Force", category: "economy", difficulty: "Beginner", readTime: "8 min", image: trophyCup,
    description: "Master the CS2 economy system to make smart buy decisions every round.",
    sections: [
      { title: "Round Loss Bonus", content: "After losing consecutive rounds, your team earns increasing loss bonuses: $1400, $1900, $2400, $2900, $3400. This resets when you win a round." },
      { title: "When to Full Buy", content: "Full buy when your team has $4000+ (rifles) or $4750+ (AWP). Ensure at least 3 players can buy full utility." },
      { title: "When to Eco", content: "Eco when your team can't afford rifles. Buy only pistols or nothing. Save for next round's full buy." },
      { title: "Force Buy", content: "Force buy on crucial rounds (match point, half-ending). SMGs, Deagles, or cheap rifles + limited utility." },
      { title: "Kill Rewards", content: "Different weapons give different kill rewards. Shotguns: $900, SMGs: $600, Rifles: $300, AWP: $100, Knife: $1500." },
    ],
  },
  {
    id: 2, title: "Aim Training Routine — From Silver to Global", category: "aim", difficulty: "Beginner", readTime: "12 min", image: gamingSetup,
    description: "A structured daily aim training routine to improve your mechanics.",
    sections: [
      { title: "Warmup (10 min)", content: "Start with Aim Botz or a similar workshop map. Focus on flicking between bots at medium distance. 500 kills minimum." },
      { title: "Tracking (5 min)", content: "Use a strafing bot map. Track moving targets smoothly without over-aiming. Focus on crosshair placement." },
      { title: "Spray Control (10 min)", content: "Practice spray patterns for AK-47 and M4A4 against a wall. Then apply against bots. Master first 10 bullets first." },
      { title: "Flick Shots (5 min)", content: "Use Aim Lab or Kovaak's for flick training. Focus on accuracy over speed initially." },
      { title: "Deathmatch (15 min)", content: "Join a community FFA DM server. Focus on crosshair placement at head level. Don't chase kills." },
    ],
  },
  {
    id: 3, title: "Movement Mechanics — Counter-strafing & Peeking", category: "movement", difficulty: "Intermediate", readTime: "10 min", image: gamingKeyboard,
    description: "Learn the movement mechanics that separate good players from great ones.",
    sections: [
      { title: "Counter-strafing", content: "Press the opposite direction key before shooting. A→D or D→A. This stops your momentum instantly for accurate shots." },
      { title: "Jiggle Peeking", content: "Tap A or D to quickly peek and unpee. Used to bait out AWP shots or gather info without committing." },
      { title: "Wide Swinging", content: "Sprint past an angle with W+A or W+D. Forces opponents to flick. Best against AWPs or holding angles." },
      { title: "Shoulder Peeking", content: "Expose only your shoulder to bait a shot. Immediately pull back. Perfect for info gathering." },
      { title: "Bunny Hopping", content: "Time your jumps on landing while air-strafing. Difficult in CS2 but can give speed advantages in specific spots." },
    ],
  },
  {
    id: 4, title: "Crosshair Settings — Find Your Perfect Setup", category: "aim", difficulty: "Beginner", readTime: "6 min", image: gamingMonitor,
    description: "Explore crosshair styles used by pros and find what works for you.",
    sections: [
      { title: "Static vs Dynamic", content: "Static crosshairs don't move when you shoot — preferred by most pros. Dynamic crosshairs expand to show inaccuracy." },
      { title: "Size & Gap", content: "Small crosshairs (size 2-3, gap -2 to 0) are most popular. They're precise without covering enemies at range." },
      { title: "Color Choices", content: "Green (#00FF00) and cyan (#00FFFF) are most popular. They contrast well with most map textures." },
      { title: "Pro Settings", content: "donk: size 2, gap -1, thickness 0, green. s1mple: size 3, gap -1, thickness 1, cyan. NiKo: size 1, gap -3, thickness 0, green." },
      { title: "Dot Crosshair", content: "Some players use a single dot. Pros: extremely precise. Cons: hard to track during movement. Try cl_crosshairsize 0 with dot enabled." },
    ],
  },
  {
    id: 5, title: "Advanced Utility Usage — Win Rounds With Nades", category: "utility", difficulty: "Advanced", readTime: "15 min", image: esportStage,
    description: "Learn how pro teams use coordinated utility to execute and retake sites.",
    sections: [
      { title: "Smoke Principles", content: "Always smoke before you need it. One-way smokes give massive advantages. Coordinate smokes with teammates for site executes." },
      { title: "Flash Coordination", content: "Pop flashes (thrown so they pop immediately on the enemy's screen) are key. Call out your flashes so teammates can peek." },
      { title: "Molotov Timing", content: "Molotovs deny positions for 7 seconds. Use them to clear common holds, delay pushes, or force enemies into open positions." },
      { title: "HE Nade Stacks", content: "Coordinate HE grenades with teammates. Two HEs at the same spot can deal 100+ damage, getting kills through walls." },
      { title: "Fake Executes", content: "Throw execute utility at one site, then rotate. Forces CT rotations. The key is selling the fake with proper utility count." },
    ],
  },
  {
    id: 6, title: "Communication & Callouts Guide", category: "communication", difficulty: "Beginner", readTime: "7 min", image: teamPhoto,
    description: "Effective communication wins more rounds than raw aim. Learn how to call.",
    sections: [
      { title: "Essential Callouts", content: "Always call: enemy position, number of enemies, weapon type, and HP if known. 'Two B tunnels, one AWP' is better than 'they're B'." },
      { title: "Death Calls", content: "When you die, give a quick call then stay quiet. Don't clutter comms. 'Died to AWP mid, one player' is enough." },
      { title: "Economy Calls", content: "IGL should call team economy decisions. 'Full buy', 'eco', or 'force' at round start. Discuss before freeze time ends." },
      { title: "Mid-round Calls", content: "Only the IGL should make mid-round calls. Others provide info. Avoid conflicting calls or backseat gaming." },
      { title: "Positive Comms", content: "Stay positive even when losing. 'Nice try', 'we got this next round' keeps morale up. Toxicity loses games." },
    ],
  },
  {
    id: 7, title: "Mental Game — Dealing With Tilt and Pressure", category: "mindset", difficulty: "Intermediate", readTime: "9 min", image: gamingChair,
    description: "The mental aspect of competitive CS is often overlooked but critical.",
    sections: [
      { title: "Recognizing Tilt", content: "Signs: rushing without thinking, overaggression, blaming teammates, checking stats mid-game. If you notice these, take a breath." },
      { title: "Reset Between Rounds", content: "Take a deep breath during freeze time. Remind yourself of the game plan. Don't dwell on the last round." },
      { title: "Dealing With Loss Streaks", content: "After 3 losses in a row, take a 15-30 minute break. Play aim trainers or watch demos. Don't queue while tilted." },
      { title: "Clutch Mentality", content: "In clutch situations: slow down, think about info you have, play time, use utility wisely. Panic is the enemy." },
      { title: "Pre-game Routine", content: "Warm up for 15-20 minutes before ranked. Set up your environment: water, comfy position, minimal distractions." },
    ],
  },
];

// -- Player of the Week --
export const playerOfTheWeek: PlayerHighlight = {
  player: topPlayers[0],
  event: "IEM Katowice 2026",
  maps: 12,
  kills: 312,
  deaths: 187,
  title: "Player of the Week",
};

// -- Round Highlight --
export const roundHighlight: RoundHighlight = {
  id: 1,
  title: "donk 1v4 clutch on Mirage",
  event: "IEM Katowice 2026 — Semifinal",
  team1: teams[4],
  team2: teams[0],
  round: 28,
  player: "donk",
  description: "In a crucial semifinal round, donk single-handedly dismantled NAVI's defense with an incredible 1v4 clutch that turned the entire series around. Armed with only an AK-47 and a dream, he systematically eliminated each opponent in a masterclass of positioning and aim.",
  thumbnail: esportsArena,
  youtubeId: "dQw4w9WgXcQ",
};
