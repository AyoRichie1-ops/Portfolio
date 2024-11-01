// SocialButtons.jsx
import React from 'react';
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const SocialButtons = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mx-auto container pt-[2rem] lg:pt-[8rem] pb-[2rem] lg:pb-[6rem] sm:flex sm:space-x-4">
            <a
                href="mailto:onanusiabdullateef@gmail.com"
                className="flex items-center px-3 py-2 lg:py-3 lg:px-7 border-2 border-[#771fdbf8] rounded-md text-sm font-extralight transition duration-900"
            >
                <i className="mr-2"><IoMail className='text-[20px]' /></i> Send an email
            </a>
            <a
                href="https://www.linkedin.com/in/abdul-lateef-onanusi-080b03303/"
                className="flex items-center px-4 py-2 lg:py-3 lg:px-7 border-2 border-[#33ee77] rounded-md text-sm font-extralight transition duration-900"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-linkedin mr-2"><FaLinkedinIn className='text-[20px]' /></i> LinkedIn
            </a>
            <a
                href="https://www.upwork.com/freelancers/~019985a996a5645412"
                className="flex items-center px-4 py-2 lg:py-3 lg:px-7 border-2 border-[#e14f15e4] rounded-md text-sm font-extralight transition duration-900"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="mr-2"><FaUpwork className='text-[20px]' /></i> Upwork
            </a>
            <a
                href="https://github.com/AyoRichie1-ops"
                className="flex items-center px-4 py-2 lg:py-3 lg:px-7 border-2 border-purple-500 rounded-md text-sm font-extralight transition duration-900"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="mr-2"><FaGithub className='text-[20px]' /></i> GitHub
            </a>
        </div>
    );
};

export default SocialButtons;
