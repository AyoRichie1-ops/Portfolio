import React from 'react';
import HeroSection from '../components/HeroSection';

const Homepage = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} p-6`}>
            <HeroSection darkMode={darkMode} />
        </div>
    );
};

export default Homepage;
