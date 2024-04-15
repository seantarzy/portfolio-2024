import { nanoid } from "nanoid";
import type { Metadata } from "next";

import {
  AboutDataI,
  BlogsDataI,
  ContactDataI,
  FooterDataI,
  HeroDataI,
  ProjectsDataI,
} from "./types";
// HEAD DATA

export const headData: Metadata = {
  title: "Sean Tarzy", // e.g: 'Name | Developer'
  description: "Welcome to my portfolio", // e.g: Welcome to my website
};

// HERO DATA

export const heroData: HeroDataI = {
  title: "",
  name: "Sean Tarzy",
  subtitle: "Software Engineer @Alignable",
  cta: "",
};

// ABOUT DATA

export const aboutData: AboutDataI = {
  img: "linkedInPhoto.png",
  paragraphOne:
    "Sean Tarzy is a software engineer with a knack for problem solving and creativity.",
  paragraphTwo: "Languages: Javascript, Ruby, SQL, HTML5, CSS3",
  paragraphThree: "Education: Binghamton University, Flatiron School",
  paragraphFour: "Hobbies: Baseball, Movies, Bass Guitar, Science-Fiction",
  resume: "",
};

// PROJECTS DATA

// what name would you use to group both projects and blogs?

export const projectsData: ProjectsDataI[] = [
  {
    type: "projects",
    id: nanoid(),
    img: "studio-logo",
    title: "The Studio Worldwide",
    info: "The Studio Worldwide is the new access point to artists and the art world. I handled full-stack development for this site, allowing users to view media and purchase art.",
    info2: "Tools Used: Next.js, TypeScript, Prismic, Shopify, CSS3, HTML5",
    url: "https://www.thestudioworldwide.com/",
    repo: ""
  },
  {
    type: "projects",
    id: nanoid(),
    img: "babe-ruth",
    title: "War Games",
    info: "Like the card game 'War', except using baseball players and a particulair baseball statistic for the card's value. Now has Multiplayer functionality!",
    info2:
      "Tools Used: React.ts, Vite, Ruby on Rails, ActionCable, WebSockets, CSS3, HTML5, Bootstrap, Heroku, Netlify",
    url: "https://baberuth.app/",
    repo: "https://github.com/seantarzy/war-games-vite/" // if no repo, the button will not show up
  },
  {
    type: "projects",
    id: nanoid(),
    img: "mneumonic",
    title: "Mnemonic Maker",
    info: "Ever use Quizlet? Now imagine those digital flashcards incorporating your favorite song lyrics to help make studying effective and fun. And not just any lyrics, but lyrics whose initials line up perfectly to those of the phrase or list you need to remember. Add these mnemonic devices to a playlist of your choosing and listen to your flashcards come to life!",
    info2:
      "Tools Used: React.js, Redux, Ruby on Rails, Rest-Client (for web scraping)",
    repo: "https://github.com/seantarzy/Mnemonic-2.0-front-end" // if no repo, the button will not show up
  },
  {
    type: "projects",
    id: nanoid(),
    img: "speed-dating",
    title: "Speed Dating ",
    info: "A simple game where you calculate the day of the week based on the date provided.",
    info2: "Tools Used: React.ts, Vite, CSS3, HTML5, Netlify",
    url: "https://main--speed-dating-calc.netlify.app/",
    repo: "https://github.com/seantarzy/speed-dating/tree/main"
  },
  {
    type: "projects",
    id: nanoid(),
    img: "science-is-how",
    title: "Science is How",
    info: "A site that answers the question 'How does that work?' with a focus on science, math, and technology. Think 'Brilliant.org' but with a more casual tone.",
    info2: "Tools Used: React.ts, Vite, CSS3, HTML5",
    url: "https://science-is-how.netlify.app/",
    repo: "https://github.com/seantarzy/science-is-how/tree/main"
  },
  {
    type: "projects",
    id: nanoid(),
    img: "bitcoin-project",
    title: "What is Bitcoin's Price?",
    info: "I couldn't buy Bitcoin when I could afford it, so I decided to capitalize on the hype in other ways. A fun site to answer the million dollar question at any moment. In addition to live pricing and conversion rates, this site provides stock graphs, articles and even an item of the day! Check it out.",
    info2:
      "Tools Used: React.js, Node.js, Puppeteer (for web scraping), ToolTip and InfoBox to create a Bitcoin stock chart  * Currently Working on this project!",
    url: "https://whatsbitcoinsprice.com/",

    repo: "https://github.com/seantarzy/bitcoin-project-frontend"
  }
];
export const blogsData: BlogsDataI[] = [
  {
    type: "blogs",
    id: nanoid(),
    img: "genuine-leader",
    title: "The Genuine Leader",
    info: "A sci-fi short story. What if AI was big brother all along?",
    url: "https://seantarzy.medium.com/the-genuine-leader-39ed769e5b7c",
  },
  {
    type: "blogs",
    id: nanoid(),
    img: "teacher-to-coder",
    title: "How Teaching Set me up to be a Coder",
    info: "In this blog post I talk about how teaching helped me become a coder and draw the parallels between pedogogy and programming.",
    info2: "",
    url: "https://medium.com/swlh/how-being-a-school-teacher-set-me-up-to-be-a-coder-3d977cbc30b3",
  },
  {
    type: "blogs",
    id: nanoid(),
    img: "sea-monster-riddle",
    title: "Solving the Sea Monster Ted-Ed Riddle using Vanilla Javascript",
    info: "TED-Ed riddles flex the same kind of problem-solving muscles excersized in creating apps. I found that there was such a strong link between TED-Ed Riddles and coding, that I decided to bridge the gap even closer.",
    info2: "",
    url: "https://seantarzy.medium.com/solving-the-sea-monster-ted-ed-riddle-using-vanilla-javascript-800fe02be6e0",
  },
];

// CONTACT DATA

export const contactData: ContactDataI = {
  cta: "",
  btn: "",
  email: "seantarzy@gmail.com",
};

// FOOTER DATA
export const footerData: FooterDataI = {
  networks: [
    {
      id: nanoid(),
      name: "medium",
      url: "https://seantarzy.medium.com/",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/sean-tarzy-997076110/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/seantarzy",
    },
  ],
};
