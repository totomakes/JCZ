export enum Page {
  HOME = 'home',
  IDENTITY = 'identity',
  CASE_STUDIES = 'case-studies',
  FRAMEWORK = 'framework',
  PHILOSOPHY = 'philosophy',
  APPLY = 'apply'
}

export enum Persona {
  ADVISOR = 'ADVISOR',
  ACTOR = 'ACTOR'
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  problem: string;
  shift: string;
  execution: string;
  result: string;
  image: string;
}

export interface ActorProject {
  id: string;
  title: string;
  role: string;
  category: 'Feature Film' | 'Commercial' | 'TV';
  director?: string;
  production?: string;
  year: string;
  image: string;
}

export interface IdentityPath {
  id: string;
  slug: string;
  title: string;
  description: string;
}
