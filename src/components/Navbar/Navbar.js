import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header className="nav-section">
    <h1>Math Magicians</h1>
    <nav>
      <ul className="nav-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="quote-li">
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
