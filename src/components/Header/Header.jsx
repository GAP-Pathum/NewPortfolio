import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='header flex fixed items-center w-full p-4 relative shadow-lg z-10'>
            <img src={logo} alt='logo' className='mr-4 w-20 h-20' />
            <div className='ml-auto flex flex-col justify-between w-8 h-8 cursor-pointer' onClick={toggleMenu}>
                {menuOpen ? <FaTimes className='text-white' size={30} /> : <FaBars className='text-white' size={30} />}
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
                    <a href='#myself' className='text-white text-2xl hover:underline' onClick={(e) => { e.preventDefault(); document.getElementById('myself').scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}>Myself</a>
                    <a href='#skills' className='text-white text-2xl hover:underline' onClick={(e) => { e.preventDefault(); document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}>TechStacks</a>
                    <a href='#projects' className='text-white text-2xl hover:underline' onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}>Projects</a>
                    <a href='#contact' className='text-white text-2xl hover:underline' onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}>Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
