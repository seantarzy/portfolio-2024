"use client";

import React, { useState, useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Blogs from "./Blogs/Blogs";
import { PortfolioProvider } from "../context/context";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/main.scss";
import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  blogsData,
} from "../personal/data";
import {
  AboutDataI,
  BlogsDataI,
  ContactDataI,
  FooterDataI,
  HeroDataI,
  ProjectsDataI,
} from "../personal/types";

function Portfolio() {
  const [hero, setHero] = useState<HeroDataI | {}>({});
  const [about, setAbout] = useState<AboutDataI | {}>({});
  const [projects, setProjects] = useState<ProjectsDataI[] | []>([]);
  const [blogs, setBlogs] = useState<BlogsDataI[] | []>([]);
  const [contact, setContact] = useState<ContactDataI | {}>({});
  const [footer, setFooter] = useState<FooterDataI | {}>({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setBlogs([...blogsData]);
  }, []);

  return (
    <PortfolioProvider
      value={{ hero, about, projects, contact, footer, blogs }}
    >
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default Portfolio;
