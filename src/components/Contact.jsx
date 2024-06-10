import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, handleSubmit] = useForm("xvoeegvg");

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Show the success message for 3 seconds
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (isSubmitted) {
      document.getElementById("contact-form").reset(); // Clear the form fields
    }
  }, [isSubmitted]);

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
        <div className='flex my-6 md:mt-3 md:mb-0 items-center gap-2 md:gap-6'>
          <div className='bg-[#171717]/40 p-2 md:p-5 rounded-lg'>
            <h3 className='text-xl md:text-3xl font-semibold text-gray-200'>6 <span>+</span></h3>
            <p className='text-xs md:text-base text-gray-200'>Projects</p>
          </div>
          <div className='bg-[#171717]/40 p-2 md:p-5 rounded-lg'>
            <h3 className='text-xl md:text-3xl font-semibold text-gray-200'>4 <span>+</span></h3>
            <p className='text-xs md:text-base text-gray-200'>Months Experiance</p>
          </div>
          {/* <div className='bg-[#171717]/40 p-2 md:p-5 rounded-lg'>
            <h3 className='text-xl md:text-3xl font-semibold text-gray-200'>11 <span>+</span></h3>
            <p className='text-xs md:text-base text-gray-200'>Projects</p>
          </div> */}
        </div>
      </div>
      <div className='w-full'>
        <form id="contact-form" onSubmit={handleSubmit} className='w-full p-2 md:p-8'>
          <input
            type="text"
            id="name"
            placeholder="Your name ..."
            name="name"
            className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          <input
            type="email"
            id="email"
            placeholder="Your email ..."
            name="email"
            className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <textarea
            id="textarea"
            cols="50"
            rows="5"
            placeholder="Your Message ..."
            name="message"
            className='mb-2 w-full rounded-md border-gray-400 py-2 pl-2 pr-4'
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className='w-full py-2 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>
            Send Message
          </button>
          <div className="p-2 text-center rounded-md h-12 flex items-center justify-center">
            {isSubmitted && (
              <h3 className="text-sm font-semibold text-green-500">Form Submitted Successfully</h3>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
