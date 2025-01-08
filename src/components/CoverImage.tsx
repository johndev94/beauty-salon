import React from "react";
import "./CoverImage.css"; // Include your CSS file for styles
import Button from "./button/button";
import cover from "../assets/images/cover.jpg";

import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

interface CoverImageProps {
  altText: string;
  children?: React.ReactNode;
}



const CoverImage: React.FC<CoverImageProps> = ({ altText }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="cover-image-container"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="cover-image-overlay">
          <div id="bannerText">
            <h1>{altText}</h1>
            <div className="button-container">
              <Button text="Book Now" onClick={() => navigate("/contact-us")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverImage;
