import React from "react";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import icon from "../../assets/icons/menu-icon.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const location = useLocation(); // Get current route
  const isLoggedIn = !!localStorage.getItem("token"); // Check if token exists

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const isHomePage = location.pathname === "/"; // Check if on public Home page

  return (
    <nav className="nav">
      <div className="Name">Ceylon Bliss</div>
      <div className="navigation">
        <ul className={mobileMenu ? "nav-links-mobile" : "nav-links"}>
          <li>
            {/* Home link: If logged in, go to /loginhome; otherwise, go to / */}
            {isHomePage && !isLoggedIn ? (
              <ScrollLink
                to="hero"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </ScrollLink>
            ) : (
              <RouterLink
                to={isLoggedIn ? "/loginhome" : "/"}
                onClick={closeMenu}
              >
                Home
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
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
              <ScrollLink
                to="popular"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
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
              <ScrollLink
                to="gallery"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
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
              <ScrollLink
                to="contacts"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
              >
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