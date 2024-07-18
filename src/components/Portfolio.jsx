import React, { useState } from "react";
import project from "../assets/Projects/interviewIQ.png";
import project1 from "../assets/Projects/MeraSathoDEks.png";
import project2 from "../assets/Projects/StartupDekstop.png";
import project3 from "../assets/Projects/PlayWithTxtDeks.png";
import project4 from "../assets/Projects/portfolio-snehal-bargaje.vercel.app_.png";
import project5 from "../assets/Projects/dekstop (1).png";
import project6 from "../assets/Projects/artauction.png";
import project7 from "../assets/Projects/smileofrmiles.png";
import project8 from "../assets/Projects/DekstopForm-CRUD.png";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const projects = [
  {
    img: project,
    title: "InterviewIQ",
    description: "Interview preparation platform providing detailed feedback for each interview. Built with Gemini API in Next.js.",
    links: {
      site: "https://ai-mock-interview-ten.vercel.app/",
      github: "https://github.com/snehalbargaje291/ai-mock-interview",
    },
  },
  {
    img: project2,
    title: "StartupIdea",
    description: "Internship project where I learned Angular. This project represents the startup idea of the company I interned with, and it's an e-commerce app.",
    links: {
      site: "https://startup-rbbi.vercel.app/",
      github: "https://github.com/snehalbargaje291/startup",
    },
  },
  {
    img: project1,
    title: "P2PCarpooling",
    description: "Carpooling project using JSP and Bootstrap to facilitate shared rides among users.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/Peer2Peer",
    },
  },
  {
    img: project3,
    title: "PlayWithText",
    description: "Text editing app built in React, developed while learning React.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/PlayWithText",
    },
  },
  {
    img: project4,
    title: "Portfolio",
    description: "My old portfolio website built with Angular, showcasing projects, skills, and experiences.",
    links: {
      site: "https://portfolio-snehal-bargaje.vercel.app/",
      github: "https://github.com/snehalbargaje291/portfolio",
    },
  },
  {
    img: project5,
    title: "NewsApp",
    description: "React app created while learning how to call APIs, providing the latest news articles from various sources.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/NewsApiApp",
    },
  },
  {
    img: project6,
    title: "ArtAuction",
    description: "College project built in Django and Python, providing an online platform for art auctions.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/artoction",
    },
  },
  {
    img: project7,
    title: "SmileForMiles",
    description: "Static website and my first frontend-only project, providing a tour management system for seamless travel experiences.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/Tour-Management-System",
    },
  },
  {
    img: project8,
    title: "Asp.net-CRUD",
    description: "Simple ASP.NET masterpage and desktop app performing CRUD operations, using SSMS database and C# backend.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/asp.net",
    },
  },
];



function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <div
      data-aos="fade-up"
      className="my-6 mb-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-8 gap-6 px-4"
      id="portfolio"
    >
      <div className="relative z-10 col-span-1 md:col-span-2 grid place-items-start">
        <p className="text-gray-200 font-bold text-4xl mb-4 md:mb-0">Projects</p>
        <ul className="flex flex-wrap top-0 md:flex-col gap-6 md:gap-1 md:space-y-6 text-sm md:text-md">
          {projects.map((project, index) => (
            <motion.li
            whileTap={{ scale: 0.9}}
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer text-gray-300 mx-0 my-0 ${
                currentProject === index ? "active-project" : ""
              }`}
            >
              {project.title}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="z-10 glass w-full col-span-1 md:col-span-6">
        <div className="w-full h-100">
          <div className="w-full h-[300px] md:h-[400px]">
            <motion.img
            whileHover={{
              scale: 0.9,
              transition: { duration: 1 },
            }}
              className="w-full h-full object-cover rounded-2xl mb-4"
              src={projects[currentProject].img}
              alt={projects[currentProject].title}
            />
          </div>
        </div>
        <div className="p-2 overflow-auto">
          <p className="text-gray-200 text-sm md:text-lg mb-2 break-words">
            {projects[currentProject].description}
          </p>
          <div className="p-2 flex space-x-4">
            {projects[currentProject].links.site && (
              <a
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                href={projects[currentProject].links.site}
              >
                View Site
              </a>
            )}
            <a
              className="text-2xl px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
              href={projects[currentProject].links.github}
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
