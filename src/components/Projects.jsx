import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import projectsData from '../assets/Projects/projectDetails';

const fadeInVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const Projects = () => {
    const [ref1, inView1] = useInView();
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        const updateScrollIndicators = () => {
            if (scrollRef.current) {
                setCanScrollLeft(scrollRef.current.scrollLeft > 0);
                setCanScrollRight(
                    scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth
                );
            }
        };
        
        updateScrollIndicators();
        scrollRef.current?.addEventListener('scroll', updateScrollIndicators);
        return () => scrollRef.current?.removeEventListener('scroll', updateScrollIndicators);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" className="h-screen w-full flex flex-col justify-center items-center p-4 my-8 relative">
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
            <div className="relative w-full max-w-6xl">
                {canScrollLeft && (
                    <button 
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 shadow-lg"
                        onClick={() => scroll(-1)}
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}
                <div 
                    ref={scrollRef} 
                    className="flex space-x-4 overflow-x-auto scrollbar-hide w-full px-4 py-2 snap-x snap-mandatory"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            className="relative border-2 border-solid overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-lg w-80 h-72 flex-shrink-0 snap-center"
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
                {canScrollRight && (
                    <button 
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 shadow-lg"
                        onClick={() => scroll(1)}
                    >
                        <ChevronRight size={24} />
                    </button>
                )}
            </div>
        </section>
    );
};

export default Projects;
