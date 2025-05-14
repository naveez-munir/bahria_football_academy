"use client";

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const MissionStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  // Mission statement pillars
  const missionPillars = [
    {
      id: 1, 
      title: "Excellence",
      description: "We strive for excellence in all aspects of our training, pushing our players to reach their highest potential.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 2, 
      title: "Development",
      description: "We focus on holistic player development, nurturing both technical skills and personal character.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      id: 3, 
      title: "Community",
      description: "We build a supportive community where players feel valued, motivated, and part of something bigger than themselves.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden py-20">
      {/* Decorative SVG Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soccer Ball SVG Animation */}
        <motion.div 
          className="absolute top-20 right-10 opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 20, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="80" fill="#F59E0B" fillOpacity="0.2"/>
            <path d="M80 20C64.0871 20 48.8258 26.3214 37.5736 37.5736C26.3214 48.8258 20 64.0871 20 80C20 95.9129 26.3214 111.174 37.5736 122.426C48.8258 133.679 64.0871 140 80 140C95.9129 140 111.174 133.679 122.426 122.426C133.679 111.174 140 95.9129 140 80C140 64.0871 133.679 48.8258 122.426 37.5736C111.174 26.3214 95.9129 20 80 20ZM108.77 53.59L92.31 73.23V106.15L108.77 126.15C103.664 130.766 97.7399 134.376 91.31 136.77V103.85L67.69 136.77C61.2601 134.376 55.336 130.766 50.23 126.15L66.69 106.15V73.23L50.23 53.23C55.336 48.6144 61.2601 45.0041 67.69 42.61V76.15L91.31 42.61C97.7399 45.0041 103.664 48.6144 108.77 53.23V53.59Z" fill="#F59E0B" fillOpacity="0.3"/>
          </svg>
        </motion.div>
        
        {/* Abstract Field Lines */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 border-4 border-yellow-500/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Mission Header */}
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              To develop exceptional soccer players and outstanding individuals through a professional, supportive, and challenging environment.
            </motion.p>
          </motion.div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Image Section */}
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-xl"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.div 
                className="aspect-[4/3] bg-cover bg-center relative"
                variants={itemVariants}
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=3286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Animated Overlay Elements */}
                <motion.div 
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="text-sm font-medium text-gray-900">Established 2010</div>
                  <div className="text-xs text-yellow-600">Over a decade of excellence</div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-4 right-4 bg-yellow-500 text-white rounded-lg px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="font-bold">1000+</div>
                  <div className="text-xs">Players Developed</div>
                </motion.div>
              </motion.div>
              
              {/* Soccer Field Pattern Overlay */}
              <motion.div 
                className="absolute inset-0 pointer-events-none opacity-10"
                variants={itemVariants}
              >
                <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="none"/>
                  <rect x="10" y="10" width="380" height="280" stroke="white" strokeWidth="2"/>
                  <circle cx="200" cy="150" r="50" stroke="white" strokeWidth="2"/>
                  <line x1="200" y1="10" x2="200" y2="290" stroke="white" strokeWidth="2"/>
                  <rect x="10" y="85" width="60" height="130" stroke="white" strokeWidth="2"/>
                  <rect x="330" y="85" width="60" height="130" stroke="white" strokeWidth="2"/>
                </svg>
              </motion.div>
            </motion.div>
            
            {/* Right: Mission Pillars */}
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {missionPillars.map((pillar) => (
                <motion.div 
                  key={pillar.id}
                  className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-sm border-l-4 border-yellow-500"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="shrink-0 bg-yellow-50 rounded-lg p-3">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{pillar.title}</h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Call to Action */}
              <motion.div
                className="mt-8 pt-6"
                variants={itemVariants}
              >
                <a 
                  href="#" 
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
                >
                  Learn More About Our Approach
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Vision Statement */}
          <motion.div 
            className="mt-20 text-center max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div 
              className="bg-yellow-50 rounded-xl p-8 border border-yellow-200 relative"
              variants={itemVariants}
            >
              {/* Quote Marks */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                "
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 italic">
                To be recognized as the premier soccer academy that not only develops elite players for the highest levels of competition, but also shapes responsible citizens who make positive contributions to their communities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L60,53.3C120,43,240,21,360,16C480,11,600,21,720,32C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default MissionStatement;
