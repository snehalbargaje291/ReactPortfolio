import React from 'react'
import project1 from '../assets/dekstop (1).png'
import project2 from '../assets/MeraSathoDEks.png'
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiBootstrap
} from 'react-icons/di'

function About() {
  return (
    <div className='max-w-[1000px] mt-10 mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id="about">
      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Skills</h2>
        <p className='text-gray-300 mb-4'>
          As a passionate web front-end developer with 6 months of
          experience, I have a proven track record of creating visually
          stunning and responsive websites.
        </p>
        <div className='flex flex-wrap gap-4 text-4xl justify-center'>
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-600" />
          <DiReact className="text-blue-500" />
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
      <div className='p-6 order-1 md:order-2'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Frontend Experience</h2>
        <p className='text-gray-300 mb-4'>
          Experienced in creating modern, responsive web applications using
          the latest frontend technologies.
        </p>
      </div>
    </div>
  )
}

export default About
