import React from "react";
import "./ImageWithDescription.css";
import cos1 from "../src/assets/images/cos1.jpg";

interface ImageWithDescriptionProps {
  altText: string;
  description: React.ReactNode;
}

const ImageWithDescription: React.FC<ImageWithDescriptionProps> = ({
  altText,
  description,
}) => {
  return (
    <div className="image-with-description">
      <img src={cos1} alt={altText} className="image" />
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageWithDescription;
