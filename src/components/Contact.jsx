import React from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const Contact = () => {
    const [ref1, inView1] = useInView();

    return (
        <section id="contact" className="w-full h-screen flex flex-col justify-center items-center mx-auto p-4">
        <div className="flex flex-col items-center h-screen mb-10">
            <motion.h1
                ref={ref1}
                className="text-[8vw] md:text-[4vw] font-bold text-white justify-start mb-8 md:mb-0"
                initial="hidden"
                animate={inView1 ? 'visible' : 'hidden'}
                variants={fadeInVariants}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                Contact Me
            </motion.h1>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-transparent max-w-screen-lg mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-8">
                    <form className="bg-transparent p-8 rounded-lg shadow-lg w-full md:w-1/2" style={{ boxShadow: '0 0 15px 6px rgba(128,90,213,0.7), 0 0 25px 10px rgba(59,130,246,0.7)' }}>
                        <h2 className="text-2xl font-bold mb-6 text-white">Contact Me</h2>
                        <label className="block text-white mb-2">Name</label>
                        <input type="text" name="name" required className="w-full p-2 mb-4 rounded bg-transparent border border-gray-300 text-white" />
                        <label className="block text-white mb-2">Email</label>
                        <input type="email" name="email" required className="w-full p-2 mb-4 rounded bg-transparent border border-gray-300 text-white" />
                        <label className="block text-white mb-2">Message</label>
                        <textarea name="message" required className="w-full p-2 mb-4 rounded bg-transparent border border-gray-300 text-white"></textarea>
                        <button type="submit" className="w-full p-2 rounded bg-gradient-to-r from-purple-500 to-blue-500 text-white">Send</button>
                    </form>

                    <div className="text-center text-white w-full md:w-1/2 md:text-left">
                        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                        <p>Email: pathumpasindu41@gmail.com</p>
                        <p>Phone: 075 29 55 301</p>
                        <p>Location: Sri Lanka</p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Contact;
