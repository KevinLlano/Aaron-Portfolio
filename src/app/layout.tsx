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
  title: "Aaron - Twitch Streamer Portfolio",
  description: "Welcome to Aaron's streaming universe! Passionate gamer and content creator streaming variety games, competitive matches, and community events.",
  keywords: ["twitch", "streamer", "gaming", "content creator", "portfolio"],
  authors: [{ name: "Aaron" }],
  creator: "Aaron",
  openGraph: {
    title: "Aaron - Twitch Streamer Portfolio",
    description: "Welcome to Aaron's streaming universe! Passionate gamer and content creator streaming variety games, competitive matches, and community events.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron - Twitch Streamer Portfolio",
    description: "Welcome to Aaron's streaming universe! Passionate gamer and content creator streaming variety games, competitive matches, and community events.",
    creator: "@aaron_streams",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
