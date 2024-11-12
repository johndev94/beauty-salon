import React from "react";
import "./CoverImage.css"; // Include your CSS file for styles
import Button from "./button/button";
import cover from "../assets/images/cover.jpg";

interface CoverImageProps {
  altText: string;
  children?: React.ReactNode;
}

const CoverImage: React.FC<CoverImageProps> = ({ altText }) => {
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
              <Button text="Book Now" onClick={() => alert("Book Now")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverImage;
