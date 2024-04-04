import React from "react";
import {
  HeroDataI,
  AboutDataI,
  ContactDataI,
  ProjectsDataI,
  FooterDataI,
  BlogsDataI,
} from "../personal/types";

export interface ContextI {
  hero: HeroDataI;
  about: AboutDataI;
  projects: ProjectsDataI[];
  contact: ContactDataI;
  footer: FooterDataI;
  blogs: BlogsDataI[];
}

const PortfolioContext = React.createContext<ContextI | {}>({});

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
