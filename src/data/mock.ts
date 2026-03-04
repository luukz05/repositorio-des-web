export interface Team {
  name: string;
  color: string;
  abbr: string;
  logo?: string;
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
  rating: number;
  kd: string;
  adr: number;
  kast: string;
  initial: string;
  color: string;
  image: string;
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

// -- Images (Unsplash) --
const img = (id: string, w = 800, h = 450) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

const esportsArena = img("photo-1542751371-adc38448a05e");
const gamingSetup = img("photo-1593305841991-05c297ba4575");
const crowdArena = img("photo-1540039155733-5bb30b53aa14");
const gamingKeyboard = img("photo-1616588589676-62b3d4ff6e04");
const esportStage = img("photo-1511882150382-421056c89033");
const trophyCup = img("photo-1567521464027-f127ff144326");
const gamingMonitor = img("photo-1600861194942-f883de0dfe96");
const teamPhoto = img("photo-1552820728-8b83bb6b2b28");
const conferenceHall = img("photo-1540575467063-178a50c2df87");
const gamingChair = img("photo-1598550476439-6847785fcea6");
const neonLights = img("photo-1550745165-9bc0b252726f");
const controller = img("photo-1612287230202-1ff1d85d1bdf");
const pcBuild = img("photo-1587202372775-e229f172b9d7");
const headphones = img("photo-1618366712010-f4ae9c647dcb");
const stadium = img("photo-1459749411175-04bf5292ceea");
const fireworks = img("photo-1533174072545-7a4b6ad7a6c3");

const playerImg = (seed: number) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=player${seed}&backgroundColor=1a2332`;

// -- Teams --
export const teams: Team[] = [
  { name: "Natus Vincere", color: "#fbbf24", abbr: "NAVI" },
  { name: "Vitality", color: "#f87171", abbr: "VIT" },
  { name: "FaZe Clan", color: "#60a5fa", abbr: "FaZe" },
  { name: "G2 Esports", color: "#c084fc", abbr: "G2" },
  { name: "Team Spirit", color: "#34d399", abbr: "Spirit" },
  { name: "Team Liquid", color: "#38bdf8", abbr: "TL" },
  { name: "MOUZ", color: "#2dd4bf", abbr: "MOUZ" },
  { name: "Heroic", color: "#f472b6", abbr: "Heroic" },
  { name: "FURIA", color: "#fbbf24", abbr: "FURIA" },
  { name: "Astralis", color: "#fb923c", abbr: "Astralis" },
  { name: "Cloud9", color: "#94a3b8", abbr: "C9" },
  { name: "Complexity", color: "#60a5fa", abbr: "COL" },
  { name: "paiN Gaming", color: "#4ade80", abbr: "paiN" },
  { name: "Falcons", color: "#a78bfa", abbr: "Falcons" },
  { name: "Imperial", color: "#f59e0b", abbr: "IMP" },
  { name: "9z Team", color: "#e879f9", abbr: "9z" },
];

const t = (i: number) => teams[i];

// -- Live Matches --
export const liveMatches: Match[] = [
  {
    id: 1,
    team1: t(0), team2: t(2),
    score1: 13, score2: 11,
    event: "IEM Katowice 2026", format: "BO3", map: "Mirage", status: "live",
  },
  {
    id: 2,
    team1: t(1), team2: t(4),
    score1: 16, score2: 9,
    event: "IEM Katowice 2026", format: "BO3", map: "Inferno", status: "live",
  },
  {
    id: 3,
    team1: t(3), team2: t(5),
    score1: 7, score2: 10,
    event: "BLAST Premier", format: "BO1", map: "Anubis", status: "live",
  },
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
  {
    id: 1,
    title: "IEM Katowice 2026 Grand Finals: NAVI vs FaZe in an epic rematch for the title",
    description: "After an incredible run through the lower bracket, FaZe Clan faces NAVI in a best-of-five grand final that promises to be one of the most exciting matches of the year.",
    author: "HLTV Staff", time: "15 min ago", comments: 234,
    tags: ["Major", "Hot"], image: esportsArena, featured: true,
  },
  {
    id: 2,
    title: "s1mple officially returns to competitive CS2 for upcoming Major cycle",
    description: "After a brief hiatus, the GOAT returns to the active roster of NAVI. Fans and analysts alike are excited about the prospect.",
    author: "Striker", time: "1h ago", comments: 891,
    tags: ["Roster Move"], image: gamingSetup,
  },
  {
    id: 3,
    title: "Valve announces new map pool changes for CS2 competitive season",
    description: "The latest update brings Tuscan into the active duty map pool while removing Vertigo, shaking up the competitive meta.",
    author: "HLTV Staff", time: "2h ago", comments: 456,
    tags: ["Update"], image: gamingKeyboard,
  },
  {
    id: 4,
    title: "Top 20 players of 2025: The final list revealed with surprising entries",
    description: "donk takes the crown as the best player of 2025, becoming the youngest ever to claim the number one spot.",
    author: "Nomad", time: "3h ago", comments: 1200,
    tags: ["Awards"], image: trophyCup,
  },
  {
    id: 5,
    title: "BLAST Premier Spring Groups 2026: Schedule, format, and teams confirmed",
    author: "HLTV Staff", time: "5h ago", comments: 189,
    tags: ["Event"], image: crowdArena,
  },
  {
    id: 6,
    title: "Workshop creators highlight the best community skins of March 2026",
    author: "HLTV Staff", time: "6h ago", comments: 342,
    tags: ["Community"], image: neonLights,
  },
  {
    id: 7,
    title: "G2 Esports announce new performance facility in Berlin",
    author: "Striker", time: "8h ago", comments: 156,
    tags: ["Org News"], image: gamingChair,
  },
  {
    id: 8,
    title: "ESL Pro League Season 21: Groups and opening matchups revealed",
    description: "The group draw is complete and the stage is set for one of the most stacked ESL Pro League seasons in history.",
    author: "HLTV Staff", time: "10h ago", comments: 278,
    tags: ["Event"], image: conferenceHall,
  },
  {
    id: 9,
    title: "Heroic complete roster with signing of rising Danish talent",
    author: "Nomad", time: "12h ago", comments: 445,
    tags: ["Roster Move"], image: teamPhoto,
  },
  {
    id: 10,
    title: "New anti-cheat measures coming to CS2 matchmaking next month",
    author: "HLTV Staff", time: "14h ago", comments: 1890,
    tags: ["Update"], image: pcBuild,
  },
  {
    id: 11,
    title: "FURIA sign promising Brazilian AWPer from Academy roster",
    author: "Striker", time: "16h ago", comments: 367,
    tags: ["Roster Move"], image: headphones,
  },
  {
    id: 12,
    title: "IEM Chengdu 2026 tickets go on sale next week with limited early bird pricing",
    author: "HLTV Staff", time: "18h ago", comments: 98,
    tags: ["Event"], image: stadium,
  },
];

// -- Rankings --
export const ranking: RankedTeam[] = [
  { rank: 1, name: "Natus Vincere", color: "#fbbf24", points: 1000, change: "same", region: "Europe" },
  { rank: 2, name: "G2 Esports", color: "#c084fc", points: 892, change: "up", changeVal: 1, region: "Europe" },
  { rank: 3, name: "Vitality", color: "#f87171", points: 845, change: "down", changeVal: 1, region: "Europe" },
  { rank: 4, name: "MOUZ", color: "#2dd4bf", points: 756, change: "same", region: "Europe" },
  { rank: 5, name: "FaZe Clan", color: "#60a5fa", points: 723, change: "up", changeVal: 2, region: "Europe" },
  { rank: 6, name: "Team Spirit", color: "#34d399", points: 698, change: "down", changeVal: 1, region: "Europe" },
  { rank: 7, name: "Team Liquid", color: "#38bdf8", points: 654, change: "up", changeVal: 1, region: "Americas" },
  { rank: 8, name: "Heroic", color: "#f472b6", points: 612, change: "same", region: "Europe" },
  { rank: 9, name: "FURIA", color: "#fbbf24", points: 589, change: "up", changeVal: 3, region: "Americas" },
  { rank: 10, name: "Astralis", color: "#fb923c", points: 567, change: "down", changeVal: 2, region: "Europe" },
  { rank: 11, name: "Cloud9", color: "#94a3b8", points: 534, change: "down", changeVal: 1, region: "Americas" },
  { rank: 12, name: "Complexity", color: "#60a5fa", points: 501, change: "up", changeVal: 2, region: "Americas" },
  { rank: 13, name: "Falcons", color: "#a78bfa", points: 478, change: "same", region: "Europe" },
  { rank: 14, name: "paiN Gaming", color: "#4ade80", points: 445, change: "up", changeVal: 1, region: "Americas" },
  { rank: 15, name: "Imperial", color: "#f59e0b", points: 412, change: "down", changeVal: 3, region: "Americas" },
  { rank: 16, name: "9z Team", color: "#e879f9", points: 389, change: "same", region: "Americas" },
  { rank: 17, name: "TheMongolz", color: "#f97316", points: 367, change: "up", changeVal: 4, region: "Asia" },
  { rank: 18, name: "Virtus.pro", color: "#fb923c", points: 345, change: "down", changeVal: 1, region: "Europe" },
  { rank: 19, name: "GamerLegion", color: "#a3e635", points: 323, change: "up", changeVal: 2, region: "Europe" },
  { rank: 20, name: "SAW", color: "#67e8f9", points: 301, change: "same", region: "Europe" },
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
  { rank: 1, name: "donk", realName: "Danil Kryshkovets", team: "Spirit", country: "RU", rating: 1.36, kd: "1.42", adr: 94.2, kast: "78.5%", initial: "d", color: "#34d399", image: playerImg(1) },
  { rank: 2, name: "ZywOo", realName: "Mathieu Herbaut", team: "Vitality", country: "FR", rating: 1.31, kd: "1.35", adr: 88.7, kast: "75.2%", initial: "Z", color: "#60a5fa", image: playerImg(2) },
  { rank: 3, name: "NiKo", realName: "Nikola Kovač", team: "G2", country: "BA", rating: 1.27, kd: "1.30", adr: 85.4, kast: "73.8%", initial: "N", color: "#c084fc", image: playerImg(3) },
  { rank: 4, name: "m0NESY", realName: "Ilya Osipov", team: "G2", country: "RU", rating: 1.25, kd: "1.28", adr: 82.1, kast: "72.4%", initial: "m", color: "#f87171", image: playerImg(4) },
  { rank: 5, name: "ropz", realName: "Robin Kool", team: "FaZe", country: "EE", rating: 1.21, kd: "1.24", adr: 79.8, kast: "74.1%", initial: "r", color: "#fbbf24", image: playerImg(5) },
  { rank: 6, name: "b1t", realName: "Valeriy Vakhovskiy", team: "NAVI", country: "UA", rating: 1.19, kd: "1.22", adr: 78.3, kast: "71.6%", initial: "b", color: "#fbbf24", image: playerImg(6) },
  { rank: 7, name: "jL", realName: "Justin Wills", team: "NAVI", country: "LV", rating: 1.18, kd: "1.20", adr: 76.9, kast: "70.8%", initial: "j", color: "#fbbf24", image: playerImg(7) },
  { rank: 8, name: "Spinx", realName: "Lotan Giladi", team: "Vitality", country: "IL", rating: 1.16, kd: "1.18", adr: 75.4, kast: "72.0%", initial: "S", color: "#f87171", image: playerImg(8) },
  { rank: 9, name: "frozen", realName: "David Čerňanský", team: "MOUZ", country: "SK", rating: 1.15, kd: "1.17", adr: 74.1, kast: "69.5%", initial: "f", color: "#2dd4bf", image: playerImg(9) },
  { rank: 10, name: "huNter-", realName: "Nemanja Kovač", team: "G2", country: "BA", rating: 1.14, kd: "1.16", adr: 73.8, kast: "71.2%", initial: "h", color: "#c084fc", image: playerImg(10) },
  { rank: 11, name: "broky", realName: "Helvijs Saukants", team: "FaZe", country: "LV", rating: 1.13, kd: "1.15", adr: 72.5, kast: "68.9%", initial: "b", color: "#60a5fa", image: playerImg(11) },
  { rank: 12, name: "rain", realName: "Håvard Nygaard", team: "FaZe", country: "NO", rating: 1.11, kd: "1.13", adr: 71.2, kast: "70.3%", initial: "r", color: "#60a5fa", image: playerImg(12) },
  { rank: 13, name: "sh1ro", realName: "Dmitry Sokolov", team: "Spirit", country: "RU", rating: 1.10, kd: "1.12", adr: 70.8, kast: "67.5%", initial: "s", color: "#34d399", image: playerImg(13) },
  { rank: 14, name: "yuurih", realName: "Yuri Santos", team: "FURIA", country: "BR", rating: 1.09, kd: "1.11", adr: 69.4, kast: "69.0%", initial: "y", color: "#fbbf24", image: playerImg(14) },
  { rank: 15, name: "KSCERATO", realName: "Kaike Cerato", team: "FURIA", country: "BR", rating: 1.08, kd: "1.10", adr: 68.1, kast: "71.8%", initial: "K", color: "#fbbf24", image: playerImg(15) },
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
