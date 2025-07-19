'use client';

import { useState } from 'react';
import { Eye, Filter, X, Play, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { galleryImages } from '@/lib/data';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All', count: galleryImages.length },
    { id: 'gameplay', name: 'Gameplay', count: galleryImages.filter(img => img.category === 'gameplay').length },
    { id: 'community', name: 'Community', count: galleryImages.filter(img => img.category === 'community').length },
    { id: 'setup', name: 'Setup', count: galleryImages.filter(img => img.category === 'setup').length },
    { id: 'fanart', name: 'Fan Art', count: galleryImages.filter(img => img.category === 'fanart').length },
    { id: 'events', name: 'Events', count: galleryImages.filter(img => img.category === 'events').length },
    { id: 'collaboration', name: 'Collabs', count: galleryImages.filter(img => img.category === 'collaboration').length },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of memorable moments, epic gameplay, community highlights, and behind-the-scenes content from my streaming journey.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Filter className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="text-muted-foreground">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative aspect-square bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {/* Placeholder for image */}
              <div className="w-full h-full bg-black/50 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {image.category === 'gameplay' && <Play className="h-8 w-8" />}
                    {image.category === 'community' && <MessageCircle className="h-8 w-8" />}
                    {image.category === 'setup' && <Eye className="h-8 w-8" />}
                    {image.category === 'fanart' && <Heart className="h-8 w-8" />}
                    {image.category === 'events' && <Play className="h-8 w-8" />}
                    {image.category === 'collaboration' && <MessageCircle className="h-8 w-8" />}
                  </div>
                  <p className="text-sm font-medium">{image.title}</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">View Image</p>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-black/60 text-white text-xs font-medium rounded-full capitalize">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No images found</h3>
            <p className="text-muted-foreground">
              Try selecting a different category or check back later for new content.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-xl font-bold text-foreground">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-10 w-10" />
                  </div>
                  <p className="text-lg font-medium">{selectedImage.title}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground mb-2">{selectedImage.description}</p>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm capitalize">
                    {selectedImage.category}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <Heart className="h-5 w-5 text-red-500" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <MessageCircle className="h-5 w-5 text-blue-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
