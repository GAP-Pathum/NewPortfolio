import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaBlogger, FaStackOverflow, FaWhatsapp } from 'react-icons/fa';

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
            'IPYLmr56gm3jq8OZq' // Add your user token here
            )
            .then(
            (result) => {
                console.log('Email sent successfully:', result.text);
                setFormStatus("🎉 Your message has been sent successfully! Thank you for reaching out. I'll get back to you soon.");
                showPopup("🎉 Your message has been sent successfully! Thank you for reaching out. I'll get back to you soon.", "success");
            },
            (error) => {
                console.error('Error sending email:', error.text);
                setFormStatus("🚫 Oops! Something went wrong. Please try again later.");
                showPopup("🚫 Oops! Something went wrong. Please try again later.", "error");
            }
            );

        const showPopup = (message, type) => {
            const popup = document.createElement('div');
            popup.className = `popup-message ${type}`;
            popup.textContent = message;
            document.body.appendChild(popup);

            setTimeout(() => {
            popup.classList.add('show');
            }, 100);

            setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 300);
            }, 3000);
        };

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
                    className="flex flex-col gap-6 shadow-lg w-full md:w-1/2 p-6 rounded-lg"
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
                        className="w-full p-3 rounded-lg bg-transparent border border-purple-500 text-white placeholder-gray-400 focus:outline-none backdrop-blur-sm"
                        placeholder="Enter your name"
                    />

                    <label className="text-white text-lg font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-3 rounded-lg bg-transparent border border-purple-500 text-white placeholder-gray-400 focus:outline-none backdrop-blur-sm"
                        placeholder="Enter your email"
                    />

                    <label className="text-white text-lg font-medium">Message</label>
                    <textarea
                        name="message"
                        required
                        className="w-full p-3 h-28 rounded-lg bg-transparent border border-purple-500 text-white placeholder-gray-400 focus:outline-none backdrop-blur-sm"
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
                    className="flex flex-col gap-6 shadow-lg w-full md:w-1/2 p-6 rounded-lg"
                    initial="hidden"
                    animate={inView3 ? 'visible' : 'hidden'}
                    variants={fadeInVariants}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a href="mailto:pathumpasindu41@gmail.com" className="text-white text-lg font-medium">pathumpasindu41@gmail.com</a>
                    <p className="text-white text-lg font-medium">+94 752 955 301</p>
                    <p className="text-white text-lg font-medium">Ragala, Sri Lanka</p>

                    <div className="flex gap-6 justify-start mt-4 flex-wrap">
                        <a href="https://github.com/GAP-Pathum" className="text-white hover:text-blue-400" aria-label="GitHub">
                            <FaGithub className="w-8 h-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/pasindu-pathum-98a299249/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white hover:text-blue-400" aria-label="GitHub">
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a href="https://www.facebook.com/share/1XaLVXKiqm/" className="text-white hover:text-blue-400" aria-label="Facebook">
                            <FaFacebook className="w-8 h-8" />
                        </a>
                        <a href="https://www.instagram.com/g_a_p_pathum/profilecard/?igsh=MXVuNXQ1eXY0NjBkMA==" className="text-white hover:text-blue-400" aria-label="Instagram">
                            <FaInstagram className="w-8 h-8" />
                        </a>
                        <a href="https://youtube.com/@pathumpasindu41?si=RnrUX0NvtOWvNs4O" className="text-white hover:text-blue-400" aria-label="YouTube">
                            <FaYoutube className="w-8 h-8" />
                        </a>
                        <a href="https://www.blogger.com/blog/posts/6357854027725991588?pli=1" className="text-white hover:text-blue-400" aria-label="Blogger">
                            <FaBlogger className="w-8 h-8" />
                        </a>
                        <a href="https://stackoverflow.com/users/27074307/pasindu-pathum" className="text-white hover:text-blue-400" aria-label="Stack Overflow">
                            <FaStackOverflow className="w-8 h-8" />
                        </a>
                        <a href="https://wa.me/94752955301" className="text-white hover:text-blue-400" aria-label="WhatsApp">
                            <FaWhatsapp className="w-8 h-8" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
