import React from "react";
import "./ImageWithDescription.css";

interface ImageWithDescriptionProps {
  imageUrl: string;
  altText: string;
  description: React.ReactNode;
}

const ImageWithDescription: React.FC<ImageWithDescriptionProps> = ({
  imageUrl,
  altText,
  description,
}) => {
  return (
    <div className="image-with-description">
      <img src={imageUrl} alt={altText} className="image" />
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageWithDescription;
