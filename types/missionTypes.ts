import { JSX } from 'react';

export interface MissionPillar {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

// Use Framer Motion's built-in Variants type
export interface OverlayElement {
  position: string;
  className: string;
  initialAnimation: {
    opacity: number;
    x?: number;
    y?: number;
  };
  delay: number;
  content: {
    primary: string;
    secondary: string;
  };
}
