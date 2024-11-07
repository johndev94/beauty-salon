import React from "react";
import "./CoverImage.css"; // Include your CSS file for styles

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
          <div id="bannerText"><h1>{altText}</h1></div>
        </div>
      </div>
      <img
        className="cover-bottom-border"
        src="src/assets/images/banner-border.png"
        width="1161"
        height="81"
        alt="Banner border"
      ></img>
    </>
  );
};

export default CoverImage;
