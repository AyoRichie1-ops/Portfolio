import React from 'react';
import SocialButtons from '../components/SocialButton';

const HeroSection = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-[#222121] text-white" : "bg-white text-black"} font-itim p-[1rem] md:p-8`}>
            <div className='mx-auto container pt-[80px]'>
                <h6 className='font-medium text-[20px] mb-3'>
                    Hey,I'm
                </h6>
                <p class="text-transparent sm:hidden bg-clip-text bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] font-bold text-4xl mb-5">
                    Onanusi<br /> Abdul- Lateef
                </p>
                <p class="text-transparent hidden sm:block bg-clip-text bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] font-bold text-[56px]">
                    Onanusi Abdul- Lateef
                </p>
                <h2 className='font-semibold text-[20px]'>
                    A Front-End developer based in Lagos, Nigeria and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
                </h2>
            </div>
            <SocialButtons />
        </div>
    );
};

export default HeroSection;
