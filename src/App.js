import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calcul from './components/Calculator/calculator';
import './components/Calculator/calculator.css';
import Nav from './components/Navbar/Navbar';
import Quote from './components/Quote/Quote';
import Home from './components/Home/Home';

const App = () => (
  <Router>
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calcul />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </main>
  </Router>
);

export default App;
