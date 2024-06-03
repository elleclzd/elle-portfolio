import React from 'react';
import ThemeContext from './context/ThemeContext';
import { theme } from './style/theme';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home'; 
import Services from './page/Services';
function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div style={{ margin: 0, padding: 0 }}>
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
