import React from 'react';
import HeroSection from '../components/HeroSection';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import ProjectList from '../components/Project';
import Footer from '../components/Footer';

const Homepage = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} `}>
            <HeroSection darkMode={darkMode} />
            <Experience darkMode={darkMode} />
            <hr />
            <Skills darkMode={darkMode} />
            <ProjectList darkMode={darkMode} />
            <hr />
            <Footer darkMode={darkMode} />
        </div>
    );
};

export default Homepage;
