'use client';

import { Metadata } from 'next';
import { User, Calendar, MapPin, Heart, Trophy, Users, Clock, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { streamerInfo, achievements, streamSchedule } from '@/lib/data';
import { formatViewCount } from '@/lib/utils';

// export const metadata: Metadata = {
//   title: 'About - Aaron',
//   description: 'Learn more about Aaron\'s streaming journey, favorite games, and what makes the community special.',
// };

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-white">A</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              About {streamerInfo.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {streamerInfo.tagline}
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <User className="h-6 w-6 text-purple-600 mr-2" />
                <h2 className="text-2xl font-bold text-foreground">My Story</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {streamerInfo.bio}
                </p>
                <p>
                  I started streaming {streamerInfo.yearsStreaming} years ago with a simple goal: to share my passion for gaming 
                  and build a community where everyone feels welcome. What began as a hobby has grown into something 
                  amazing - a place where gamers from all walks of life come together to share laughs, epic moments, 
                  and genuine connections.
                </p>
                <p>
                  My favorite aspect of streaming isn't just the games themselves, but the incredible community that's 
                  formed around them. Whether we're tackling competitive matches in {streamerInfo.currentGame}, 
                  exploring new indie titles, or having late-night horror game sessions, every stream is an adventure 
                  we share together.
                </p>
                <p>
                  When I'm not streaming, you can find me exploring new games, working on community projects, 
                  or planning the next big event for our Discord server. I believe in giving back to the gaming 
                  community that has given me so much.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Quick Stats */}
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Followers</span>
                  <span className="font-semibold text-foreground">{formatViewCount(streamerInfo.totalFollowers)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Views</span>
                  <span className="font-semibold text-foreground">{formatViewCount(streamerInfo.totalViews)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Years Streaming</span>
                  <span className="font-semibold text-foreground">{streamerInfo.yearsStreaming}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-semibold text-foreground">{streamerInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Gaming Info */}
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">Gaming</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-2">
                    <Gamepad2 className="h-4 w-4 text-purple-600 mr-2" />
                    <span className="text-sm text-muted-foreground">Current Game</span>
                  </div>
                  <p className="font-semibold text-foreground">{streamerInfo.currentGame}</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-muted-foreground">Favorite Genres</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {streamerInfo.favoriteGenres.map((genre) => (
                      <span
                        key={genre}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-muted-foreground">Platforms</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {streamerInfo.favoritePlatforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Info */}
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="text-lg font-bold text-foreground">Stream Schedule</h3>
              </div>
              <div className="space-y-2">
                {streamerInfo.streamingDays.map((day) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="text-sm font-medium text-purple-600">{streamerInfo.streamingTime}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Achievements</h2>
            <p className="text-muted-foreground">
              Milestones and moments that define my streaming journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {achievement.icon === 'trophy' && <Trophy className="h-6 w-6 text-purple-600" />}
                  {achievement.icon === 'users' && <Users className="h-6 w-6 text-purple-600" />}
                  {achievement.icon === 'heart' && <Heart className="h-6 w-6 text-purple-600" />}
                  {achievement.icon === 'message-circle' && <Users className="h-6 w-6 text-purple-600" />}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                <div className="flex items-center justify-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(achievement.date).toLocaleDateString()}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Community Values</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our community is built on respect, inclusivity, and shared passion for gaming. 
            Everyone is welcome here, regardless of skill level or background.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Heart className="h-8 w-8 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Respect</h3>
              <p className="text-sm opacity-90">
                We treat everyone with kindness and create a safe space for all gamers.
              </p>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Community</h3>
              <p className="text-sm opacity-90">
                We're more than viewers - we're a family that supports each other.
              </p>
            </div>
            <div>
              <Trophy className="h-8 w-8 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Growth</h3>
              <p className="text-sm opacity-90">
                We celebrate victories, learn from defeats, and improve together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
