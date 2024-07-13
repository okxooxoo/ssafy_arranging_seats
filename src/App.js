import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Config from './pages/Config';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Config />} />
          <Route path="/result" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
