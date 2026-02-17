
export enum Page {
  HOME = 'home',
  IDENTITY = 'identity',
  CASE_STUDIES = 'case-studies',
  FRAMEWORK = 'framework',
  PHILOSOPHY = 'philosophy',
  APPLY = 'apply'
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

export interface IdentityPath {
  id: string;
  title: string;
  description: string;
  slug: string;
}
