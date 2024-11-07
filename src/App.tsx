import { useState } from "react";
import MainNavigation from "./components/MainNavigation";
import "./App.css";
import CoverImage from "./components/CoverImage";
import coverImage from "./assets/images/cover.jpg";

function App() {
  return (
    <>
      <MainNavigation />
      <CoverImage
        imageSrc="src/assets/images/cover.jpg"
        altText="Book your appointment today"
      />
    </>
  );
}

export default App;
