import { useState } from "react";
import MainNavigation from "./components/MainNavigation";
import "./App.css";
import CoverImage from "./components/CoverImage";
import coverImage from "./assets/images/cover.jpg";
import MultiPanels from "./components/MultiPanels";
import Button from "./components/button/button";
import ImageWithDescription from "./components/ImageWithDescription/ImageWithDescription";

function App() {
  return (
    <>
      <MainNavigation />
      <CoverImage
        imageSrc="src/assets/images/cover.jpg"
        altText="Book your appointment today"
      />
      <img
        className="cover-bottom-border"
        src="src/assets/images/banner-border.png"
        width="100%"
        height="120"
        alt="Banner border"
      />
      <MultiPanels />
      <Button text="See all Treatments" onClick={() => alert("Book Now")} />
      <div style={{ padding: "20px" }}>
        <ImageWithDescription
          imageUrl="src/assets/images/cos1.jpg"
          altText="Sample Image"
          description={
            <>
              <strong>Nurse Siobhan’s Skin Studio</strong> offers aesthetic and skincare treatments in Bonniconlon, Ballina, Co. Mayo. As a registered nurse, Siobhan provides services like natural enhancements, microneedling, and more. With a focus on subtle, natural beauty, her treatments help clients look and feel rejuvenated. For bookings and inquiries, direct message (DM) Siobhan on Facebook.
            </>
          }
        />
      </div>
    </>
  );
}


export default App;
