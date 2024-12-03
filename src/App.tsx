import MainNavigation from "./components/MainNavigation";
import "./App.css";
import CoverImage from "./components/CoverImage";
import MultiPanels from "./components/MultiPanels";
import Button from "./components/button/button";
import ImageWithDescription from "./components/ImageWithDescription/ImageWithDescription";
import MapWithDescription from "./components/mapWithDescription/mapDesc";
import Footer from "./components/footer/Footer";
import border from "./assets/images/banner-border.png";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Team from "./components/pages/Team";

function App() {
  return (
    <>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        {/* Team Route */}
        <Route
          path="/about-us"
          element={
            <>
              <MainNavigation />
              <Team />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
