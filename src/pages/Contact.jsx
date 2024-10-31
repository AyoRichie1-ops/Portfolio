// Services.js
import React from 'react';

const Contact = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} p-6`}>
            <h1>Our Services</h1>
            <p>Details about services offered.</p>
        </div>
    );
};

export default Contact;
