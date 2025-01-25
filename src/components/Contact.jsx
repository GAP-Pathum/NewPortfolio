import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';

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
        <section id="contact" className="min-h-screen w-full flex flex-col justify-center items-center p-6">
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
                        className="mt-4 w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none"
                    >
                        Send
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
                    <a href="#" class="text-white hover:text-blue-400" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.986-.399 3.008-.404 1.02.005 2.048.137 3.008.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.824.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
        </svg>
    </a>

    <a href="#" class="text-white hover:text-blue-400" aria-label="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.657-4.788 1.324 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.588l-.467 3.622h-3.121V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
        </svg>
    </a>

    <a href="#" class="text-white hover:text-blue-400" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.415.415a4.9 4.9 0 011.675 1.093 4.9 4.9 0 011.093 1.675c.175.445.359 1.245.415 2.415.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.415 2.415a4.9 4.9 0 01-1.093 1.675 4.9 4.9 0 01-1.675 1.093c-.445.175-1.245.359-2.415.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.415-.415a4.9 4.9 0 01-1.675-1.093 4.9 4.9 0 01-1.093-1.675c-.175-.445-.359-1.245-.415-2.415-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.415-2.415a4.9 4.9 0 011.093-1.675 4.9 4.9 0 011.675-1.093c.445-.175 1.245-.359 2.415-.415 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.013 7.052.07 5.765.126 4.588.308 3.635.633a6.845 6.845 0 00-2.464 1.615A6.845 6.845 0 00.635 4.714C.31 5.667.126 6.844.07 8.052.013 9.332 0 9.741 0 12c0 2.259.013 2.668.07 3.948.056 1.188.24 2.365.565 3.318a6.845 6.845 0 001.615 2.464 6.845 6.845 0 002.464 1.615c.953.325 2.13.509 3.318.565 1.28.057 1.689.07 3.948.07s2.668-.013 3.948-.07c1.188-.056 2.365-.24 3.318-.565a6.845 6.845 0 002.464-1.615 6.845 6.845 0 001.615-2.464c.325-.953.509-2.13.565-3.318.057-1.28.07-1.689.07-3.948s-.013-2.668-.07-3.948c-.056-1.188-.24-2.365-.565-3.318a6.845 6.845 0 00-1.615-2.464A6.845 6.845 0 0020.318.633c-.953-.325-2.13-.509-3.318-.565C14.668.013 14.259 0 12 0z" />
        </svg>
    </a>

    <a href="#" class="text-white hover:text-blue-400" aria-label="YouTube">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a2.99 2.99 0 00-2.105-2.105C19.687 3.504 12 3.504 12 3.504s-7.687 0-9.393.577a2.99 2.99 0 00-2.105 2.105C.935 8.064.935 12 .935 12s0 3.936.567 5.814a2.99 2.99 0 002.105 2.105c1.706.577 9.393.577 9.393.577s7.687 0 9.393-.577a2.99 2.99 0 002.105-2.105C23.935 15.936 23.935 12 23.935 12s0-3.936-.437-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z" />
        </svg>
    </a>

    <a href="#" class="text-white hover:text-blue-400" aria-label="Blogger">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.953 4.153C17.997 1.96 15.747 0 12.953 0h-.456C8.75 0 5.955 2.77 5.955 6.159v11.635c0 3.389 2.795 6.206 6.543 6.206h.455c3.206 0 6.456-1.91 6.956-4.113.23-1.083.207-2.059.207-2.139V7.06c0-.08.082-.513-.207-2.075zM9.955 9.053c0-.689.577-1.241 1.256-1.241h5.527c.679 0 1.256.553 1.256 1.241s-.577 1.241-1.256 1.241h-5.527c-.679 0-1.256-.553-1.256-1.241zm7.09 7.241h-6.563c-.679 0-1.256-.553-1.256-1.241s.577-1.241 1.256-1.241h6.563c.679 0 1.256.553 1.256 1.241s-.577 1.241-1.256 1.241z" />
        </svg>
    </a>

    <a href="#" class="text-white hover:text-blue-400" aria-label="Stack Overflow">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.062 21.59H4.546v-5.781H3.272v7.054h14.908v-7.054h-1.272v5.781zM7.063 14.178l-.833.927 9.635 3.839.833-.927-9.635-3.839zM8.852 11.17l-1.005.794 8.062 4.995 1.005-.794-8.062-4.995zM10.98 8.17l-1.144.636 6.514 6.145 1.144-.636-6.514-6.145zM14.284 3.816l-1.23.497 4.418 8.394 1.23-.497-4.418-8.394zM5.53 18.796v1.272h10.054v-1.272H5.53z" />
        </svg>
    </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
