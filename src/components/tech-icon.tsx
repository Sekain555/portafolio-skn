import React from 'react';
import { FaAngular, FaPython, FaVuejs, FaMicrochip } from 'react-icons/fa';
import {
  SiFastapi,
  SiMysql,
  SiFirebase,
  SiArduino,
  SiVuetify,
} from 'react-icons/si';
import { IoIonic } from "react-icons/io5";

type TechIconProps = {
  tech: string;
  className?: string;
};

const iconMap: Record<string, React.ElementType> = {
  Angular: FaAngular,
  Ionic: IoIonic,
  FastAPI: SiFastapi,
  'MySQL/MariaDB': SiMysql,
  Python: FaPython,
  Firebase: SiFirebase,
  'Firebase Realtime DB': SiFirebase,
  Arduino: SiArduino,
  ESP32: FaMicrochip,
  'Thunkable X': () => <span className="font-bold">X</span>,
  'Vue 3': FaVuejs,
  Vuetify: SiVuetify,
};

export function TechIcon({ tech, className = 'h-4 w-4' }: TechIconProps) {
  const IconComponent = iconMap[tech];

  if (!IconComponent) {
    return null; 
  }

  return <IconComponent className={className} />;
}
