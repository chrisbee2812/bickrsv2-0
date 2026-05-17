export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'IAM' | 'Microsoft Legacy' | 'Hybrid' | 'Microsoft Legacy & Hybrid';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
  slug: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'IAM' | 'Microsoft Core' | 'Cloud & Security';
}
