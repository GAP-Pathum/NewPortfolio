import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import { FaGithub, FaFacebook, FaInstagram, FaYoutube, FaBlogger, FaStackOverflow } from 'react-icons/fa';

const fadeInVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const Contact = () => {
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [formStatus, setFormStatus] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_bmz6kns', 
                'template_irsfppu',
                e.target,
            )
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    setFormStatus("Message sent successfully!");
                },
                (error) => {
                    console.error('Error sending email:', error.text);
                    setFormStatus("Failed to send the message. Please try again.");
                }
            );

        e.target.reset();
    };

    return (
        <section id="contact" className="min-h-screen w-full flex flex-col justify-center items-center p-6 mt-20">
            <motion.h1
                ref={ref1}
                className="text-4xl font-bold text-white mb-10"
                initial="hidden"
                animate={inView1 ? 'visible' : 'hidden'}
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Contact Me
            </motion.h1>

            <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10 justify-between items-center">
            {/* Contact Form */}
                                <motion.form
                                    ref={ref2}
                                    onSubmit={handleFormSubmit}
                                    className="flex flex-col gap-6 shadow-lg w-full md:w-1/2"
                                    initial="hidden"
                                    animate={inView2 ? 'visible' : 'hidden'}
                                    variants={fadeInVariants}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <label className="text-white text-lg font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full p-3 rounded-lg bg-transparent border border-purple-500 text-white placeholder-gray-400 focus:outline-none"
                                        placeholder="Enter your name"
                                    />

                                    <label className="text-white text-lg font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full p-3 rounded-lg bg-transparent border border-purple-500 text-white placeholder-gray-400 focus:outline-none"
                                        placeholder="Enter your email"
                                    />

                                    <label className="text-white text-lg font-medium">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        className="w-full p-3 h-28 rounded-lg bg-transparent border border-purple-500 text-white placeholder-gray-400 focus:outline-none"
                                        placeholder="Write your message"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="button-primary"
                                    >
                                        <span>Send</span>
                                    </button>

                                    {/* Form Status Message */}
                    {formStatus && (
                        <p className="text-center text-white mt-4">{formStatus}</p>
                    )}
                </motion.form>

                {/* Contact Details */}
                <motion.div
                    ref={ref3}
                    className="flex flex-col gap-6 shadow-lg w-full md:w-1/2"
                    initial="hidden"
                    animate={inView3 ? 'visible' : 'hidden'}
                    variants={fadeInVariants}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-white text-lg font-medium">pathumpasindu41@gmail.com</p>
                    <p className="text-white text-lg font-medium">+94 752 955 301</p>
                    <p className="text-white text-lg font-medium">Ragala, Sri Lanka</p>

                    <div className="flex gap-6 justify-start mt-4">
                        <a href="#" className="text-white hover:text-blue-400" aria-label="GitHub">
                            <FaGithub className="w-8 h-8" />
                        </a>
                        <a href="#" className="text-white hover:text-blue-400" aria-label="Facebook">
                            <FaFacebook className="w-8 h-8" />
                        </a>
                        <a href="#" className="text-white hover:text-blue-400" aria-label="Instagram">
                            <FaInstagram className="w-8 h-8" />
                        </a>
                        <a href="#" className="text-white hover:text-blue-400" aria-label="YouTube">
                            <FaYoutube className="w-8 h-8" />
                        </a>
                        <a href="#" className="text-white hover:text-blue-400" aria-label="Blogger">
                            <FaBlogger className="w-8 h-8" />
                        </a>
                        <a href="#" className="text-white hover:text-blue-400" aria-label="Stack Overflow">
                            <FaStackOverflow className="w-8 h-8" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
