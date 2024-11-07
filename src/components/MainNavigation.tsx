import React from "react";
import "./MainNavigation.css";
import icon from "../assets/images/icon.png"; // Adjust path as necessary

const MainNavigation: React.FC = () => {
  return (
    <nav id="dropdownnav" className="stroke">
      <ul>
        <img className="logo" src={icon}></img>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-us">Team</a>
        </li>
        <li>
          <a href="/treatments">Treatments</a>
        </li>
        <li>
          <a href="/gift-vouchers">Gift Vouchers</a>
        </li>
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
        <li>
          <a href="http://phore.st/X3gQd">Online Store</a>
        </li>
        <li>
          Tel:{" "}
          <a id="number" href="tel:+4402830267606">
            +44 (0)28 30 267606
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
