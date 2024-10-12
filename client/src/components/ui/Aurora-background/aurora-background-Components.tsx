"use client";

import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { AuroraBackground } from "./aurora-background";
import { BackgroundBeams } from "./background-bean";
import photo from '../../../assets/file (4).png';
import img from '../../../assets/icons8-linkedin-32.png'

const words = [
  {
    text: "I",
    className: "text-white "
  },
  {
    text: "develop",
    className: "text-white "
  },
  {
    text: "with",
    className: "text-white "
  },
  {
    text: "passion",
    className: "text-teal-700 "
  },
  
];

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
        
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center "
      >
        <div className="center mt-96 items-start ml-60 md:ml-[500px] overflow-hidden">
            <div className=" text-3xl tracking-tighter md:text-5xl font-bold dark:text-white text-center">
            Hi, I'm <span className="text-5xl tracking-tight   text-teal-500">Aravinth</span>
            </div>
            <div className="font-thin  tracking-normal  text-2xl md:text-2xl dark:text-neutral-200 ">
            I'm Creating Art Through Web
            </div>
            
        </div> 
        <img src={photo} className="absolute scale-150  mr-96 z-10 opacity-75" />
        
        
      </motion.div>
      <TypewriterEffectSmooth className=" lg:-mr-12 mt-20  lg:mt-12 z-20" words={words} /> 
      
      <BackgroundBeams className="opacity-70 z-0"/>
      
      <div className="fixed font-medium  bottom-14 right-5 flex flex-col justify-center items-center   ">
        <div className="text-gray-400 tracking-tight rotate-90">
          Follow Me
        </div>
        <div className=" items-center justify-center ">
          <div className="w-[1.5px] h-12 mt-12 mb-4 -ml-[3px] bg-gray-400"></div>
        </div>
        <a href="https://www.linkedin.com/in/aravinth-pm-5359071b7/"><img src={img}  className="w-6 h-6 -ml-[1px] center opacity-80 cursor-pointer" /></a>
    </div>
        <div className="fixed z-20 font-medium bottom-20 left-10 flex flex-col  items-start space-y-1  ">
            <div className="text-gray-400  tracking-tight ">
            Email : aravinth7703@gmail.com
            </div><div className="text-gray-400  tracking-tight justify-start">
            in : <span className="underline cursor-pointer  text-white">@aravinthpm</span>
            </div>
        </div>
      
    </AuroraBackground>
    
  );
}
