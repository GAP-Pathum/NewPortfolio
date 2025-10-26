import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profimg from '../assets/profile.png';
import prof1 from '../assets/prof1.png';
import face from '../assets/face.png';
import face2 from '../assets/face2.png';
import helloworld from '../assets/helloworld.wav'

function Landing({ scrollToMyself }) {
    const [activeFace, setActiveFace] = useState('face2'); // 'face2' or 'face'
    const [opacity, setOpacity] = useState(0.5);
    const [showLightning, setShowLightning] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [profileImg, setProfileImg] = useState(profimg);
    const audioRef = useRef(null);
    
    // Try to autoplay the imported wav file (best-effort).
    // Note: modern browsers may block audible autoplay. We attempt multiple strategies:
    // 1) normal play, 2) muted play then unmute attempt.
    useEffect(() => {
        let mounted = true;
        async function tryPlay() {
            try {
                const audio = new Audio(helloworld);
                audioRef.current = audio;
                audio.volume = 0.6;
                audio.autoplay = true;
                audio.playsInline = true;

                // Attempt normal playback first
                try {
                    await audio.play();
                    // played successfully
                    return;
                } catch (err) {
                    console.warn('Autoplay attempt failed, trying muted playback fallback:', err);
                }

                // Try muted playback (many browsers allow muted autoplay)
                try {
                    audio.muted = true;
                    await audio.play();
                    // If muted play succeeds, attempt to unmute after a short delay (best-effort)
                    setTimeout(async () => {
                        try {
                            audio.muted = false;
                            // try to resume audible playback
                            await audio.play();
                        } catch (unmuteErr) {
                            // Unmute might be blocked by policy; keep playing muted as fallback
                            console.warn('Unmute attempt failed:', unmuteErr);
                        }
                    }, 500);
                } catch (mutedErr) {
                    console.warn('Muted autoplay also failed:', mutedErr);
                }
            } catch (err) {
                console.warn('Audio initialization failed:', err);
            }
        }

        tryPlay();

        return () => {
            mounted = false;
            if (audioRef.current) {
                try { audioRef.current.pause(); } catch (e) {}
                audioRef.current = null;
            }
        };
    }, []);

    // Random transition between faces
    useEffect(() => {
        const transitionInterval = setInterval(() => {
            setShowLightning(true);

            setTimeout(() => {
                setActiveFace(prev => prev === 'face2' ? 'face' : 'face2');
                setShowLightning(false);
            }, 300);
        }, Math.random() * 4000 + 3000); // Random interval between 3-7 seconds

        return () => clearInterval(transitionInterval);
    }, []);

    // Random opacity dimming
    useEffect(() => {
        const opacityInterval = setInterval(() => {
            setOpacity(Math.random() * 0.3 + 0.35); // Random opacity between 0.35-0.65
        }, Math.random() * 2000 + 1500); // Random interval between 1.5-3.5 seconds

        return () => clearInterval(opacityInterval);
    }, []);

    // Track mouse position
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20, // Max 10px movement
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleDownloadCV = () => {
        alert('Resume download functionality');
    };

    const navigateToContact = (e) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, translateY: '10%' }}
                animate={{ opacity: 1, translateY: '-8%' }}
                transition={{ duration: 1 }}
                className="min-h-screen flex flex-col items-center justify-center mx-auto p-4 relative"
                style={{ height: '100vh' }}
            >
                {/* Background faces container */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    {/* Lightning flash overlay */}
                    <AnimatePresence>
                        {showLightning && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.8, 0.3, 0.9, 0] }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-blue-300 mix-blend-screen pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle, rgba(147, 197, 253, 0.8) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%)'
                                }}
                            />
                        )}
                    </AnimatePresence>

                    { /* Desktop - Left face (face2) */}
                    <AnimatePresence mode="wait">
                        {activeFace === 'face2' && (
                            <motion.img
                                key="face2-desktop"
                                src={face2}
                                alt="background-left"
                                className="hidden md:block absolute right-[-6%] transform -translate-y-1/2 w-[40rem] max-w-[45vw] object-cover filter"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: opacity,
                                    scale: 1,
                                    x: mousePosition.x * 0.5,
                                    y: mousePosition.y * 0.5
                                }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    opacity: { duration: 0.18 },
                                    scale: { duration: 0.18 },
                                    x: { duration: 0.12, ease: "easeOut" },
                                    y: { duration: 0.12, ease: "easeOut" }
                                }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Desktop - Right face (face) */}
                    <AnimatePresence mode="wait">
                        {activeFace === 'face' && (
                            <motion.img
                                key="face-desktop"
                                src={face}
                                alt="background-right"
                                className="hidden md:block absolute right-[-6%] transform -translate-y-1/2 w-[40rem] max-w-[45vw] object-cover filter"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{
                                    opacity: opacity,
                                    scale: 1,
                                    x: mousePosition.x * -0.5,
                                    y: mousePosition.y * 0.5
                                }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{
                                    opacity: { duration: 0.5 },
                                    scale: { duration: 0.5 },
                                    x: { duration: 0.3, ease: "easeOut" },
                                    y: { duration: 0.3, ease: "easeOut" }
                                }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Mobile - Left face (face2) */}
                    <AnimatePresence mode="wait">
                        {activeFace === 'face2' && (
                            <motion.img
                                key="face2-mobile"
                                src={face2}
                                alt="background-left-sm"
                                className="md:hidden absolute left-0 bottom-2 w-40 object-cover filter blur-md"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: opacity * 0.24,
                                    x: mousePosition.x * 0.3,
                                    y: mousePosition.y * 0.3
                                }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    opacity: { duration: 0.5 },
                                    x: { duration: 0.3, ease: "easeOut" },
                                    y: { duration: 0.3, ease: "easeOut" }
                                }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Mobile - Right face (face) */}
                    <AnimatePresence mode="wait">
                        {activeFace === 'face' && (
                            <motion.img
                                key="face-mobile"
                                src={face}
                                alt="background-right-sm"
                                className="md:hidden absolute right-0 bottom-2 w-40 object-cover filter blur-md"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: opacity * 0.24,
                                    x: mousePosition.x * -0.3,
                                    y: mousePosition.y * 0.3
                                }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    opacity: { duration: 0.5 },
                                    x: { duration: 0.3, ease: "easeOut" },
                                    y: { duration: 0.3, ease: "easeOut" }
                                }}
                            />
                        )}
                    </AnimatePresence>
                </div>

                {/* Autoplay attempted on mount; no manual play button per request */}

                {/* Profile Image */}
                <motion.div
                    className="p-1 mb-6 bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 rounded-full w-48 h-48 overflow-hidden hover:shadow-[0_0_15px_6px_rgba(128,90,213,0.7),0_0_25px_10px_rgba(59,130,246,0.7)] transition-shadow duration-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                        src={profileImg}
                        alt="Profile of G.A.P. Pathum"
                        loading="lazy"
                        onMouseEnter={() => setProfileImg(prof1)}
                        onMouseLeave={() => setProfileImg(profimg)}
                    />
                </motion.div>


                {/*
                                  Typing animation for the three lines below.
                                  Uses existing useState/useEffect imports above.
                                */}
                {(() => {
                    const lines = ["Hello World!", "I'm G.A.P. Pathum", "Full Stack Developer"];
                    const [displayedLines, setDisplayedLines] = useState(['', '', '']);
                    const [currentLine, setCurrentLine] = useState(0);
                    const [showCursor, setShowCursor] = useState(true);

                    // Typing effect
                    useEffect(() => {
                        let timeout;
                        // if all lines done, stop
                        if (currentLine >= lines.length) return;
                        const target = lines[currentLine];
                        const current = displayedLines[currentLine] || '';

                        if (current.length < target.length) {
                            // type next char
                            timeout = setTimeout(() => {
                                setDisplayedLines(prev => {
                                    const copy = [...prev];
                                    copy[currentLine] = current + target[current.length];
                                    return copy;
                                });
                            }, 70 + Math.random() * 80); // slight randomness
                        } else {
                            // finished this line, pause then move to next
                            timeout = setTimeout(() => setCurrentLine(c => c + 1), 600);
                        }

                        return () => clearTimeout(timeout);
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                    }, [displayedLines, currentLine]);

                    // Cursor blink
                    useEffect(() => {
                        const iv = setInterval(() => setShowCursor(s => !s), 500);
                        return () => clearInterval(iv);
                    }, []);

                    // Ensure we don't re-run the above IIFE logic on every render by returning JSX
                    return (
                        <>
                            <motion.h1
                                className="text-white text-center text-2xl font-bold"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                {displayedLines[0]}
                                {currentLine === 0 && <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>}
                            </motion.h1>

                            <motion.h2
                                className="text-white text-center text-2xl font-bold mt-4"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                {displayedLines[1]}
                                {currentLine === 1 && <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>}
                            </motion.h2>

                            <motion.div
                                className="text-white text-center text-xl font-medium mt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <div className="h-8">
                                    {displayedLines[2]}
                                    {currentLine === 2 && <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>}
                                </div>
                            </motion.div>
                        </>
                    );
                })()}

                {/* Social Icons */}
                <motion.div
                    className="flex justify-center mt-6 gap-7"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300 text-white text-3xl"
                        aria-label="GitHub"
                    >
                        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300 text-white text-3xl"
                        aria-label="LinkedIn"
                    >
                        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300 text-white text-3xl"
                        aria-label="Instagram"
                    >
                        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
                    </a>
                    <a
                        href="https://behance.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300 text-white text-3xl"
                        aria-label="Behance"
                    >
                        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                        </svg>
                    </a>
                </motion.div>

                { /* Buttons */}
                <motion.div
                    className="flex flex-col md:flex-row justify-center mt-9 md:mt-6 gap-4 md:gap-10"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                >
                    {/* Contact - futuristic glowing button */}
                    <div className="relative group">
                        <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 blur-2xl opacity-60 animate-pulse pointer-events-none" />
                        <button
                            onClick={navigateToContact}
                            className="relative z-10 px-8 py-3 rounded-xl text-white/80 font-medium transform transition duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-400/30
                                                       bg-black/30 backdrop-blur-sm border border-white/10
                                                       group-hover:shadow-[0_0_30px_rgba(168,85,247,0.28),0_0_60px_rgba(99,102,241,0.18)]"
                            aria-label="Contact Me"
                        >
                            {/* gradient fill that expands on hover */}
                            <span
                                className="absolute inset-0 rounded-xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(236,72,153,0.18), rgba(168,85,247,0.18), rgba(59,130,246,0.12))'
                                }}
                            />
                            <span className="absolute inset-0 rounded-xl bg-white/5 pointer-events-none" />
                            <span className="relative z-20 flex items-center justify-center gap-2 text-white/70 group-hover:text-white transition-colors duration-300">
                                Contact Me
                            </span>
                        </button>
                    </div>

                    {/* Resume - futuristic glowing button */}
                    <div className="relative group">
                        <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-600 to-pink-500 blur-2xl opacity-60 animate-pulse pointer-events-none" />
                        <button
                            onClick={handleDownloadCV}
                            className="relative z-10 px-8 py-3 rounded-xl text-white/80 font-medium transform transition duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400/30
                                                       bg-black/30 backdrop-blur-sm border border-white/10
                                                       group-hover:shadow-[0_0_30px_rgba(99,102,241,0.28),0_0_60px_rgba(236,72,153,0.14)]"
                            aria-label="My Resume"
                        >
                            {/* gradient fill that expands on hover */}
                            <span
                                className="absolute inset-0 rounded-xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(99,102,241,0.14), rgba(139,92,246,0.16), rgba(236,72,153,0.12))'
                                }}
                            />
                            <span className="absolute inset-0 rounded-xl bg-white/5 pointer-events-none" />
                            <span className="relative z-20 flex items-center justify-center gap-2 text-white/70 group-hover:text-white transition-colors duration-300">
                                My Resume
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Scroll Arrow */}
                <div className="flex justify-center mt-4">
                    <motion.div
                        className="flex justify-center mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, -10, 0] }}
                        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'loop' }}
                    >
                        <a
                            href="#myself"
                            className="hover:scale-150 transition-transform duration-300 cursor-pointer"
                            aria-label="Scroll to Myself"
                        >
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
        </>
    );
}

export default Landing;