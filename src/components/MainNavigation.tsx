import React, { useState } from "react";
import "./MainNavigation.css";
import icon from "../assets/images/logo.png"; // Adjust path as necessary
import { Link } from "react-router-dom";

const MainNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    console.log("Menu toggled:", !isMenuOpen); // Debugging line
  };

  return (
    <nav id="dropdownnav" className={`stroke ${isMenuOpen ? "active" : ""}`}>
      <div className="burger-menu" onClick={toggleMenu}>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </div>
      <img className="logo" src={icon} alt="Logo" />
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">Team</Link>
        </li>
        <li>
          <Link to="/treatments">Treatments</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
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
