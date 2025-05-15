// missionData.tsx
import { Variants } from 'framer-motion';
import { MissionPillar, OverlayElement } from '../types/missionTypes';

// Animation variants
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Mission statement pillars
export const missionPillars: MissionPillar[] = [
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

// Content data
export const missionData = {
  headerTitle: "Our Mission",
  headerDescription: "To develop exceptional soccer players and outstanding individuals through a professional, supportive, and challenging environment.",
  visionTitle: "Our Vision",
  visionDescription: "To be recognized as the premier soccer academy that not only develops elite players for the highest levels of competition, but also shapes responsible citizens who make positive contributions to their communities.",
  backgroundImage: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=3286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

// Overlay element data
export const overlayElements: OverlayElement[] = [
  {
    position: "top-left",
    className: "absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg",
    initialAnimation: { opacity: 0, x: -20 },
    delay: 0.8,
    content: {
      primary: "Established 2010",
      secondary: "Over a decade of excellence"
    }
  },
  {
    position: "bottom-right",
    className: "absolute bottom-4 right-4 bg-yellow-500 text-white rounded-lg px-4 py-2 shadow-lg",
    initialAnimation: { opacity: 0, y: 20 },
    delay: 1,
    content: {
      primary: "1000+",
      secondary: "Players Developed"
    }
  }
];
