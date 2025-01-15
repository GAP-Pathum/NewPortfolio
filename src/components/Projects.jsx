import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import projectsData from '../assets/Projects/projectDetails';

const fadeInVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const Projects = () => {
    const [ref1, inView1] = useInView();

    return (
        <section id="projects">
        <div className="flex flex-col items-center h-screen space-y-8">
            <motion.h1
                ref={ref1}
                className="text-[8vw] md:text-[4vw] font-bold text-white"
                initial="hidden"
                animate={inView1 ? 'visible' : 'hidden'}
                variants={fadeInVariants}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                Projects
            </motion.h1>

            <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="relative border-2 border-solid overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-[0_0_15px_6px_rgba(128,90,213,0.7),0_0_25px_10px_rgba(59,130,246,0.7)] w-72 h-72"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                            <div className="text-white text-center">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default Projects;
