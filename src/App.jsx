import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Homepage from './pages/Homepage.jsx';
import Services from './pages/Services.jsx'; // Example additional page
import About from './pages/About.jsx'; // Example additional page
import Contact from './pages/Contact.jsx'; // Example additional page

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Homepage darkMode={darkMode} />} />
          <Route path="/services" element={<Services darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
