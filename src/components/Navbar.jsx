import React, { useState } from 'react';
import { MdLightMode } from "react-icons/md";
import { WiMoonWaningCrescent4 } from "react-icons/wi";
import { Link } from 'react-router-dom';
import img1 from '../assets/resume.png';
import jsPDF from 'jspdf';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const downloadResumeAsPDF = () => {
        const pdf = new jsPDF();
        pdf.addImage(img1, 'PNG', 10, 10, 180, 240); // Adjust position and size as needed
        pdf.save('Lateef_Resume.pdf');
    };

    return (
        <nav className={`sticky top-0 z-10 ${darkMode ? "bg-[#222121] text-white" : "bg-gray-100 text-gray-800"} p-4 font-itim`}>
            <div className="container mx-auto flex justify-between items-center w-[91%]">
                <Link to='/'>
                    <div className="text-2xl font-extrabold">OA .</div>
                </Link>

                <button onClick={toggleDarkMode} className="lg:hidden ml-[20px]">
                    {darkMode ? <MdLightMode size={24} /> : <WiMoonWaningCrescent4 className="text-black" size={24} />}
                </button>

                <div className="hidden lg:flex space-x-8">
                    {/* <button
                        onClick={downloadResumeAsPDF}
                        className="text-lg font-semibold"
                    >
                        Resume
                    </button> */}
                    <Link className='text-lg font-semibold' target='_blank' to='https://drive.google.com/file/d/18UOl2HuZSNLrb_DoZZ3hhLB8jKSlWEHu/view?usp=drive_link'>
                        Resume
                    </Link>
                    <Link to="/contact" className="hover:text-gray-500 font-semibold text-lg">Contact</Link>
                    <button onClick={toggleDarkMode}>
                        {darkMode ? <MdLightMode size={24} /> : <WiMoonWaningCrescent4 className="text-black" size={24} />}
                    </button>
                </div>

                <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden mt-2 text-center">
                    <button
                        onClick={downloadResumeAsPDF}
                        className="block w-full px-4 py-2"
                    >
                        Resume
                    </button>
                    <Link to="/contact" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
