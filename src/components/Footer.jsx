import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {
  return (
    <>
    <hr className='mt-10'/>
      <div className='max-w-[1200px] mx-auto flex justify-between pt-2 md:p-6 text-sm md:text-lg'>
      <div className='space-y-4'>
        <h3 className='md:text-xl text-gray-200 font-semibold'>Snehal Bargaje</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <a href="https://github.com/snehalbargaje291" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithubSquare className="text-2xl text-gray-300 hover:text-black transition duration-300" />
          </a>
          <a href="https://github.com/snehalbargaje291/ReactPortfolio.git" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin className="text-2xl text-gray-300 hover:text-blue-600 transition duration-300" />
          </a>
          <a href="mailto:snehal.bargaje291@gmail.com" title="Email">
            <AiOutlineMail className="text-2xl text-gray-300 hover:text-red-600 transition duration-300" />
          </a>
        </div>

      </div>
      <p className='text-gray-400 text-sm md:text-xl'>@2024 Snehal Bargaje</p>
    </div>
    </>
  )
}

export default Footer
