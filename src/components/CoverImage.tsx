import React from "react";
import "./CoverImage.css"; // Include your CSS file for styles
import Button from "./button/button";


import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

interface CoverImageProps {
  altText: string;
  image: string;
  button?: boolean;
  buttonLink?: string; // Link for the button
  children?: React.ReactNode;
}

const CoverImage: React.FC<CoverImageProps> = ({ altText, image, button, buttonLink = "/contact-us" }) => {
  const navigate = useNavigate();

  // Navigate only if buttonLink is defined and valid
  const handleButtonClick = () => {
    if (buttonLink) {
      navigate(buttonLink);
    }
  };

  return (
    <>
      <div
        className="cover-image-container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="cover-image-overlay">
          <div id="bannerText">
            <h1>{altText}</h1>
            <div className="button-container">
              {/* Conditionally render the button */}
              {button && (
                <Button text="Book Now" onClick={handleButtonClick} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverImage;
