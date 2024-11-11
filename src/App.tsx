import { useState } from "react";
import MainNavigation from "./components/MainNavigation";
import "./App.css";
import CoverImage from "./components/CoverImage";
import coverImage from "./assets/images/cover.jpg";
import MultiPanels from "./components/MultiPanels";
import Button from "./components/button/button";
import ImageWithDescription from "./components/ImageWithDescription/ImageWithDescription";
import MapComponent from "./components/map/map";
import MapDesc from "./components/mapWithDescription/mapDesc";
import Footer from "./components/footer/Footer";

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
              <strong>Nurse Siobhan’s Skin Studio</strong> offers aesthetic and
              skincare treatments in Bonniconlon, Ballina, Co. Mayo. As a
              registered nurse, Siobhan provides services like natural
              enhancements, microneedling, and more. With a focus on subtle,
              natural beauty, her treatments help clients look and feel
              rejuvenated. For bookings and inquiries, direct message (DM)
              Siobhan on Facebook.
            </>
          }
        />
      </div>
      <Button text="Book Now" onClick={() => alert("Book Now")} />
      <MapDesc
        lat={53.35014}
        lng={2}
        description={
          <>
            <h2>Call Us On:</h2>{" "}
            <p>
              +44 (0)28 3026 7606 <br></br>Opening Times <br></br>Monday:
              9am-5pm <br></br>Tuesday: 9am-5.30pm <br></br>Wednesday: 9am-6pm{" "}
              <br></br>Thursday: 9am-8pm <br></br>Friday: 9am-8pm
              <br></br>Saturday: 9am-4.30pm <br></br>Sunday: Closed
            </p>
          </>
        }
      />
      <Footer />
    </>
  );
}

export default App;
