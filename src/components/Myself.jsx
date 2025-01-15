import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import face from '../assets/face.png';

function Myself() {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section id="myself" className="w-full h-screen flex flex-col justify-center items-center mx-auto p-4">
    <div className="w-full h-screen flex flex-col justify-center items-center mx-auto p-4">
      {/* Horizontal line with circles */}
      <motion.div
        ref={ref1}
        className="flex items-center w-full flex-wrap mt-0"
        initial={{ y: 50, opacity: 0 }}
        animate={inView1 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <hr className="bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 h-2 border-0 font-bold flex-1 min-w-[100px]" />
        <motion.div className="flex justify-end items-center ml-2.5 flex-wrap">
          <motion.div className="w-5 h-5 rounded-full bg-pink-500 mr-2.5" />
          <motion.div className="w-5 h-5 rounded-full bg-purple-600" />
        </motion.div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        ref={ref2}
        className="text-[8vw] md:text-[4vw] font-bold text-white text-left mt-5"
        initial={{ y: 50, opacity: 0 }}
        animate={inView2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Who I Am ?
      </motion.h1>

      {/* Content section */}
      <motion.div
        ref={ref3}
        className="flex flex-col md:flex-row items-center justify-center mt-2 w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={inView3 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {/* Text section */}
        <div className="md:w-1/2 p-4bg-opacity-10 backdrop-blur-md rounded-lg">
          <p className="text-[4vw] md:text-[1.5vw] text-white text-left">
            I am G.A.P. Pathum.<br />
            I'm a web designer and developer based in MERN stack.
          </p>
          <p className="text-[4vw] md:text-[1.2vw] text-white text-left mt-6">
            Enthusiastic Computing and Information Systems undergraduate with a passion for software development and innovation. Quick learner and adaptable team player, committed to solving complex problems and contributing to impactful projects. Focused on leveraging skills to advance in the tech industry and make a meaningful difference through technology.
          </p>
        </div>

        {/* Image section */}
        <motion.div
          className="md:w-1/2 p-4 flex justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={inView3 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          <img
            src={face}
            alt="face"
            className="w-30 h-30 md:w-25 md:h-25 object-cover rounded-full mt-5 border-none opacity-75"
          />
        </motion.div>
      </motion.div>
    </div>
    </section>
  );
}

export default Myself;
