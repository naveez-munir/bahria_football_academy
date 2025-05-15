"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  missionPillars,
  missionData,
  overlayElements,
} from "@/data/missionData";

const MissionStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div
      id="mission"
      className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden py-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="80" cy="80" r="80" fill="#F59E0B" fillOpacity="0.2" />
            <path
              d="M80 20C64.0871 20 48.8258 26.3214 37.5736 37.5736C26.3214 48.8258 20 64.0871 20 80C20 95.9129 26.3214 111.174 37.5736 122.426C48.8258 133.679 64.0871 140 80 140C95.9129 140 111.174 133.679 122.426 122.426C133.679 111.174 140 95.9129 140 80C140 64.0871 133.679 48.8258 122.426 37.5736C111.174 26.3214 95.9129 20 80 20ZM108.77 53.59L92.31 73.23V106.15L108.77 126.15C103.664 130.766 97.7399 134.376 91.31 136.77V103.85L67.69 136.77C61.2601 134.376 55.336 130.766 50.23 126.15L66.69 106.15V73.23L50.23 53.23C55.336 48.6144 61.2601 45.0041 67.69 42.61V76.15L91.31 42.61C97.7399 45.0041 103.664 48.6144 108.77 53.23V53.59Z"
              fill="#F59E0B"
              fillOpacity="0.3"
            />
          </svg>
        </motion.div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 border-4 border-yellow-500/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                {missionData.headerTitle}
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {missionData.headerDescription}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
                  backgroundImage: `url("${missionData.backgroundImage}")`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {overlayElements.map((element, index) => (
                  <motion.div
                    key={index}
                    className={element.className}
                    initial={element.initialAnimation}
                    animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                    transition={{ delay: element.delay, duration: 0.5 }}
                  >
                    <div
                      className={
                        element.position.includes("top")
                          ? "text-sm font-medium text-gray-900"
                          : "font-bold"
                      }
                    >
                      {element.content.primary}
                    </div>
                    <div
                      className={
                        element.position.includes("top")
                          ? "text-xs text-yellow-600"
                          : "text-xs"
                      }
                    >
                      {element.content.secondary}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="absolute inset-0 pointer-events-none opacity-10"
                variants={itemVariants}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="300" fill="none" />
                  <rect
                    x="10"
                    y="10"
                    width="380"
                    height="280"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="200"
                    cy="150"
                    r="50"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <line
                    x1="200"
                    y1="10"
                    x2="200"
                    y2="290"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <rect
                    x="10"
                    y="85"
                    width="60"
                    height="130"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <rect
                    x="330"
                    y="85"
                    width="60"
                    height="130"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>
            </motion.div>

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
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

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
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                &quot;
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {missionData.visionTitle}
              </h3>
              <p className="text-gray-700 italic">
                {missionData.visionDescription}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full"
        >
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
