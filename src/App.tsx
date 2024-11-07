import { useState } from "react";
import MainNavigation from "./components/MainNavigation";
import "./App.css";
import CoverImage from "./components/CoverImage";
import coverImage from "./assets/images/cover.jpg";
import MultiPanels from "./components/MultiPanels";
import Button from "./components/button/button";

function App() {
  return (
    <>
      <MainNavigation />
      <CoverImage
        imageSrc="src/assets/images/cover.jpg"
        altText="Book your appointment today"
      />
      <img className="cover-bottom-border" src="src/assets/images/banner-border.png" width="100%" height="120" alt="Banner border" />
      <MultiPanels />
    </>
  );
}

export default App;
