"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { actionImages, chairpersons } from '@/data/chairpersonData';

const ChairpersonSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.7);
      },
      { threshold: [0.7] }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const currentRef = sectionRef.current;
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    
    if (isInView) {
      intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % chairpersons.length);
      }, 5000);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView]);

  const navigateToProfile = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-20 overflow-hidden"
    >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-0 w-96 h-96 bg-yellow-400/10 rounded-full -translate-x-1/2 -translate-y-1/2"
            animate={{ 
              y: [0, 40, 0],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute bottom-20 right-0 w-64 h-64 bg-yellow-500/5 rounded-full translate-x-1/3"
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Our Leadership</h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the dedicated team guiding our academy to excellence.</p>
          </motion.div>

          <div className="flex justify-center mb-12 space-x-6">
            {chairpersons.map((person, index) => (
              <motion.div
                key={person.id}
                className="relative cursor-pointer"
                initial={{ opacity: 0.5, y: 20 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0.5,
                  y: 0,
                  scale: activeIndex === index ? 1.1 : 1
                }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg bg-yellow-100 relative shadow-md">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${person.image})` }}
                  ></div>
                </div>
                {activeIndex === index && (
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full"
                    layoutId="chairpersonIndicator"
                  />
                )}
              </motion.div>
            ))}
          </div>
          <div className="relative h-[400px] md:h-[360px]">
            <AnimatePresence mode="wait">
              {chairpersons.map((person, index) => (
                activeIndex === index && (
                  <motion.div
                    key={person.id}
                    className="absolute top-0 left-0 w-full grid md:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    <div>
                      <motion.div 
                        className="mb-2 text-yellow-500 font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {person.title}
                      </motion.div>
                      
                      <motion.h3 
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {person.name}
                      </motion.h3>
                      
                      <motion.div 
                        className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <p className="text-gray-700 leading-relaxed">
                          {person.message}
                        </p>
                      </motion.div>
                    </div>

                    <div className="flex justify-center">
                      <motion.div 
                        className="w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden shadow-lg relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div 
                          className="w-full h-full bg-cover bg-center" 
                          style={{ backgroundImage: `url(${actionImages[index]})` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          <div className="absolute bottom-4 right-4 text-xs bg-white/80 backdrop-blur-sm rounded px-2 py-1 text-gray-800">
                            Zoom in on this image
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            {chairpersons.map((_, index: number) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-yellow-500' : 'bg-gray-300'}`}
                onClick={() => navigateToProfile(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View profile ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
            <path 
              fill="#f7fafc" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            />
          </svg>
        </div>
      </section>
  );
};

export default ChairpersonSection;
