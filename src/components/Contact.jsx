import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SocialIcon } from 'react-social-icons';

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
            <div className="flex flex-col md:flex-row w-2/3 justify-center items-start gap-8">
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
                <div className="bg-transparent p-8 rounded-lg shadow-lg w-[80%] md:w-[40%] lg:w-[30%] backdrop-filter backdrop-blur-lg" style={{ boxShadow: '0 0 15px 6px rgba(128,90,213,0.7), 0 0 25px 10px rgba(59,130,246,0.7)' }}>
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
                    <div className="grid grid-cols-3 gap-4 mt-6"></div>
                        <SocialIcon url="https://github.com/yourusername" />
                        <SocialIcon url="https://www.linkedin.com/in/yourusername" />
                        <SocialIcon url="https://www.instagram.com/yourusername" />
                        <SocialIcon url="https://www.facebook.com/yourusername" />
                        <SocialIcon url="https://www.behance.net/yourusername" />
                        <SocialIcon url="https://yourusername.blogspot.com" />
                        <SocialIcon url="https://www.pinterest.com/yourusername" />
                        <SocialIcon url="https://www.youtube.com/c/yourusername" />
                        <SocialIcon url="https://twitter.com/yourusername" />
                    </div>
                </div>
        
        </section>
    );
};
