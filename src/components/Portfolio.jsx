import React, { useState } from "react";
import project1 from "../assets/Projects/MeraSathoDEks.png";
import project2 from "../assets/Projects/StartupDekstop.png";
import project3 from "../assets/Projects/PlayWithTxtDeks.png";
import project4 from "../assets/Projects/portfolio-snehal-bargaje.vercel.app_.png";
import project5 from "../assets/Projects/dekstop (1).png";
import project6 from "../assets/Projects/artauction.png";
import project7 from "../assets/Projects/smileofrmiles.png"
import project8 from "../assets/Projects/DekstopForm-CRUD.png"
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    img: project1,
    title: "P2PCarpooling",
    description: "This is a description for project #1. Make sure it fits within the container.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/Peer2Peer",
    },
  },
  {
    img: project2,
    title: "StartupIdea",
    description: "This is a description for project #2. Make sure it fits within the container.",
    links: {
      site: "https://startup-rbbi.vercel.app/",
      github: "https://github.com/snehalbargaje291/startup",
    },
  },
  {
    img: project3,
    title: "PlayWithText",
    description: "This is a description for project #3. Make sure it fits within the container.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/PlayWithText",
    },
  },
  {
    img: project4,
    title: "Portfolio",
    description: "This is a description for project #4. Make sure it fits within the container.",
    links: {
      site: "https://portfolio-snehal-bargaje.vercel.app/",
      github: "https://github.com/snehalbargaje291/portfolio",
    },
  },
  {
    img: project5,
    title: "NewsApp",
    description: "This is a description for project #5. Make sure it fits within the container.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/NewsApiApp",
    },
  },
  {
    img: project6,
    title: "ArtAuction",
    description: "This is a description for project #5. Make sure it fits within the container.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/artoction",
    },
  },
  {
    img: project7,
    title: "SmileForMiles",
    description: "This is a description for project #5. Make sure it fits within the container.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/Tour-Management-System",
    },
  },
  {
    img: project8,
    title: "Asp.net-CRUD",
    description: "This is a description for project #5. Make sure it fits within the container.",
    links: {
      site: false,
      github: "https://github.com/snehalbargaje291/asp.net",
    },
  }
];

function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <div
      className="my-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-8 gap-6 px-4"
      id="portfolio"
    >
      <div className="relative z-10 col-span-1 md:col-span-2 grid place-items-center">
        <p className="text-gray-200 font-bold text-4xl md:skew-y-6 mb-4 md:mb-0">
          Projects
        </p>
        {/* <img
          src={arrow}
          className="absolute w-[50px] top-10 right-0 md:right-12 hidden md:block"
          alt="arrow"
        /> */}
        <ul className="flex flex-wrap justify-center md:flex-col gap-6 md:gap-1 md:space-y-4 md:text-2xl">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer text-gray-300 mx-0 my-0 ${
                currentProject === index ? "active-project" : ""
              }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="z-10 glass w-full col-span-1 md:col-span-6">
        <div className="w-full h-100">
          <img
            className="w-auto h-auto object-cover rounded-2xl mb-4"
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
          />
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
