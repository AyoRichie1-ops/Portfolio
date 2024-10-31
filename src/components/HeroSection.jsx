import React from 'react';

const HeroSection = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} `}>
            <div className='mx-auto container mt-[50px]'>
                <h6 className='font-medium text-[18px] mb-3'>
                    Hey,I'm
                </h6>
                <p class="text-transparent sm:hidden bg-clip-text bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] font-bold text-4xl mb-5">
                    Onanusi<br /> Abdul- Lateef
                </p>
                <p class="text-transparent hidden sm:block bg-clip-text bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] font-bold text-[56px]">
                    Onanusi Abdul- Lateef
                </p>
                <h2>
                    I'm a Front-End developer based in Lagos, Nigeria and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
                </h2>
            </div>
        </div>
    );
};

export default HeroSection;
