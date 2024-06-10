import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <hr className='mt-10'/>
      <div className='max-w-[1200px] mx-auto flex justify-between p-6 text-sm md:text-lg'>
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>Snehal Bargaje</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <FaGithubSquare/>
          <FaInstagram/>
          <FaLinkedin/>
        </div>

      </div>
      <p className='text-gray-400'>@2024 Snehal Bargaje</p>
    </div>
    </>
  )
}

export default Footer
