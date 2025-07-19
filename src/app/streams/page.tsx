'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { Play, Eye, Clock, ExternalLink, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { streamSchedule, streamerInfo } from '@/lib/data';
import { formatViewCount } from '@/lib/utils';

export default function Streams() {
  const [isLive, setIsLive] = useState(false);
  const [currentStream, setCurrentStream] = useState<any>(null);
  const [recentStreams, setRecentStreams] = useState<any[]>([]);

  useEffect(() => {
    // Simulate API call to check live status
    const checkLiveStatus = () => {
      const isCurrentlyLive = Math.random() > 0.5;
      setIsLive(isCurrentlyLive);
      
      if (isCurrentlyLive) {
        setCurrentStream({
          title: "Ranked Valorant Climb - Road to Radiant!",
          game: "Valorant",
          viewers: Math.floor(Math.random() * 1000) + 100,
          duration: "2h 45m",
          thumbnail: "/images/stream-thumbnail.jpg"
        });
      }
    };

    // Simulate recent streams
    setRecentStreams([
      {
        id: "1",
        title: "Horror Night - Phasmophobia with Friends",
        game: "Phasmophobia",
        date: "2024-06-20",
        duration: "3h 20m",
        views: 1500,
        thumbnail: "/images/stream-1.jpg"
      },
      {
        id: "2",
        title: "Valorant Ranked Grind - Diamond Push",
        game: "Valorant",
        date: "2024-06-18",
        duration: "4h 15m",
        views: 2300,
        thumbnail: "/images/stream-2.jpg"
      },
      {
        id: "3",
        title: "Indie Game Showcase - Hidden Gems",
        game: "Various Indie Games",
        date: "2024-06-15",
        duration: "2h 50m",
        views: 890,
        thumbnail: "/images/stream-3.jpg"
      },
      {
        id: "4",
        title: "Community Game Night - Among Us",
        game: "Among Us",
        date: "2024-06-12",
        duration: "3h 10m",
        views: 1800,
        thumbnail: "/images/stream-4.jpg"
      }
    ]);

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              Live Streams
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join me live for epic gaming sessions, community events, and great vibes!
            </p>
          </motion.div>
        </div>

        {/* Live Stream Section */}
        {isLive && currentStream && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                  <span className="text-xl font-bold">LIVE NOW</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{formatViewCount(currentStream.viewers)} viewers</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{currentStream.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-xl font-semibold">Live Stream</p>
                    <p className="text-sm text-gray-300">Click to watch on Twitch</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {currentStream.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <span>Playing:</span>
                      <span className="font-semibold text-purple-600">{currentStream.game}</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://twitch.tv/${streamerInfo.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Watch on Twitch</span>
                  </a>
                  <button className="flex items-center justify-center space-x-2 bg-muted hover:bg-muted/80 text-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                    <span>Join Chat</span>
                  </button>
                </div>

                <div className="bg-card p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Stream Stats</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Viewers</span>
                      <p className="font-semibold text-foreground">{formatViewCount(currentStream.viewers)}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration</span>
                      <p className="font-semibold text-foreground">{currentStream.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Offline Message */}
        {!isLive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4">Stream Offline</h2>
              <p className="text-muted-foreground mb-6">
                I'm not streaming right now, but check out my recent streams below or follow me on Twitch to get notified when I go live!
              </p>
              <a
                href={`https://twitch.tv/${streamerInfo.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Follow on Twitch</span>
              </a>
            </div>
          </motion.div>
        )}

        {/* Schedule Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Stream Schedule</h2>
            <p className="text-muted-foreground">
              Here's when you can catch me live! All times are in EST.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {streamSchedule.map((schedule, index) => (
              <motion.div
                key={schedule.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{schedule.day}</h3>
                  <div className="flex items-center space-x-1 text-purple-600">
                    <Clock className="h-4 w-4" />
                    <span className="font-semibold">{schedule.time}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Play className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold text-foreground">{schedule.game}</span>
                  </div>
                  {schedule.description && (
                    <p className="text-muted-foreground text-sm">{schedule.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Streams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent Streams</h2>
            <p className="text-muted-foreground">
              Check out highlights from my recent streaming sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentStreams.map((stream, index) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{stream.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{stream.game}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(stream.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span>{formatViewCount(stream.views)} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{stream.duration}</span>
                      </div>
                    </div>
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Watch VOD
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
