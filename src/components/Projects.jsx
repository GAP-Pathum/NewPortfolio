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
        <section id="projects" className="h-screen w-full flex flex-col justify-center items-center p-4 my-8">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="relative border-2 border-solid overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-lg w-full h-72"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                            <div className="text-white text-center p-4">
                                <h3 className="text-lg font-bold">{project.title}</h3>
                                <p className="text-sm">{project.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
