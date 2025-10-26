import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaBlogger, FaStackOverflow, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
                const successMessage = "🎉 Your message has been sent successfully! Thank you for reaching out. I'll get back to you soon.";
                setFormStatus(successMessage);

                // Use react-toastify if available, otherwise fall back to existing popup
                try {
                // Assumes `toast` is imported from 'react-toastify' and <ToastContainer /> is mounted in the app
                toast.success(successMessage, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                } catch (err) {
                showPopup(successMessage, "success");
                }
            },
            (error) => {
                console.error('Error sending email:', error.text);
                const errorMessage = "🚫 Oops! Something went wrong. Please try again later.";
                setFormStatus(errorMessage);

                try {
                toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                } catch (err) {
                showPopup(errorMessage, "error");
                }
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

                    <div className="group relative w-full">
                        <button
                            type="submit"
                            className="relative z-10 w-full flex items-center justify-center px-8 py-3 rounded-xl text-white/80 font-medium transform transition duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-400/30
                                                                   bg-black/30 backdrop-blur-sm border border-white/10"
                            aria-label="Send Message"
                            style={{
                                boxShadow: '0 8px 30px rgba(99,102,241,0.08)'
                            }}
                        >
                            {/* subtle glowing gradient that expands on hover */}
                            <span
                                className="absolute inset-0 rounded-xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(236,72,153,0.18), rgba(168,85,247,0.18), rgba(59,130,246,0.12))',
                                    filter: 'blur(10px)',
                                    opacity: 0.95
                                }}
                            />
                            <span className="absolute inset-0 rounded-xl bg-white/5 pointer-events-none" />
                            <span className="relative z-20 flex items-center justify-center gap-2 text-white/70 group-hover:text-white transition-colors duration-300">
                                Send
                            </span>
                        </button>

                        {/* outer glow ring (animated on hover) */}
                        <span
                            className="pointer-events-none absolute -inset-1 rounded-xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                            style={{
                                boxShadow: '0 0 40px rgba(168,85,247,0.22), 0 0 80px rgba(99,102,241,0.12)',
                                filter: 'blur(8px)'
                            }}
                        />
                    </div>

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
                    <a href="mailto:pathumpasindu41@gmail.com" className="text-white text-lg font-medium flex items-center gap-2">
                        <FaEnvelope className="w-6 h-6" /> pathumpasindu41@gmail.com
                    </a>
                    <a href="tel:+94752955301" className="text-white text-lg font-medium flex items-center gap-2">
                        <FaPhone className="w-6 h-6" /> +94 752 955 301
                    </a>
                    <p className="text-white text-lg font-medium flex items-center gap-2">
                        <FaMapMarkerAlt className="w-6 h-6" /> Ragala, Sri Lanka
                    </p>

                    <div className="flex gap-6 justify-start mt-4 flex-wrap">
                        <a href="https://github.com/GAP-Pathum" className="text-white hover:text-blue-400" aria-label="GitHub">
                            <FaGithub className="w-8 h-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/pasindu-pathum-98a299249/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white hover:text-blue-400" aria-label="LinkedIn">
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
