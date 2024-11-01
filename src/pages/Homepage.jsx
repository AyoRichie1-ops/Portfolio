import React from 'react';
import HeroSection from '../components/HeroSection';
import Experience from '../components/Experience';

const Homepage = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            <HeroSection darkMode={darkMode} />
            <Experience darkMode={darkMode} />
        </div>
    );
};

export default Homepage;
