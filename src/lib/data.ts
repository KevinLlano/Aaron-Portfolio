import { Project, SocialLink, StreamSchedule } from '@/types';

export const streamerInfo = {
  name: "MaddWrath",
  username: "maddwrath",
  tagline: "Welcome to the realm of MaddWrath!",
  bio: "Gaming enthusiast and content creator bringing you epic gameplay, exciting moments, and a community built on great vibes. Join the madness!",
  avatar: "/profilepic.png",
  banner: "/images/banner.jpg",
  location: "Gaming Setup",
  yearsStreaming: 5,
  totalFollowers: 850,
  totalViews: 12500,
  favoritePlatforms: ["PC", "PlayStation", "Xbox"],
  favoriteGenres: ["MMOs", "Adventure", "FPS", "ARPG", "Indie"],
  currentGame: "Old School Runescape",
  streamingDays: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  streamingTime: "8:00 PM - 12:00 AM EST"
};

export const socialLinks: SocialLink[] = [
  {
    platform: "Twitch",
    url: "https://twitch.tv/maddwrath",
    icon: "twitch",
    color: "#9146FF"
  },
  {
    platform: "YouTube",
    url: "https://youtube.com/@maddwrath",
    icon: "youtube",
    color: "#FF0000"
  },
  {
    platform: "Discord",
    url: "https://discord.gg/A6Xddn4YEq",
    icon: "discord",
    color: "#5865F2"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/maddwrath",
    icon: "instagram",
    color: "#E4405F"
  },
  {
    platform: "TikTok",
    url: "https://tiktok.com/@maddwrath",
    icon: "tiktok",
    color: "#ec4899" 
  },
  {
    platform: "X",
    url: "https://twitter.com/maddwrath",
    icon: "x",
    color: "#22c55e" 
  }
];

export const streamSchedule: StreamSchedule[] = [
  
  {
    day: "Tuesday",
    time: "4:00 AM - 9:00 AM CDT",
    game: "Action Adventures",
    description: "Thrilling adventures"
  },
  {
    day: "Wednesday",
    time: "4:00 AM - 9:00 AM CDT",
    game: "Action Adventures",
    description: "Old School Runescape"
  },
  {
    day: "Thursday",
    time: "4:00 AM - 9:00 AM CDT",
    game: "FPS Games",
    description: "competitive gameplay"
  },
  {
    day: "Friday",
    time: "4:00 AM - 9:00 AM CDT",
    game: "Variety Night",
    description: "viewer suggestions"
  },
  {
    day: "Saturday",
    time: "4:00 AM - 9:00 AM CDT",
    game: "Variety Night",
    description: "Chat Interaction"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Epic Gaming Marathon",
    description: "12-hour gaming marathon featuring multiple games and raising funds for gaming accessibility charity.",
    image: "/images/gaming-marathon.jpg",
    date: "2024-06-15",
    tags: ["Marathon", "Charity", "Community"],
    link: "https://youtube.com/watch?v=gaming-marathon",
    featured: true
  },
  {
    id: "2",
    title: "MaddWrath Community Events",
    description: "Regular community events including game nights, tournaments, and special collaborations with other streamers.",
    image: "/images/community-events.jpg",
    date: "2024-05-01",
    tags: ["Community", "Events", "Collaboration"],
    link: "https://discord.gg/maddwrath-events",
    featured: true
  },
  {
    id: "3",
    title: "Game Review Series",
    description: "In-depth reviews and first impressions of new releases, helping viewers decide what games to play next.",
    image: "/images/game-reviews.jpg",
    date: "2024-04-20",
    tags: ["Reviews", "Gaming", "Content"],
    link: "https://youtube.com/playlist?list=maddwrath-reviews",
    featured: false
  },
  {
    id: "4",
    title: "Viewer Challenge Nights",
    description: "Interactive streams where viewers suggest challenges and game modes for entertaining gameplay sessions.",
    image: "/images/challenge-nights.jpg",
    date: "2024-03-30",
    tags: ["Interactive", "Challenges", "Entertainment"],
    featured: false
  }
];
