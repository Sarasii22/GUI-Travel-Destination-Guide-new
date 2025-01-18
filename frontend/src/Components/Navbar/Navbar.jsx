import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import icon from '../../assets/icons/menu-icon.png';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className="nav">
      <div className="Name">Ceylon Bliss</div>
      <div className="navigation">
        <ul className={mobileMenu ? 'nav-links-mobile' : 'nav-links'}>
          <li>
            <Link to="hero" smooth={true} offset={-70} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-70} duration={500} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="popular" smooth={true} offset={-70} duration={500} onClick={closeMenu}>
              Popular
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} offset={-70} duration={500} onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="contacts" smooth={true} offset={-70} duration={500} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <img
          src={icon}
          alt="Toggle menu"
          className="menu-icon"
          onClick={toggleMenu}
          aria-expanded={mobileMenu}
          aria-label="Toggle navigation menu"
        />
      </div>
    </nav>
  );
};

export default Navbar;


