import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HeroSection from './components/Hero';
import ImageClassifierPage from './components/ImageClassifierPage';

const HomePage = ({ darkMode, toggleDarkMode }) => (
  <>
    <HeroSection />
  </>
);

const App = () => {
  return (
    <Router>
    <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<ImageClassifierPage />} />
          </Routes>
    </Router>
  );
};

export default App;