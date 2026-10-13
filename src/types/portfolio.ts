export type TabId = 
  | 'profile' 
  | 'education' 
  | 'experiences' 
  | 'certifications' 
  | 'software' 
  | 'skills' 
  | 'research' 
  | 'competitions' 
  | 'contact';

export interface EducationItem {
  institution: string;
  campus: string;
  degree: string;
  period: string;
  status: string;
  honors: string[];
  keyHighlights: string[];
  relevantCoursework: string[];
  logoOrIcon?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  durationHours?: number;
  department?: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  supervisorEvaluation?: {
    evaluator: string;
    position: string;
    rating: string;
    quote: string;
  };
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  skillsAcquired: string[];
  credentialCategory: 'Data & Analytics' | 'Business & Communication' | 'Ethics & Leadership' | 'Digital Media';
  credentialId?: string;
  verificationUrl?: string;
}

export interface SoftwareItem {
  name: string;
  category: 'Financial & Accounting' | 'Data & Business Intelligence' | 'Computational & Math' | 'Creative & Productivity';
  proficiency: 'Advanced' | 'Proficient' | 'Intermediate';
  description: string;
  useCases: string[];
  icon: string;
  featuredIn: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
  }[];
}

export interface ResearchStudy {
  id: string;
  title: string;
  type: string;
  date: string;
  focusArea: string;
  abstract: string;
  keyFindings: string[];
  methodologies: string[];
}

export interface CompetitionLink {
  label: string;
  url: string;
  type?: 'media' | 'university' | 'official' | 'social';
}

export interface CompetitionItem {
  id: string;
  title: string;
  role: string;
  award: string;
  standingRank?: string;
  year: string;
  organizer: string;
  overview: string;
  keyContributions: string[];
  skillsDemonstrated: string[];
  externalUrl?: string;
  additionalLink?: { label: string; url: string };
  links?: CompetitionLink[];
}

export interface ReferencePerson {
  name: string;
  title: string;
  relationship: string;
  phone: string;
  email: string;
}
