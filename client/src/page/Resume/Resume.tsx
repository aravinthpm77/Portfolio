
import NavBar from '../../components/navbar/navbar.js'
import { BackgroundBeams } from '../../components/ui/Aurora-background/background-bean.js'
import img from '../../assets/icons8-linkedin-32.png'
import { Link } from 'react-router-dom';
import { TimelineDemo } from './Timeline-component.js';
import {motion ,useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
function Resume() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 2], [1, 2]);
  
  return (
    <div className='overflow-x-hidden'>
  <div className='h-[100vh] font-medium w-screen mx-auto flex flex-col justify-center items-center text-white bg-[rgba(0,0,0,0.93)]'>
      
    <NavBar/>
    <motion.div
      style={{
        fontSize: "24px",
        display: "inline-block",
        scale, // Apply the scale transformation based on scroll position
      }}
    >
    <div className='text-9xl -mt-20 font-bold text-center'>
      <h2>Resume</h2>
    </div>
    </motion.div>

    <div className="z-20 absolute bottom-14 right-5 flex flex-col justify-center items-center">
      <div className="text-gray-400 tracking-tight rotate-90">Follow Me</div>
      <div className="items-center justify-center">
        <div className="w-[1.5px] h-12 mt-12 mb-4 -ml-[3px] bg-gray-400"></div>
      </div>
      <a href="https://www.linkedin.com/in/aravinth-pm-5359071b7/"><img src={img}  className="w-6 h-6 -ml-[1px] center opacity-80 cursor-pointer" /></a>
      </div>

    <div className="z-20 absolute  bottom-20 left-10 flex flex-col items-start space-y-1">
      <div className="text-gray-400 tracking-tight">Email: aravinth7703@gmail.com</div>
      <div className="text-gray-400 tracking-tight justify-start">
        in: <span className="underline cursor-pointer text-white">@aravinthpm</span>
      </div>
    </div>
    <div>
        <h4 className='z-20 absolute font-medium bottom-20 left-96 text-gray-500'><span  className='text-white cursor-pointer' ><Link to="/">Home</Link></span> / Resume</h4>
    </div>
    <BackgroundBeams className="opacity-30 z-0" />
  </div>

  <div className=' h-fit w-screen bg-[#000000e7]'></div>
    <TimelineDemo/>
</div>
  )};
export default Resume;