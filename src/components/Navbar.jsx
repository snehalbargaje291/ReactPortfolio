import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className='text-gray-200 max-w-[1200px] h-24 mx-auto px-4 md:px-0 flex justify-between items-center text-lg'>
      <h1 className='text-3xl font-bold'>{"<Portfolio/>"}</h1>
      <ul className='hidden md:flex '>
        <li className='p-5 '><Link to="/about" className='px-4 py-2 rounded-xl bg-primary-color'>About</Link></li>
        <li className='p-5'><Link to="/experience">Experience</Link></li>
        <li className='p-5'><Link to="/contact">Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden z-40'>
        { nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        <div className={nav?'z-40 text-gray-300 fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#171717]' : 'fixed left-[-100%]'}>
            <h1 className='text-3xl font-bold m-4'>{"<Portfolio/>"}</h1>
            <ul className='p-8 text-2xl '>
                <li className='p-5'><Link to="/about" className='px-4 py-2 rounded-xl bg-primary-color'>About</Link></li>
                <li className='p-5'><Link to="/experience">Experience</Link></li>
                <li className='p-5'><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
