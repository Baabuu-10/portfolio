import {HiMenuAlt1} from 'react-icons/hi';
import {GrClose} from 'react-icons/gr'
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';

const Header = () => {

    const [open, setOpen] = useState(false)
  return (
    <div className='flex items-center justify-between pt-2'>
        {/* logo */}
        <div className='w-20'>
           <Link to="/"><img src={logo} /></Link>
        </div>

        {/* large screen navigation */}
        <div className='hidden md:flex items-center gap-5 font-medium text-gray-600'>
            <Link to="/">Home</Link>
            <Link to="/Projects">Project</Link>
            <Link to="/About">About</Link>
            
            <div className='bg-blue-600 text-white hover:-transform: translate-y-1 duration-400 px-3 py-2 rounded-lg'>
            <Link to="/Contact">Contact</Link>
            </div>
        </div>

        {/* mobile navigation */}
        <div className={`fixed top-0 z-0 bg-white w-60 h-screen shadow-2xl ${open ? 'right-0' : 'right-[100%]'} md:hidden flex flex-col space-y-10 font-medium text-gray-600 pt-20 p-20 duration-100`}>
        <Link to="/">Home</Link>
        <Link to="/Projects">Project</Link>
        <Link to="/About">About</Link>
        <div className='bg-blue-600 w-24 text-white hover:-transform: translate-y-1 duration-400 px-3 py-2 rounded-lg'>
            <Link to="/Contact">Contact</Link>
        </div>
        </div>
        {/* toggle button */}

        <div className='text-2xl md:hidden z-50' onClick={() => setOpen(!open)}>
            {
                open ? (
                    <GrClose className='h-7 cursor-pointer'/>
                ) : (
                    <HiMenuAlt1 className='h-7 cursor-pointer'/>
                )
            }
            
        </div>
    </div>
  )
}

export default Header