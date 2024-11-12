import React from "react";
import "./button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  color = "#93731f",
}) => {
  return (
    <button
      className="fancy-button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
