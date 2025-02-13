import React, { useState, useEffect, Suspense, lazy } from "react";
import "tailwindcss/tailwind.css";
import Loading from "./components/Loading";
import ParticlesBackground from "./components/ParticlesBackground";

// Lazy load components to reduce the initial bundle size
const Header = lazy(() => import("./components/Header/Header"));
const Landing = lazy(() => import("./components/Landing"));
const Myself = lazy(() => import("./components/Myself"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading process
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100); // Reduced timeout for quicker feedback
        return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="relative bg-black min-h-screen overflow-hidden">
            <ParticlesBackground />
            <div className="relative z-10">
                {/* Use React Suspense for lazy-loaded components */}
                <Suspense fallback={<Loading />}>
                    <Header />
                    <Landing />
                    <Myself />
                    <Education />
                    <Skills />
                    <Projects />
                    <Contact />
                </Suspense>
            </div>
        </div>
    );
};

export default App;
