import React from 'react'
import { skillsData } from '../../assets/skills/skillsData'
import { skillsImage } from '../../assets/skills/skillsImage'
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills() {
    const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });

    const fadeInVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      };

      
    return (
        <div className= "w-full h-screen flex flex-col justify-center items-center mx-auto p-4">
        <motion.h1
        ref={ref1}
        className="items-center text-[8vw] md:text-[4vw] font-bold text-white"
        initial="hidden"
        animate={inView1 ? 'visible' : 'hidden'}
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Skills
      </motion.h1>

                <div className="flex items-center justify-center w-full mt-14 px-8">
                        <div className="w-full mx-8">
                                <Marquee 
                                        gradient={true} 
                                        gradientColor={[0, 0, 0]} 
                                        speed={80} 
                                        pauseOnHover={true}
                                        pauseOnClick={true} 
                                        delay={0}
                                        play={true} 
                                        direction="left"
                                >
                                        {skillsData.map((skill, id) => (
                                                <div 
                                                        className="shadow-lg rounded-lg w-40 h-40 m-6 flex flex-col items-center justify-center p-8 transition-transform duration-300 ease-in-out hover:scale-115 bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 overflow-hidden mt-10 hover:shadow-[0_0_15px_6px_rgba(128,90,213,0.7),0_0_25px_10px_rgba(59,130,246,0.7)]" 
                                                        key={id}
                                                >
                                                        <img src={skillsImage(skill)} alt={skill} className="h-12 pointer-events-none" />
                                                        <h3 className="font-big-shoulders-text font-medium text-lg text-center mt-4 text-white">
                                                                {skill}
                                                        </h3>
                                                </div>
                                        ))}
                                </Marquee>
                        </div>
                </div>
        </div>
    )
}

export default Skills
