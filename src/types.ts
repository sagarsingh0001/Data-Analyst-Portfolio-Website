export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  stats?: { label: string; value: string }[];
  impact?: string;
  architecture?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  points?: string[];
  description?: string;
  isEducation?: boolean;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  iconName: 'school' | 'cloud' | 'military_tech';
}
