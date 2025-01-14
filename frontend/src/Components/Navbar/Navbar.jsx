import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className = 'nav '>
      <div className="Name">Ceylon Bliss</div>
      <div className="navigation">
        <ul >
          <li>Home</li>
          <li>About</li>
          <li>Popular</li>
          <li>Packages</li>
          <li>Blogs</li>
          <li>Tours</li>
        </ul>
      </div>
      

      

    </nav>
  );
}

export default Navbar;
