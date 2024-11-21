import { Link } from "react-router-dom";
import {BsGithub, BsFacebook, BsInstagram} from "react-icons/bs";
import image from '../assets/cover.jpg';
import Testimonials from "./Testmonials";
import {motion} from 'framer-motion'

const ShowCase = () => {
  return (
    <>

    <motion.div className="flex flex-col-reverse sm:flex-row mt-24 items-center justify-between"
    initial={{y: 100 }}
    animate={{y: 0 }}>
        {/* left */}
        <div className="space-y-6 text-center sm:text-left">
            <h1 className="font-bold text-gray-50-800 text-3xl">MuriidiTurab 👨‍💻☕</h1>
            <p className="text-gray-400 text-xl">i am front-end developer with ouple of experiance <br /> i design websites convert into fuction web page</p>

            {/* social links */}
            <div className="flex space-x-4 text-center justify-center sm:justify-start">
                <h1 className="cursor-pointer text-2xl transition-all hover:text-blue-600">
                <Link to='//github.com/Baabuu-10'>
                <BsGithub/>
                </Link>
                </h1>

                <h1 className="cursor-pointer text-2xl transition-all hover:text-blue-600">
                <Link to='//instagram.com'>
                <BsInstagram/>
                </Link>
                </h1>

                <h1 className="cursor-pointer text-2xl transition-all hover:text-blue-600">
                <Link to='//https://muriidi.ahmedalikar'>
                <BsFacebook/>
                </Link>
                </h1>
            </div>

            {/* download button */}
            <button className="bg-blue-600 text-white p-2 hover:-translate-y-1 duration-100 rounded-lg">
                <a href="resume.pdf" download={true}>Download resume</a>
            </button>
        </div>

        {/* right */}

        <div className="w-80 mb-10 sm:m-0">
            <img src={image} alt="" className="rounded-t-full object-cover"/>
        </div>
    </motion.div>
    <Testimonials />
</>
  )
}

export default ShowCase