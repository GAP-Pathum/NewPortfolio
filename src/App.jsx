import React from "react";
import "tailwindcss/tailwind.css";
import Landing from "./pages/Landing";
import ParticlesBackground from "./components/ParticlesBackground";

const App = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10">
        <Landing />
      </div>
    </div>
  );
};

export default App;
