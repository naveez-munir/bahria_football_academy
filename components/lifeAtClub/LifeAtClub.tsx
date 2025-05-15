"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoAlbum from 'react-photo-album';
import Image from 'next/image';
import { clubPhotos, containerVariants, itemVariants, tabs } from '@/data/lifeAtClubData';

const LifeAtClub = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  return (
    <div id="teams" className="relative bg-white py-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        
        {/* Soccer ball pattern */}
        <div className="absolute bottom-20 left-10 opacity-5">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#F59E0B"/>
            <path d="M50 12.5C40.0545 12.5 30.516 14.7842 23.4835 19.3176C16.451 23.851 12.5 30.0544 12.5 36.5C12.5 42.9456 16.451 49.149 23.4835 53.6824C30.516 58.2158 40.0545 60.5 50 60.5C59.9455 60.5 69.484 58.2158 76.5165 53.6824C83.549 49.149 87.5 42.9456 87.5 36.5C87.5 30.0544 83.549 23.851 76.5165 19.3176C69.484 14.7842 59.9455 12.5 50 12.5ZM67.9812 33.4938L57.6937 45.7688V66.4563L67.9812 78.8438C64.79 81.7938 61.0875 84.0167 57.0687 85.4938V64.9063L42.2 85.4938C38.1812 84.0167 34.4787 81.7938 31.2875 78.8438L41.6813 66.4563V45.7688L31.2875 33.2875C34.4787 30.3375 38.1812 28.1146 42.2 26.6375V47.3438L57.0687 26.6375C61.0875 28.1146 64.79 30.3375 67.9812 33.2875V33.4938Z" fill="#F59E0B"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Life at the Club</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our community, facilities, and team moments through these snapshots of daily life at SoccerPro Academy.
          </p>
        </motion.div>
        
        {/* Tab Navigation */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex justify-center space-x-2 md:space-x-4 min-w-max mx-auto pb-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`px-4 md:px-6 py-2 rounded-full transition-colors ${
                  activeTab === tab.id 
                    ? "bg-yellow-500 text-white shadow-md" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Columns Gallery Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="gallery-container"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PhotoAlbum 
                layout="columns"
                photos={clubPhotos[activeTab]}
                columns={(containerWidth) => {
                  if (containerWidth < 640) return 2;
                  if (containerWidth < 1024) return 3;
                  return 5;
                }}
                spacing={20}
                padding={0}
                // @ts-expect-error - Using renderPhoto despite type definition mismatch in PhotoAlbum
                renderPhoto={(props: PhotoComponentProps) => (
                  <motion.div 
                    style={props.wrapperStyle} 
                    variants={itemVariants}
                    className="group relative overflow-hidden rounded-lg shadow-md border border-gray-100 bg-white p-2 mb-4 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="overflow-hidden rounded">
                      <Image
                        src={props.photo.src}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={props.photo.alt || "Club photo"}
                        width={props.photo.width}
                        height={props.photo.height}
                        unoptimized={false}
                      />
                    </div>
                    
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    >
                      <div className="p-3 text-white text-sm font-medium">
                        {props.photo.alt || "Club moment"}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* "View All" Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button 
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold shadow-md inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Full Gallery</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path 
            fill="#f7fafc" 
            fillOpacity="1" 
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default LifeAtClub;
