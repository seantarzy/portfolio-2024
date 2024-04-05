export interface HeroDataI {
  title: string;
  name: string;
  subtitle: string;
  cta: string;
}

export interface PortfolioDataI {
  id: string;
  img: string;
  title: string;
  info: string;
  info2?: string;
  url?: string;
}

export interface ProjectsDataI extends PortfolioDataI {
  type: "projects";
  repo: string;
}

export interface BlogsDataI extends PortfolioDataI {
  type: "blogs";
}

export type PortfolioDataUnion = ProjectsDataI | BlogsDataI;

export interface AboutDataI {
  img: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
  paragraphFour: string;
  resume: string;
}

export interface FooterDataI {
  networks: {
    id: string;
    name: string;
    url: string;
  }[];
}

export interface ContactDataI {
  cta: string;
  btn: string;
  email: string;
}
