'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, Users, Heart, Calendar, Twitch, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { streamerInfo, socialLinks, projects, achievements } from '@/lib/data';
import { formatViewCount } from '@/lib/utils';

export default function Home() {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);

  // Simulate live status check
  useEffect(() => {
    const checkLiveStatus = () => {
      // This would be replaced with actual Twitch API call
      setIsLive(Math.random() > 0.5);
      setViewerCount(Math.floor(Math.random() * 1000) + 100);
    };
    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">A</span>
                  </div>
                  {isLive && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                      LIVE
                    </div>
                  )}
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Hey, I'm <span className="text-purple-400">{streamerInfo.name}</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-6 text-gray-300">
                {streamerInfo.tagline}
              </p>
              <p className="text-lg mb-8 text-gray-400 max-w-2xl">
                {streamerInfo.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={socialLinks.find(link => link.platform === 'Twitch')?.url || '#'}
                  className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Twitch className="h-5 w-5" />
                  <span>Watch Live</span>
                  {isLive && <span className="text-sm">({formatViewCount(viewerCount)} viewers)</span>}
                </Link>
                <Link
                  href="/about"
                  className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 mx-auto mb-4 text-white" />
                    <p className="text-xl font-semibold">Stream Preview</p>
                    <p className="text-sm text-gray-300">
                      {isLive ? 'Currently Live!' : 'Stream Offline'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{formatViewCount(streamerInfo.totalFollowers)}</h3>
              <p className="text-muted-foreground">Followers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Play className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{formatViewCount(streamerInfo.totalViews)}</h3>
              <p className="text-muted-foreground">Total Views</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{streamerInfo.yearsStreaming}</h3>
              <p className="text-muted-foreground">Years Streaming</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">5K+</h3>
              <p className="text-muted-foreground">Discord Members</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Video Clips</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out some of my recent video clips, collaborations, and community events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <Link
                      href={project.link}
                      className="inline-flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-medium"
                    >
                      <span>View Project</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stream Schedule */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Stream Schedule</h2>
            <p className="text-muted-foreground">
              Join me live on these days for epic gaming sessions!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {streamerInfo.streamingDays.map((day, index) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg text-center shadow-lg"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{day}</h3>
                <p className="text-purple-600 font-semibold mb-2">{streamerInfo.streamingTime}</p>
                <p className="text-muted-foreground text-sm">{streamerInfo.currentGame}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Community?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Follow me on Twitch and join our Discord community for exclusive content, events, and great vibes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={socialLinks.find(link => link.platform === 'Twitch')?.url || '#'}
                className="flex items-center justify-center space-x-2 bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Twitch className="h-5 w-5" />
                <span>Follow on Twitch</span>
              </Link>
              <Link
                href={socialLinks.find(link => link.platform === 'Discord')?.url || '#'}
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors backdrop-blur-sm"
              >
                <span>Join Discord</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
