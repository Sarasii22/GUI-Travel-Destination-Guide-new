import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className = 'nav '>
      <div className="Name">Ceylon Bliss</div>
      <div className="navigation">
        <ul >
          <li><Link to='/hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='/about' smooth={true} offset={0} duration={500}>About</Link></li>
          <li><Link to='/popular' smooth={true} offset={0} duration={500}>Popular</Link></li>
          <li><Link to='/packages' smooth={true} offset={0} duration={500}>Packages</Link></li>
          <li><Link to='/tours' smooth={true} offset={0} duration={500}>Tours</Link></li>
          <li><Link to='/contacts' smooth={true} offset={0} duration={500}>Contact</Link></li>
          
        </ul>
      </div>
      

      

    </nav>
  );
}

export default Navbar;
