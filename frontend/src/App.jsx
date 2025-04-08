import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ImageClassifierPage from './Pages/ImageClassifierPage';
const App = () => {
  return (
    <Router>
    <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/test" element={<ImageClassifierPage />} />
          </Routes>
    </Router>
  );
};

export default App;