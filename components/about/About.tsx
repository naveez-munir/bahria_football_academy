"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { containerVariants, itemVariants } from '@/data/lifeAtClubData';
import { achievements, features } from '@/data/aboutData';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div id="about" className="relative bg-white overflow-hidden py-20">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

        <div className="absolute top-40 left-10">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
            <circle cx="30" cy="30" r="30" fill="#F59E0B"/>
            <path d="M30 7.5C24.0327 7.5 18.3097 9.87053 14.0901 14.0901C9.87053 18.3097 7.5 24.0327 7.5 30C7.5 35.9673 9.87053 41.6903 14.0901 45.9099C18.3097 50.1295 24.0327 52.5 30 52.5C35.9673 52.5 41.6903 50.1295 45.9099 45.9099C50.1295 41.6903 52.5 35.9673 52.5 30C52.5 24.0327 50.1295 18.3097 45.9099 14.0901C41.6903 9.87053 35.9673 7.5 30 7.5ZM40.7887 20.0962L34.6162 27.4612V39.8062L40.7887 47.3062C38.874 49.0373 36.6525 50.3909 34.2412 51.2887V38.9437L25.3837 51.2887C22.9725 50.3909 20.751 49.0373 18.8362 47.3062L25.0087 39.8062V27.4612L18.8362 19.9612C20.751 18.2304 22.9725 16.8765 25.3837 15.9787V28.4062L34.2412 15.9787C36.6525 16.8765 38.874 18.2304 40.7887 19.9612V20.0962Z" fill="#F59E0B"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-20">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
            <circle cx="30" cy="30" r="30" fill="#F59E0B"/>
            <path d="M30 7.5C24.0327 7.5 18.3097 9.87053 14.0901 14.0901C9.87053 18.3097 7.5 24.0327 7.5 30C7.5 35.9673 9.87053 41.6903 14.0901 45.9099C18.3097 50.1295 24.0327 52.5 30 52.5C35.9673 52.5 41.6903 50.1295 45.9099 45.9099C50.1295 41.6903 52.5 35.9673 52.5 30C52.5 24.0327 50.1295 18.3097 45.9099 14.0901C41.6903 9.87053 35.9673 7.5 30 7.5ZM40.7887 20.0962L34.6162 27.4612V39.8062L40.7887 47.3062C38.874 49.0373 36.6525 50.3909 34.2412 51.2887V38.9437L25.3837 51.2887C22.9725 50.3909 20.751 49.0373 18.8362 47.3062L25.0087 39.8062V27.4612L18.8362 19.9612C20.751 18.2304 22.9725 16.8765 25.3837 15.9787V28.4062L34.2412 15.9787C36.6525 16.8765 38.874 18.2304 40.7887 19.9612V20.0962Z" fill="#F59E0B"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            About Us
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-yellow-500 mx-auto mb-6"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Founded in 2010, we&apos;ve grown from a small local academy to one of the region&apos;s premier soccer development centers.
          </motion.p>
        </motion.div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Story Section */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Story</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  SoccerPro Academy was established with a simple yet powerful vision: to provide young athletes with world-class soccer training in a supportive environment that nurtures both athletic and personal growth.
                </p>
                <p>
                  What began as a small training program with just two coaches and twenty players has evolved into a comprehensive academy with multiple age groups, specialized training tracks, and a reputation for excellence that extends beyond our region.
                </p>
                <p>
                  Our approach combines European training methodologies with innovative coaching techniques, creating a unique development system that has produced numerous collegiate and professional players over the years.
                </p>
              </div>
            </motion.div>
            
            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Achievements</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {achievements.map((item) => (
                  <motion.div 
                    key={item.id}
                    className="bg-yellow-50 rounded-lg p-4 text-center border border-yellow-100"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-yellow-500">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Call to Action */}
            <motion.div variants={itemVariants} className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
              >
                <span>Join Our Academy</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right: Features and Image */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Image */}
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-xl mb-8"
              variants={itemVariants}
            >
              <div 
                className="aspect-video bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
                
                {/* Play Button */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </div>
              
              {/* Video Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                <div className="text-sm md:text-base font-semibold">Watch: A Day at SoccerPro Academy</div>
              </div>
            </motion.div>
            
            {/* Features */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h3>
              <div className="space-y-4">
                {features.map((feature) => (
                  <motion.div 
                    key={feature.id}
                    className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="shrink-0 bg-yellow-50 rounded-lg p-2">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Testimonial Section */}
        <motion.div 
          className="mt-20 bg-yellow-50 rounded-xl p-8 border border-yellow-100 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Quote Icon */}
          <div className="absolute -top-5 left-10 transform -translate-x-1/2 bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-serif">
            &quot;
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Testimonial Image */}
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
            </div>
            
            {/* Testimonial Content */}
            <div>
              <p className="text-gray-700 italic mb-4">
                &quot;Joining SoccerPro Academy was the best decision we made for our son&apos;s development. Not only has his technical ability improved tremendously, but he&apos;s also gained confidence, discipline, and made lifelong friends. The coaches truly care about each player&apos;s growth both on and off the field.&quot;
              </p>
              <div className="font-bold text-gray-900">Jessica Williams</div>
              <div className="text-sm text-gray-500">Parent of Michael, U14 Elite Player</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
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

export default AboutUs;
