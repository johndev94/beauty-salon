import React from "react";
import "./CoverImage.css"; // Include your CSS file for styles
import Button from "./button/button";

interface CoverImageProps {
  imageSrc: string;
  altText: string;
  children?: React.ReactNode;
}

const CoverImage: React.FC<CoverImageProps> = ({
  imageSrc,
  altText,
  children,
}) => {
  return (
    <>
      <div
        className="cover-image-container"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="cover-image-overlay">
          <div id="bannerText">
            <h1>{altText}</h1>
            <Button text="Book Now" onClick={() => alert("Book Now")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverImage;
