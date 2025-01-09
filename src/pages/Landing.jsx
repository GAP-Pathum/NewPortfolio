import React from 'react';
import Header from '../components/Header/Header';
import profimg from '../assets/profile.png';
import { motion } from 'framer-motion';

function Landing() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div>
                <Header />
                <motion.div
                    className="p-1 bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 rounded-full w-48 h-48 overflow-hidden m-auto mt-10 hover:shadow-[0_0_15px_6px_rgba(128,90,213,0.7),0_0_25px_10px_rgba(59,130,246,0.7)] transition-shadow duration-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        className="w-full h-full object-cover rounded-full"
                        src={profimg}
                        alt="profile"
                    />
                </motion.div>
                <motion.h2
                    className="text-white text-center text-2xl font-bold mt-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Hello World <br /> I'm G.A.P.Pathum
                </motion.h2>

                <motion.div
                    className="flex justify-center mt-6 gap-7"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <a href="https://github.com/GAP-Pathum" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.403 1.02.005 2.043.137 3 .403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.217.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/pathum" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                        <svg
                            className="w-8 h-8 text-white ml-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 11.5h-3v-5.5c0-1.38-.56-2.5-2-2.5s-2 1.12-2 2.5v5.5h-3v-10h3v1.5c.69-1.19 2.31-1.5 3.5-1.5 2.5 0 4 1.5 4 4v6z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/pathum" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                        <svg
                            className="w-8 h-8 text-white ml-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.059-2.563.334-3.637 1.408-1.074 1.074-1.349 2.356-1.408 3.637-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.281.334 2.563 1.408 3.637 1.074 1.074 2.356 1.349 3.637 1.408 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.563-.334 3.637-1.408 1.074-1.074 1.349-2.356 1.408-3.637.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.334-2.563-1.408-3.637-1.074-1.074-2.356-1.349-3.637-1.408-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/pathum" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                        <svg
                            className="w-8 h-8 text-white ml-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z" />
                        </svg>
                    </a>
                </motion.div>

                <motion.div
                    className="flex justify-center mt-8 gap-10"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                >
                    <button className="button-primary group">
                        <span className="group-hover:bg-opacity-0">Contact Me</span>
                    </button>
                    <button className="button-primary group">
                        <span className="group-hover:bg-opacity-0">Download CV</span>
                    </button>
                </motion.div>
            </div>
            <div className="flex justify-center mt-4">
                <motion.div
                    className="flex justify-center mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, -10, 0] }}
                    transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "loop" }}
                >
                    <a href="#next-section" className="hover:scale-150 transition-transform duration-300">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 16.5l-8-8h16l-8 8z" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Landing;
