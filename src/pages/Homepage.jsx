import React from 'react';
import HeroSection from '../components/HeroSection';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Homepage = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            <HeroSection darkMode={darkMode} />
            <Experience darkMode={darkMode} />
            <hr />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} />
        </div>
    );
};

export default Homepage;
