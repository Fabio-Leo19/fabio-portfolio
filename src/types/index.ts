/**
 * TypeScript Type Definitions
 * Centralized types for better type safety and maintainability
 */

// Menu Types
export interface MenuItem {
  name: string;
  href: string;
}

// Skill Types
export interface Skill {
  name: string;
  level: number;
  color?: string;
}

export interface SkillCategory {
  category: string;
  icon: any;
  skills: string[];
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  highlights?: string[];
}

// Experience Types
export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

// Contact Types
export interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href: string;
}

// Stats Types
export interface Stat {
  value: string;
  label: string;
}

export interface SkillStat {
  label: string;
  value: number;
  color: string;
}

// Service/Area Types
export interface ServiceArea {
  icon: any;
  title: string;
  desc: string;
}
