import React from "react";
import {
  FaAngular,
  FaPython,
  FaVuejs,
  FaMicrochip,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiFastapi,
  SiMysql,
  SiFirebase,
  SiArduino,
  SiVuetify,
  SiDotnet,
  SiNextdotjs,
  SiTypescript,
  SiSupabase,
  SiShadcnui,
} from "react-icons/si";
import { IoLogoIonic } from "react-icons/io5";
import { TbBrandCSharp } from "react-icons/tb";
import { GrDocumentWindows } from "react-icons/gr";

type TechIconProps = {
  tech: string;
  className?: string;
};

const iconMap: Record<string, React.ElementType> = {
  Angular: FaAngular,
  Ionic: IoLogoIonic,
  FastAPI: SiFastapi,
  "MySQL/MariaDB": SiMysql,
  Python: FaPython,
  Firebase: SiFirebase,
  "Firebase Realtime DB": SiFirebase,
  Arduino: SiArduino,
  ESP32: FaMicrochip,
  "Thunkable X": () => <span className="font-bold">X</span>,
  "Vue 3": FaVuejs,
  Vuetify: SiVuetify,
  "C#": TbBrandCSharp,
  ".NET": SiDotnet,
  "Windows Forms": GrDocumentWindows,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Supabase": SiSupabase,
  "Tailwind CSS": FaCss3Alt,
  "shadcn/ui": SiShadcnui,
};

export function TechIcon({ tech, className = "h-4 w-4" }: TechIconProps) {
  const IconComponent = iconMap[tech];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
}
