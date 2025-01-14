import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className = 'nav '>
      <div className="Name">Ceylon Bliss</div>
      <div className="navigation">
        <ul >
          <li>Home</li>
          <li>About</li>
          <li>Popular</li>
          <li>Packages</li>
          <li>Blogs</li>
        </ul>
      </div>
      

      <div>
        <button>Login</button>
      </div>

    </div>
  );
}

export default Navbar;
