import React from 'react';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
        const [menuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        };

        return (

            <div className='header flex items-center w-full p-4 relative shadow-lg'>
                <img src={logo} alt='logo' className='mr-4 w-20 h-20' />
                <div className='ml-auto flex flex-col justify-between w-8 h-8 cursor-pointer' onClick={toggleMenu}>
                {menuOpen ? <FaTimes className='text-white' /> : <FaBars className='text-white' size={30} />}
                </div>
                <div
                className={`fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center z-50 transition-transform duration-500 ease-in-out ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                >
                <button className='absolute top-4 right-4 text-white' onClick={toggleMenu}>
                    <FaTimes size={30} />
                </button>
                <nav className='flex flex-col items-center space-y-4'>
                    <img src={logo} alt='logo' className='w-20 h-20' />
                    <a href='#myself' className='text-white text-2xl hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-gradient-to-r hover:from-purple-400 hover:to-blue-500' onClick={toggleMenu}>Myself</a>
                    <a href='#projects' className='text-white text-2xl hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-gradient-to-r hover:from-purple-400 hover:to-blue-500' onClick={toggleMenu}>Projects</a>
                    <a href='#skills' className='text-white text-2xl hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-gradient-to-r hover:from-purple-400 hover:to-blue-500' onClick={toggleMenu}>Skills</a>
                    <a href='#contact' className='text-white text-2xl hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-gradient-to-r hover:from-purple-400 hover:to-blue-500' onClick={toggleMenu}>Contact</a>
                </nav>
                </div>
            </div>
        );

};

export default Header;
