import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Homepage from './pages/Homepage.jsx';
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
        <hr />
        <Routes>
          <Route path="/" element={<Homepage darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
