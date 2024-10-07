import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Ensure Home is imported
import About from './components/Abouts';
import Contact from './components/Contacts'; // Make sure 'components' and 'Contact' are correctly cased.
import Experience from './components/Experiences';
//import Skills from './Skills';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


        
         
        
