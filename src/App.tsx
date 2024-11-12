import MainNavigation from "./components/MainNavigation";
import "./App.css";
import CoverImage from "./components/CoverImage";
import MultiPanels from "./components/MultiPanels";
import Button from "./components/button/button";
import ImageWithDescription from "./components/ImageWithDescription/ImageWithDescription";
import MapWithDescription from "./components/mapWithDescription/mapDesc";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <MainNavigation />
      <CoverImage altText="Book your appointment today" />
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
      <MapWithDescription
        lat={2}
        lng={2}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Footer />
    </>
  );
}

export default App;
