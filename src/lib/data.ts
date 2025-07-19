import { Project, SocialLink, StreamSchedule, BlogPost } from '@/types';

export const streamerInfo = {
  name: "Aaron",
  username: "aaron_streams",
  tagline: "Welcome to my streaming universe!",
  bio: "Passionate gamer and content creator streaming variety games, competitive matches, and community events. Join me for epic gaming sessions and great vibes!",
  avatar: "/images/avatar.jpg",
  banner: "/images/banner.jpg",
  location: "Gaming Setup, USA",
  yearsStreaming: 3,
  totalFollowers: 15000,
  totalViews: 250000,
  favoritePlatforms: ["PC", "PlayStation", "Nintendo Switch"],
  favoriteGenres: ["FPS", "RPG", "Indie", "Horror"],
  currentGame: "Valorant",
  streamingDays: ["Monday", "Wednesday", "Friday", "Saturday"],
  streamingTime: "7:00 PM - 11:00 PM EST"
};

export const socialLinks: SocialLink[] = [
  {
    platform: "Twitch",
    url: "https://twitch.tv/aaron_streams",
    icon: "twitch",
    color: "#9146FF"
  },
  {
    platform: "YouTube",
    url: "https://youtube.com/@aaron_streams",
    icon: "youtube",
    color: "#FF0000"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/aaron_streams",
    icon: "twitter",
    color: "#1DA1F2"
  },
  {
    platform: "Discord",
    url: "https://discord.gg/aaron_streams",
    icon: "discord",
    color: "#5865F2"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/aaron_streams",
    icon: "instagram",
    color: "#E4405F"
  },
  {
    platform: "TikTok",
    url: "https://tiktok.com/@aaron_streams",
    icon: "tiktok",
    color: "#000000"
  }
];

export const streamSchedule: StreamSchedule[] = [
  {
    day: "Monday",
    time: "7:00 PM - 11:00 PM EST",
    game: "Valorant Ranked",
    description: "Competitive gameplay and rank climbing"
  },
  {
    day: "Wednesday",
    time: "7:00 PM - 11:00 PM EST",
    game: "Variety Games",
    description: "Exploring new indie titles and viewer suggestions"
  },
  {
    day: "Friday",
    time: "7:00 PM - 12:00 AM EST",
    game: "Horror Night",
    description: "Scary games and jump scares with chat"
  },
  {
    day: "Saturday",
    time: "3:00 PM - 8:00 PM EST",
    game: "Community Games",
    description: "Playing with viewers and subscribers"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "24-Hour Charity Stream",
    description: "Raised $5,000 for local animal shelter during a 24-hour streaming marathon featuring community challenges and special guests.",
    image: "/images/charity-stream.jpg",
    date: "2024-06-15",
    tags: ["Charity", "Community", "Marathon"],
    link: "https://youtube.com/watch?v=charity-stream",
    featured: true
  },
  {
    id: "2",
    title: "Monthly Tournament Series",
    description: "Organized and hosted monthly Valorant tournaments for the community with cash prizes and custom trophies.",
    image: "/images/tournament.jpg",
    date: "2024-05-01",
    tags: ["Tournament", "Valorant", "Community"],
    link: "https://discord.gg/tournament",
    featured: true
  },
  {
    id: "3",
    title: "Indie Game Showcase",
    description: "Weekly series featuring upcoming indie games, providing feedback to developers and showcasing hidden gems.",
    image: "/images/indie-showcase.jpg",
    date: "2024-04-20",
    tags: ["Indie", "Reviews", "Game Dev"],
    link: "https://youtube.com/playlist?list=indie-showcase",
    featured: false
  },
  {
    id: "4",
    title: "Viewer Game Night",
    description: "Monthly multiplayer sessions where viewers can join and play various party games together.",
    image: "/images/game-night.jpg",
    date: "2024-03-30",
    tags: ["Multiplayer", "Community", "Party Games"],
    featured: false
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "My Journey to Affiliate: Lessons Learned",
    excerpt: "Reflecting on the path to Twitch Affiliate and the key strategies that helped me grow my community.",
    content: "Full blog post content would go here...",
    author: "Aaron",
    date: "2024-06-20",
    tags: ["Streaming", "Growth", "Tips"],
    featured_image: "/images/blog-affiliate.jpg",
    slug: "journey-to-affiliate-lessons-learned"
  },
  {
    id: "2",
    title: "Building a Positive Community",
    excerpt: "How I foster a welcoming and inclusive environment for all viewers in my streams.",
    content: "Full blog post content would go here...",
    author: "Aaron",
    date: "2024-06-10",
    tags: ["Community", "Moderation", "Streaming"],
    featured_image: "/images/blog-community.jpg",
    slug: "building-positive-community"
  },
  {
    id: "3",
    title: "My Streaming Setup Tour 2024",
    excerpt: "A detailed breakdown of my current streaming setup, including hardware, software, and room layout.",
    content: "Full blog post content would go here...",
    author: "Aaron",
    date: "2024-05-25",
    tags: ["Setup", "Hardware", "Tech"],
    featured_image: "/images/blog-setup.jpg",
    slug: "streaming-setup-tour-2024"
  }
];

export const galleryImages = [
  {
    id: "1",
    url: "/images/gallery/highlight-1.jpg",
    title: "Epic Valorant Ace",
    description: "My first ace clutch in ranked play",
    category: "gameplay"
  },
  {
    id: "2",
    url: "/images/gallery/community-1.jpg",
    title: "Community Game Night",
    description: "Amazing turnout for our monthly game night",
    category: "community"
  },
  {
    id: "3",
    url: "/images/gallery/setup-1.jpg",
    title: "New Setup Reveal",
    description: "Fresh new streaming setup with RGB lighting",
    category: "setup"
  },
  {
    id: "4",
    url: "/images/gallery/fanart-1.jpg",
    title: "Fan Art from @viewer123",
    description: "Incredible artwork created by our amazing community",
    category: "fanart"
  },
  {
    id: "5",
    url: "/images/gallery/event-1.jpg",
    title: "Charity Stream Success",
    description: "Celebrating our $5K charity stream milestone",
    category: "events"
  },
  {
    id: "6",
    url: "/images/gallery/collab-1.jpg",
    title: "Collaboration Stream",
    description: "Playing with other streamers in our community",
    category: "collaboration"
  }
];

export const achievements = [
  {
    title: "Twitch Affiliate",
    description: "Achieved affiliate status within 6 months",
    icon: "trophy",
    date: "2024-01-15"
  },
  {
    title: "10K Followers",
    description: "Reached 10,000 followers milestone",
    icon: "users",
    date: "2024-03-20"
  },
  {
    title: "Charity Champion",
    description: "Raised over $10K for various charities",
    icon: "heart",
    date: "2024-06-15"
  },
  {
    title: "Community Builder",
    description: "Built an active Discord community of 5K+ members",
    icon: "message-circle",
    date: "2024-05-10"
  }
];
