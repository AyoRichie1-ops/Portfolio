import React, { useState } from 'react';
import { MdLightMode } from "react-icons/md";
import { WiMoonWaningCrescent4 } from "react-icons/wi";
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`${darkMode ? "bg-zinc-950 text-white" : "bg-gray-100 text-gray-800"} p-4`}>
            <div className="container mx-auto flex justify-between items-center w-[91%]">
                <Link to='/'>
                    <div className="text-2xl font-bold">OA</div>
                </Link>

                <button onClick={toggleDarkMode} className="lg:hidden ml-[20px]">
                    {darkMode ? <MdLightMode size={24} /> : <WiMoonWaningCrescent4 className="text-black" size={24} />}
                </button>

                <div className="hidden lg:flex space-x-8">
                    {/* <Link to="/services" className="hover:text-gray-500 font-semibold">Services</Link>
                    <Link to="/about" className="hover:text-gray-500 font-semibold">About</Link>
                    <Link to="/contact" className="hover:text-gray-500 font-semibold">Contact</Link> */}
                    <button onClick={toggleDarkMode}>
                        {darkMode ? <MdLightMode size={24} /> : <WiMoonWaningCrescent4 className="text-black" size={24} />}
                    </button>
                </div>

                {/* <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button> */}
            </div>

            {/* {isOpen && (
                    <div className="lg:hidden mt-2">
                        <Link to="/services" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Services</Link>
                        <Link to="/about" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">About</Link>
                        <Link to="/contact" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</Link>
                    </div>
                )} */}
        </nav>
    );
};

export default Navbar;
