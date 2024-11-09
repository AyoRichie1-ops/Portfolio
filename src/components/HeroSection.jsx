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
                    A Front-End developer based in Lagos, Nigeria and also a communication and journalism student. A Self-directed Work Study Student motivated to apply education and experience in job role. Excellent listener comfortable completing various tasks to keep operations running smoothly. Enthusiastic Student with superior skills in working in both team-based and independent capacities. Bringing strong work ethic and excellent organizational skills to any setting. Excited to bring above average user skills in information technology and social media. Proficient front-end developer effective at creating robust websites that meet customer objectives. Experienced in collaborating with clients to assess needs, develop plans, and enhance design usability and performance. Skilled in using html, css, javascript, bootstrap, tailwindcss as well as other resources to fulfill design requirements.
                </h2>
            </div>
            <SocialButtons />
        </div>
    );
};

export default HeroSection;
