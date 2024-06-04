import React from 'react';
import ThemeContext from './context/ThemeContext';
import { theme } from './style/theme';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Services from './page/Services';
import './global.css';
function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
