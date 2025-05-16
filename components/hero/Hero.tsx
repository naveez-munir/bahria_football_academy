"use client";

import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'), { ssr: false });

const HeroSection: React.FC = () => {
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);
  
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const revealVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren"
      }
    }
  };

  const overlayVariants: Variants = {
    hidden: { height: "100%" },
    visible: { 
      height: "0%",
      transition: { 
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  };

  return (
    <motion.div 
      className="relative overflow-hidden"
      initial="hidden"
      animate={pageLoaded ? "visible" : "hidden"}
      variants={revealVariants}
      id="hero"
    >
      <motion.div 
        className="fixed inset-0 bg-black z-50 origin-bottom"
        variants={overlayVariants}
      />

      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1695190672861-a62f4de64c3e?q=80&w=3726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` 
          }}
        ></div>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <Header />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-md md:max-w-xl relative">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  <motion.span 
                    className="block relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <span className="relative inline-block">
                      D<span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-yellow-500"></span>evelop
                    </span>
                  </motion.span>
                  <motion.span 
                    className="block relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    your <span className="relative text-yellow-500">
                      Game
                      <motion.svg 
                        className="absolute -bottom-1 left-0 w-full" 
                        height="6" 
                        viewBox="0 0 100 6" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.path 
                          d="M0 3C20 3 20 3 40 3C60 3 60 3 80 3C100 3 100 3 120 3" 
                          stroke="#EAB308" 
                          strokeWidth="4" 
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 1.5 }}
                        />
                      </motion.svg>
                    </span>
                  </motion.span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-lg backdrop-blur-sm bg-black/5 p-2 rounded-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Elevate your soccer skills with professional coaching and personalized training programs designed for players of all levels.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <motion.button 
                  className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full text-base md:text-lg flex items-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="relative z-10">Contact</span>
                  <motion.span 
                    className="ml-2 relative z-10"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 1.5,
                      ease: "easeInOut" 
                    }}
                  >
                    →
                  </motion.span>
                  
                  {/* Button shine effect */}
                  <motion.span 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 0.5 }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.button>
                
                <motion.button 
                  className="border-2 border-white hover:border-yellow-500 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full text-base md:text-lg flex items-center relative overflow-hidden"
                  whileHover={{ scale: 1.05, borderColor: "#EAB308" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="relative z-10">Learn More</span>
                </motion.button>
              </motion.div>
              
              {/* Stats badges */}
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                {[
                  { number: "10+", text: "Professional Coaches" },
                  { number: "500+", text: "Players Trained" },
                  { number: "15+", text: "Years Experience" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg flex items-center space-x-2 border border-yellow-500/20"
                    whileHover={{ y: -5, backgroundColor: "rgba(0,0,0,0.4)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.9 + (index * 0.1) }}
                  >
                    <span className="text-yellow-500 font-bold text-xl">{stat.number}</span>
                    <span className="text-white text-sm">{stat.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
