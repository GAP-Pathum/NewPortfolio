import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });

    return (
        <div className="w-full flex flex-col justify-center items-center mx-auto p-4">
            <motion.h1
                ref={ref1}
                className="text-[8vw] md:text-[4vw] font-bold text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={inView1 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                Education
            </motion.h1>
        </div>
    );
};

export default Education;