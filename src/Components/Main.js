
import ShowCase from "./ShowCase"
import Projects from './Projects';
import About from "./About";
import Contact from "./Contact";
import {AnimatePresence} from 'framer-motion';
import { Route, Routes, useLocation } from "react-router-dom";

const Main = () => {
    const location = useLocation()
  return (
    <div>
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<ShowCase />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
        </AnimatePresence>
        
    </div>
  )
}

export default Main