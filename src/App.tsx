import { useState } from "react";
import MainNavigation from "./components/MainNavigation";
import "./App.css";
import CoverImage from "./components/CoverImage";
import coverImage from "./assets/images/cover.jpg";
import MultiPanels from "./components/MultiPanels";

function App() {
  return (
    <>
      <MainNavigation />
      <CoverImage
        imageSrc="src/assets/images/cover.jpg"
        altText="Book your appointment today"
      />
      <MultiPanels />
    </>
  );
}

export default App;
