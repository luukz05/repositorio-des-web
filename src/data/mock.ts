export interface Team {
  name: string;
  color: string;
  abbr: string;
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
  hue: number;
  featured?: boolean;
}

export interface RankedTeam {
  rank: number;
  name: string;
  color: string;
  points: number;
  change: "up" | "down" | "same";
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
}

export interface Player {
  rank: number;
  name: string;
  team: string;
  rating: number;
  initial: string;
  color: string;
}

// -- Mock Data --

export const liveMatches: Match[] = [
  {
    id: 1,
    team1: { name: "NAVI", color: "#fbbf24", abbr: "Na" },
    team2: { name: "FaZe", color: "#60a5fa", abbr: "FZ" },
    score1: 13,
    score2: 11,
    event: "IEM Katowice 2026",
    format: "BO3",
    map: "Mirage",
    status: "live",
  },
  {
    id: 2,
    team1: { name: "Vitality", color: "#f87171", abbr: "VT" },
    team2: { name: "Spirit", color: "#34d399", abbr: "SP" },
    score1: 16,
    score2: 9,
    event: "IEM Katowice 2026",
    format: "BO3",
    map: "Inferno",
    status: "live",
  },
  {
    id: 3,
    team1: { name: "G2", color: "#c084fc", abbr: "G2" },
    team2: { name: "Liquid", color: "#38bdf8", abbr: "TL" },
    score1: 7,
    score2: 10,
    event: "BLAST Premier",
    format: "BO1",
    map: "Anubis",
    status: "live",
  },
];

export const upcomingMatches: Match[] = [
  {
    id: 4,
    team1: { name: "Heroic", color: "#f472b6", abbr: "HR" },
    team2: { name: "Astralis", color: "#fb923c", abbr: "AS" },
    event: "IEM Katowice 2026",
    format: "BO3",
    time: "18:00",
    status: "upcoming",
  },
  {
    id: 5,
    team1: { name: "MOUZ", color: "#2dd4bf", abbr: "MZ" },
    team2: { name: "Falcons", color: "#a78bfa", abbr: "FL" },
    event: "BLAST Premier",
    format: "BO3",
    time: "20:30",
    status: "upcoming",
  },
  {
    id: 6,
    team1: { name: "FURIA", color: "#fbbf24", abbr: "FU" },
    team2: { name: "Cloud9", color: "#94a3b8", abbr: "C9" },
    event: "ESL Pro League",
    format: "BO1",
    time: "22:00",
    status: "upcoming",
  },
];

export const recentResults: Match[] = [
  {
    id: 10,
    team1: { name: "Vitality", color: "#f87171", abbr: "VT" },
    team2: { name: "Spirit", color: "#34d399", abbr: "SP" },
    score1: 2,
    score2: 0,
    event: "IEM Katowice",
    format: "BO3",
    status: "finished",
  },
  {
    id: 11,
    team1: { name: "MOUZ", color: "#2dd4bf", abbr: "MZ" },
    team2: { name: "Heroic", color: "#f472b6", abbr: "HR" },
    score1: 1,
    score2: 2,
    event: "BLAST Premier",
    format: "BO3",
    status: "finished",
  },
  {
    id: 12,
    team1: { name: "FURIA", color: "#fbbf24", abbr: "FU" },
    team2: { name: "Cloud9", color: "#94a3b8", abbr: "C9" },
    score1: 16,
    score2: 12,
    event: "ESL Pro League",
    format: "BO1",
    status: "finished",
  },
  {
    id: 13,
    team1: { name: "Complexity", color: "#60a5fa", abbr: "CX" },
    team2: { name: "paiN", color: "#4ade80", abbr: "PN" },
    score1: 2,
    score2: 1,
    event: "ESL Pro League",
    format: "BO3",
    status: "finished",
  },
  {
    id: 14,
    team1: { name: "Astralis", color: "#fb923c", abbr: "AS" },
    team2: { name: "G2", color: "#c084fc", abbr: "G2" },
    score1: 0,
    score2: 2,
    event: "IEM Katowice",
    format: "BO3",
    status: "finished",
  },
];

export const news: NewsArticle[] = [
  {
    id: 1,
    title:
      "IEM Katowice 2026 Grand Finals: NAVI vs FaZe in an epic rematch for the title",
    description:
      "After an incredible run through the lower bracket, FaZe Clan faces NAVI in a best-of-five grand final that promises to be one of the most exciting matches of the year.",
    author: "HLTV Staff",
    time: "15 min ago",
    comments: 234,
    tags: ["Major", "Hot"],
    hue: 200,
    featured: true,
  },
  {
    id: 2,
    title: "s1mple hints at return to competitive CS2 after months of inactivity",
    author: "HLTV Staff",
    time: "1h ago",
    comments: 891,
    tags: ["Roster"],
    hue: 180,
  },
  {
    id: 3,
    title: "Valve announces new map pool changes for CS2 competitive season",
    author: "HLTV Staff",
    time: "2h ago",
    comments: 456,
    tags: ["Update"],
    hue: 160,
  },
  {
    id: 4,
    title:
      "Top 20 players of 2025: The final list revealed with surprising entries",
    author: "HLTV Staff",
    time: "3h ago",
    comments: 1200,
    tags: ["Awards"],
    hue: 30,
  },
  {
    id: 5,
    title:
      "BLAST Premier Spring Groups 2026: Schedule, format, and teams confirmed",
    author: "HLTV Staff",
    time: "5h ago",
    comments: 189,
    tags: ["Event"],
    hue: 220,
  },
];

export const ranking: RankedTeam[] = [
  { rank: 1, name: "NAVI", color: "#fbbf24", points: 987, change: "same" },
  { rank: 2, name: "Vitality", color: "#f87171", points: 891, change: "up" },
  { rank: 3, name: "FaZe", color: "#60a5fa", points: 845, change: "down" },
  { rank: 4, name: "G2", color: "#c084fc", points: 756, change: "up" },
  { rank: 5, name: "Spirit", color: "#34d399", points: 723, change: "same" },
  { rank: 6, name: "Liquid", color: "#38bdf8", points: 698, change: "up" },
  { rank: 7, name: "MOUZ", color: "#2dd4bf", points: 654, change: "down" },
  { rank: 8, name: "Heroic", color: "#f472b6", points: 612, change: "same" },
  { rank: 9, name: "FURIA", color: "#fbbf24", points: 589, change: "up" },
  { rank: 10, name: "Astralis", color: "#fb923c", points: 567, change: "down" },
];

export const events: Event[] = [
  {
    id: 1,
    name: "IEM Katowice 2026",
    tier: "S",
    dates: "Mar 10 – 23",
    prize: "$1,000,000",
    teams: 16,
    progress: 75,
    status: "Playoffs",
  },
  {
    id: 2,
    name: "BLAST Premier Spring",
    tier: "S",
    dates: "Mar 25 – Apr 6",
    prize: "$425,000",
    teams: 12,
    progress: 20,
    status: "Group Stage",
  },
  {
    id: 3,
    name: "ESL Pro League S21",
    tier: "A",
    dates: "Apr 14 – 20",
    prize: "$850,000",
    teams: 24,
    progress: 0,
    status: "Upcoming",
  },
];

export const topPlayers: Player[] = [
  { rank: 1, name: "donk", team: "Spirit", rating: 1.36, initial: "d", color: "#fbbf24" },
  { rank: 2, name: "ZywOo", team: "Vitality", rating: 1.31, initial: "Z", color: "#60a5fa" },
  { rank: 3, name: "NiKo", team: "G2", rating: 1.27, initial: "N", color: "#c084fc" },
  { rank: 4, name: "m0NESY", team: "G2", rating: 1.25, initial: "m", color: "#f87171" },
  { rank: 5, name: "ropz", team: "FaZe", rating: 1.21, initial: "r", color: "#34d399" },
];
