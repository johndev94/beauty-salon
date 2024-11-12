import React, { useState } from "react";
import "./MainNavigation.css";
import icon from "../assets/images/logo.png"; // Adjust path as necessary

const MainNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav id="dropdownnav" className={`stroke ${isMenuOpen ? 'active' : ''}`}>
      <div className="burger-menu" onClick={toggleMenu}>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </div>
      <img className="logo" src={icon} alt="Logo" />
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about-us">Team</a></li>
        <li><a href="/treatments">Treatments</a></li>
        <li><a href="/gift-vouchers">Gift Vouchers</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
        <li><a href="http://phore.st/X3gQd">Online Store</a></li>
        <li>
          Tel:{" "}
          <a id="number" href="tel:+3538313713788">
            +353 (0) 83 137 13788
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
