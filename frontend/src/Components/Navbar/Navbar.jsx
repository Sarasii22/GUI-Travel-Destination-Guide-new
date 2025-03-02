/*import React from 'react';
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


*/

import React from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import icon from '../../assets/icons/menu-icon.png';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const isHomePage = location.pathname === '/'; // Check if the current page is the homepage

  return (
    <nav className="nav">
      <div className="Name">Ceylon Bliss</div>
      <div className="navigation">
        <ul className={mobileMenu ? 'nav-links-mobile' : 'nav-links'}>
          <li>
            {isHomePage ? (
              <ScrollLink to="hero" smooth={true} offset={-70} duration={500} onClick={closeMenu}>
                Home
              </ScrollLink>
            ) : (
              <RouterLink to="/" onClick={closeMenu}>
                Home
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink to="about" smooth={true} offset={-70} duration={500} onClick={closeMenu}>
                About
              </ScrollLink>
            ) : (
              <RouterLink to="/about" onClick={closeMenu}>
                About
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink to="popular" smooth={true} offset={-70} duration={500} onClick={closeMenu}>
                Tours
              </ScrollLink>
            ) : (
              <RouterLink to="/tours" onClick={closeMenu}>
                Tours
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
                <ScrollLink to="gallery" smooth={true} offset={-70} duration={500} onClick={closeMenu}>
                  Gallery
                </ScrollLink>
                ) : (
                <RouterLink to="/gallery" onClick={closeMenu}>
                  Gallery
                </RouterLink>
            )}

          </li>
          <li>
            {isHomePage ? (
                <ScrollLink to="contacts" smooth={true} offset={-70} duration={500} onClick={closeMenu}>
                  Contact
                </ScrollLink>
              ) : (
                <RouterLink to="/contact" onClick={closeMenu}>
                  Contact
                </RouterLink>
            )}
            
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
