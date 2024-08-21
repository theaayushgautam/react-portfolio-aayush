import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/aayushGautamProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.5, delay: delay } 
  }
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl font-thin tracking-tight sm:text-5xl lg:mt-16 lg:text-6xl"
            >
              Aayush Gautam
            </motion.h1>
            <motion.span 
              variants={container(0.5)} 
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Data Scientist
            </motion.span>
            <motion.p  variants={container(1)} 
              initial="hidden"
              animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left">  
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}} 
            transition={{duration: 1, delay: 1.2}} 
            className="rounded-2xl"    // className="rounded-2xl inner-shadow"
            src={profilePic} alt="Aayush Gautam" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
