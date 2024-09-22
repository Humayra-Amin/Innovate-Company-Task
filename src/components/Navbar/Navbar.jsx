"use client"
import { useState } from 'react';
import { FaSearch, FaChevronDown, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-[#363636] text-white py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center">

            {/* Hamburger */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    <FaBars className="text-xl" />
                </button>
            </div>

            {/* Navigation */}
            <div className={`space-x-0 md:space-x-10 lg:space-x-28 text-lg flex flex-col md:flex-row items-center justify-center absolute md:static w-[50%] md:w-auto bg-[#363636] md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'top-[85px]' : 'top-[-300px]'}`}>
                <a href="#home" className="flex items-center space-x-3 py-2 md:py-0">
                    <span>Home</span>
                    <FaChevronDown className="text-xs" />
                </a>
                <a href="#event" className="flex items-center space-x-2 py-2 md:py-0">
                    <span>Event</span>
                    <FaChevronDown className="text-xs" />
                </a>
                <a href="#contact" className="flex items-center space-x-2 py-2 md:py-0">
                    <span>Contact</span>
                    <FaChevronDown className="text-xs" />
                </a>
                <a href="#blog" className="flex items-center space-x-2 py-2 md:py-0">
                    <span>Blog</span>
                    <FaChevronDown className="text-xs" />
                </a>
            </div>

            {/* Search */}
            <div className="flex items-center bg-white rounded-full w-[200px] md:w-[200px] mt-4 md:mt-0">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-[#000000] placeholder-gray-300 p-2 text-sm md:text-xl w-full"
                />
                <FaSearch className="text-black w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 p-2"/>
            </div>
        </div>
    );
};

export default Navbar;
