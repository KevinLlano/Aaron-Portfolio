import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maddwrath.vercel.app'),
  title: "MaddWrath | Twitch Streamer, Gaming Content Creator & Community Leader",
  description:
    "Watch MaddWrath live on Twitch! Explore epic gameplay, community events, Old School Runescape, RPGs, FPS, and more. Join a positive, interactive gaming community and never miss a stream or highlight.",
  keywords: [
    "twitch streamer", "maddwrath", "live gaming streams", "gaming content creator", "community gaming events", "old school runescape", "osrs", "rpg streamer", "fps streamer", "variety streamer", "gaming portfolio", "stream schedule", "discord community", "youtube highlights", "gaming collaborations", "interactive streams", "gaming charity events", "streamer portfolio", "gaming blog", "mmo streamer", "gaming reviews"
  ],
  authors: [{ name: "MaddWrath" }],
  creator: "MaddWrath",
  openGraph: {
    title: "MaddWrath | Twitch Streamer, Gaming Content Creator & Community Leader",
    description:
      "Watch MaddWrath live on Twitch! Explore epic gameplay, community events, Old School Runescape, RPGs, FPS, and more. Join a positive, interactive gaming community and never miss a stream or highlight.",
    type: "website",
    locale: "en_US",
    url: "https://maddwrath.com/",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "MaddWrath Twitch Streamer Portfolio Banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MaddWrath | Twitch Streamer, Gaming Content Creator & Community Leader",
    description:
      "Watch MaddWrath live on Twitch! Explore epic gameplay, community events, Old School Runescape, RPGs, FPS, and more. Join a positive, interactive gaming community and never miss a stream or highlight.",
    creator: "@maddwrath",
    images: ["/images/banner.jpg"],
    site: "https://maddwrath.com/"
  },
  alternates: {
    canonical: "https://maddwrath.com/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="google494bb948bd5caabb.html" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
