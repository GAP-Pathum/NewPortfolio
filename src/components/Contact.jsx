import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const Contact = () => {
    const [ref1, inView1] = useInView();

    return (
        <section id="contact" className="min-h-screen w-full flex flex-col justify-center items-center p-4">
            <motion.h1
                ref={ref1}
                className="text-[8vw] md:text-[4vw] font-bold text-white mb-8"
                initial="hidden"
                animate={inView1 ? 'visible' : 'hidden'}
                variants={fadeInVariants}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                Contact Me
            </motion.h1>
            <div className="flex flex-col md:flex-row w-[80%] items-center gap-10 justify-space-between">
                <form className="bg-transparent p-10 rounded-lg shadow-lg w-[80%] md:w-[40%] lg:w-[30%] backdrop-filter backdrop-blur-lg" style={{ boxShadow: '0 0 15px 6px rgba(128,90,213,0.7), 0 0 25px 10px rgba(59,130,246,0.7)' }}>
                    <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
                    <label className="block text-white mb-2">Name</label>
                    <input type="text" name="name" required className="w-full p-2 mb-4 rounded bg-transparent border border-gray-300 text-white" />
                    <label className="block text-white mb-2">Email</label>
                    <input type="email" name="email" required className="w-full p-2 mb-4 rounded bg-transparent border border-gray-300 text-white" />
                    <label className="block text-white mb-2">Message</label>
                    <textarea name="message" required className="w-full p-2 mb-4 rounded bg-transparent border border-gray-300 text-white"></textarea>
                    <button type="submit" className="w-full p-2 rounded bg-gradient-to-r from-purple-500 to-blue-500 text-white">Send</button>
                </form>
                <div className="bg-transparent p-8 rounded-lg shadow-lg w-[80%] md:w-[60%] lg:w-[30%] backdrop-filter backdrop-blur-lg" style={{ boxShadow: '0 0 15px 6px rgba(128,90,213,0.7), 0 0 25px 10px rgba(59,130,246,0.7)' }}>
                    <h2 className="text-2xl font-bold mb-4 text-white">Contact Details</h2>
                    <p className="text-white mb-4"><strong>Email:</strong> pathumpasindu41@gmail.com</p>
                    <p className="text-white mb-4"><strong>Phone:</strong> +94 75 295 5301</p>
                    <p className="text-white mb-4">
                        <strong>WhatsApp:</strong> 
                        <a href="https://wa.me/94752955301" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                            +94 75 295 5301
                        </a>
                    </p>
                    <p className="text-white"><strong>Location:</strong> Sri Lanka</p>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.403 1.02.005 2.043.137 3 .403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.217.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.88-1.32 2.34-2.5 4-2.5 2.21 0 4 1.79 4 4v7.5z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.059-2.563.334-3.535 1.306-.972.972-1.247 2.254-1.306 3.535-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.281.334 2.563 1.306 3.535.972.972 2.254 1.247 3.535 1.306 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.563-.334 3.535-1.306.972-.972 1.247-2.254 1.306-3.535.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.334-2.563-1.306-3.535-.972-.972-2.254-1.247-3.535-1.306-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
