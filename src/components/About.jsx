import React from 'react'
import project1 from "../assets/Projects/StartupDekstop.png";
import project2 from "../assets/Projects/PlayWithTxtDeks.png";
import {
  DiJavascript1,
  DiAngularSimple,
  DiHtml5,
  DiCss3,
  DiBootstrap
} from 'react-icons/di'

const internships = [
  {
    company: "Esparse Matrix Solution Pvt Ltd",
    duration: "4 months",
    role: "Software Development Intern",
    techStack: "Angular, React, Bootstrap, Tailwind, Vercel, Figma, Git",
  },
  {
    company: "BotByte.in",
    duration: "2 months",
    role: "Frontend Intern (Freelance)",
    techStack: "Nextjs, React, Tailwind, Git, Some UI Component Libraries",
  },
];
function About() {
  return (
    <div data-aos="fade-up" className='max-w-[1000px] mb-6 md:mt-10 mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id="about">
      <div className='md:p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Skills</h2>
        <p data-aos="fade-left" className='text-gray-300 mb-4'>
          As a passionate web front-end developer with 4 months of
          experience, I have a proven track record of creating visually
          stunning and responsive websites.
        </p>
        <div data-aos="fade-left" className='flex flex-wrap gap-2 md:gap-4 text-4xl justify-center'>
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-600" />
          <DiAngularSimple className="text-red-500" />
        </div>
      </div>
      <div className='relative group max-w-[600px]'>
        <div className='w-full absolute inset-0 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg
                        blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
        <div className='relative p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={project1} alt="project 1" className='rounded-lg w-full h-auto' />
        </div>
      </div>
      <div className='relative group order-2 md:order-1 max-w-[600px]'>
        <div className='w-full h-full absolute inset-0 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg
                        blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
        <div className='relative p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={project2} alt="project 2" className='rounded-lg w-full h-auto' />
        </div>
      </div>
      <div className='md:p-6 order-1 md:order-2'>
        
        <section id="internships" className="text-white">
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Frontend Experience</h2>
  <div className="space-y-6">
    {internships.map((internship, index) => (
      <div data-aos="fade-right" key={index} className="border-r-4 border-blue-500 bg-gradient-to-l from-gray-600 to-transparent p-2">
        <div className='flex flex-row-reverse justify-between'>
        <h3 className="text-xl font-semibold">{internship.company}</h3>
        <p className="text-sm text-gray-400">{internship.duration}</p>
        </div>
        <p className="text-sm uppercase mt-1">{internship.role}</p>
        {internship.techStack && (
          <div className="mt-1">
            {internship.techStack.split(", ").map((tech, index) => (
              <>
              <span key={index} className="text-xs md:text-sm bg-gray-700 text-white py-1 rounded-lg mr-1 inline-block">
                {tech}
              </span>
              </>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</section>
      </div>
    </div>
  )
}

export default About
