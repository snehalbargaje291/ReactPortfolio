import React from 'react'

function Contact() {
  return (
    <div className='mt-24 px-6 max-w-[1000px] mx-auto md:grid md:grid-cols-2 place-items-center' id="contact">
      <div>
      <div className='text-gray-300 my-3 p-2'>
          <h3 className='text-4xl font-semibold mb-5'>Let's <span>connect</span></h3>
          <p className='text-justify leading-7'>
            "I hold a Master's degree in Computer Application.
            My aim is to leverage my technical skill set to actively
            engage with systems that drive organizational growth,
            while also facilitating the achievement of my personal goals."
          </p>
        </div>
        <div className='flex my-6 md:mt-3 md:mb-0 items-center gap-2 md:gap-7'>
          <div className='bg-[#171717]/40 p-2 md:p-5 rounded-lg'>
            <h3 className='text-xl md:text-3xl font-semibold text-gray-200'>11 <span>+</span></h3>
            <p className='text-xs md:text-base text-gray-200'>Projects</p>
          </div>
          <div className='bg-[#171717]/40 p-2 md:p-5 rounded-lg'>
            <h3 className='text-xl md:text-3xl font-semibold text-gray-200'>11 <span>+</span></h3>
            <p className='text-xs md:text-base text-gray-200'>Projects</p>
          </div>
          <div className='bg-[#171717]/40 p-2 md:p-5 rounded-lg'>
            <h3 className='text-xl md:text-3xl font-semibold text-gray-200'>11 <span>+</span></h3>
            <p className='text-xs md:text-base text-gray-200'>Projects</p>
          </div>
        </div>
      </div>
      <form action="https://getform.io/f/lakmqqna" className='mx-w-6xl mt- md:mt-0 p-2 md:p-8' method='POST'>
      <input
          type="text"
          id="name"
          placeholder="Your name ..."
          name="name"
          className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
        />
        <input
          type="email"
          id="email"
          placeholder="Your email ..."
          name="email"
          className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
        />
        <textarea
          type="textarea"
          id="textarea"
          cols="50"
          rows="5"
          placeholder="Your Message ..."
          className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
        />
        <button type="submit" className='w-full py-2 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
