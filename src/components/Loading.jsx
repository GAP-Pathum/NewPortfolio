import React from 'react';
import logo from '../assets/logo.png';

const Loading = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
            <img
                src={logo}
                alt="Loading Logo"
                className="w-48 h-48 animate-pulse mb-8"
            />
            <div className="flex space-x-2 text-white text-4xl font-bold">
                {"LOADING".split("").map((letter, index) => (
                    <span
                        key={index}
                        className="animate-bounce"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Loading;
