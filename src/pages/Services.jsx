// Services.js
import React from 'react';

const Services = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            <h1>Our Services</h1>
            <p>Details about services offered.</p>
        </div>
    );
};

export default Services;
