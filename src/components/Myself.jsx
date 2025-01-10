import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import badge1 from '../assets/badge1.png';
import badge2 from '../assets/badge2.png';

const Education = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto p-4">
      {/* Heading */}
      <motion.h1
        ref={ref1}
        className="text-[8vw] md:text-[4vw] font-bold text-white"
        initial={{ y: 50, opacity: 0 }}
        animate={inView1 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Education
      </motion.h1>

      <div className="flex flex-col items-left mt-8 w-full md:ml-60">
        {/* Timeline */}
        <div className="relative flex flex-col items-left w-full md:ml-10 mt-4">
          {/* Line 1 */}
          <motion.div
            ref={ref2}
            className="w-1 h-12 bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-700 ml-8"
            initial={{ y: 50, opacity: 0 }}
            animate={inView2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>

          {/* Badge 1 and Tab */}
          <motion.div
            className="flex items-center justify-start w-full relative"
            ref={ref2}
            initial={{ y: 50, opacity: 0 }}
            animate={inView2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.img
              src={badge1}
              alt="Badge 1"
              className="w-16 h-16 z-10 rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex flex-col ml-4 p-4">
              <motion.span className="text-white font-bold">
                2022 to Present
              </motion.span>
              <motion.span className="text-white">
                BSc.(Hons) Computing and Information Systems<br />
                Sabaragamuwa University of Sri Lanka
              </motion.span>
            </div>
          </motion.div>

          {/* Line 2 */}
          <motion.div
            ref={ref3}
            className="w-1 h-12 bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-700 ml-8"
            initial={{ y: 50, opacity: 0 }}
            animate={inView3 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          ></motion.div>

          {/* Badge 2 and Tab */}
          <motion.div
            className="flex items-center justify-start w-full relative"
            ref={ref3}
            initial={{ y: 50, opacity: 0 }}
            animate={inView3 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.img
              src={badge2}
              alt="Badge 2"
              className="w-16 h-16 z-10 rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex flex-col ml-4 p-4">
              <motion.span className="text-white font-bold">
                2020
              </motion.span>
              <motion.span className="text-white">
                G.C.E. Advanced Levels (Physics Stream)<br />
                T.B.M. Herath National School - Ragala
              </motion.span>
            </div>
          </motion.div>

          {/* Line 3 */}
          <motion.div
            className="w-1 h-12 bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-700 ml-8"
            initial={{ y: 50, opacity: 0 }}
            animate={inView3 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
