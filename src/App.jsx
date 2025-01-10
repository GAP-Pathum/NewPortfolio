import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Loading from "./components/Loading"; // Ensure correct path
import Landing from "./pages/Landing";
import Myself from "./components/myself";
import Education from "./components/Education";
import ParticlesBackground from "./components/ParticlesBackground";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading process
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Adjust time as needed (3 seconds here)
        return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="relative bg-black min-h-screen overflow-hidden">
            <ParticlesBackground />
            <div className="relative z-10">
                <Landing />
                <Myself />
                <Education />
            </div>
        </div>
    );
};

export default App;
