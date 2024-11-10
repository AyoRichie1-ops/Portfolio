import React from 'react';
import SocialButtons from '../components/SocialButton';

const HeroSection = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-[#222121] text-white" : "bg-white text-black"} font-itim p-[1rem] md:p-8`}>
            <div className='mx-auto container pt-[80px]'>
                <h6 className='font-semibold text-[20px] mb-3'>
                    Hey,I'm
                </h6>
                <p class="text-transparent sm:hidden bg-clip-text bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] font-bold text-4xl mb-5">
                    Onanusi<br /> Abdul- Lateef
                </p>
                <p class="text-transparent hidden sm:block bg-clip-text bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] font-bold text-[56px]">
                    Onanusi Abdul- Lateef
                </p>
                <h2 className='font-semibold text-[20px]'>
                    A Full-Stack Developer based in Lagos, Nigeria. And also a Communication and Journalism student. Self-motivated and skilled in both independent and team-based roles, with strong organizational abilities. Proficient in front-end development, creating user-centered websites using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and Node.js with React. Experienced in assessing client needs and enhancing design usability and performance.
                </h2>
            </div>
            <SocialButtons />
        </div>
    );
};

export default HeroSection;
