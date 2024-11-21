import me from '../assets/me.jpg';
import { FaReact, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiRedux } from 'react-icons/si';
import { DiJavascript, DiGitMerge } from 'react-icons/di';
import { FiCode } from 'react-icons/fi';
import { MdLocalAirport, MdNature } from 'react-icons/md';
import { BsFillBookFill } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';
import Services from './Services';
import { motion} from 'framer-motion'

const About = () => {
  return (
    <>
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-24 items-center"
    initial={{x: -100}}
    animate={{x: 0}}>
      {/* Left side - Image */}
      <div className='flex items-center flex-wrap justify-center'>
      <div className="w-3/4 h rounded-3xl shadow-slate-400">
        <img src={me} alt="Me" className="w-full h-auto object-cover rounded-3xl" />
      </div>
    </div>

      {/* Right side - About text and tools */}
      <div className="space-y-5 text-center md:text-left px-5">
        <h1 className="font-semibold text-3xl">About Me 👨‍💻</h1>
        <p className="text-lg">
          I am a student, bootcamp graduate, and freelancer with 1+ years of work experience. I'm
          your next web developer!
        </p>

        {/* Tools */}
        <div className='mt-5'>
          <h2 className="text-2xl font-medium">Tools I Use</h2>
          <div className="flex items-center flex-wrap gap-4 mt-3">
            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <DiJavascript className="text-yellow-500 text-xl" /> JavaScript
            </div>

            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <FaNode className="text-yellow-500 text-xl" /> Nodejs
            </div>

            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <SiTailwindcss className="text-yellow-500 text-xl" /> Tailwindcss
            </div>

            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <SiRedux className="text-yellow-500 text-xl" /> Redux
            </div>

            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <DiGitMerge className="text-yellow-500 text-xl" /> Git
            </div>

            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <DiJavascript className="text-yellow-500 text-xl" /> JavaScript
            </div>
           
          </div>
        </div>

        {/* interests */}

        <div className='mt-2'>
          <h2 className="text-2xl font-medium">Interests</h2>
          <div className="flex items-center flex-wrap gap-4 mt-3">
            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <FiCode className="text-yellow-500 text-xl" /> Coding
            </div>

            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <MdLocalAirport className="text-yellow-500 text-xl" /> travelling
            </div>

            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <MdNature className="text-yellow-500 text-xl" /> Natural
            </div>

            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <GiSelfLove className="text-yellow-500 text-xl" /> Decipline
            </div>

            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <BsFillBookFill className="text-yellow-500 text-xl" /> Learning
            </div>

            <div className="flex items-center justify-center text-center bg-gray-200 rounded-xl shadow-md p-3 w-28">
              <BsFillBookFill className="text-yellow-500 text-xl" /> Learning
            </div>
           
          </div>
        </div>
      </div>
    </motion.div>

    <Services/>
    </>
  );
};

export default About;
