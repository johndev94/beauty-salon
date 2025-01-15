import MainNavigation from "./components/MainNavigation";
import "./App.css";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Team from "./components/pages/Team";
import Treatments from "./components/pages/Treatments";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import Admin from "./components/pages/Admin";


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

        {/* Treatments Route */}
        <Route
          path="/treatments"
          element={
            <>
              <MainNavigation />
              <Treatments />
              <Footer />
            </>
          }
        />
        {/* Voucher Route */}
        <Route
          path="/voucher"
          element={
            <>
              <MainNavigation />
              <Footer />
            </>
          }
        />
        {/* Contact Route */}
        <Route
          path="/contact-us"
          element={
            <>
              <MainNavigation />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* Admin Route */}
        <Route
          path="/admin"
          element={
            <>
              <MainNavigation />
              <Admin />
              <Footer />
            </>
          }
        />
        {/* Login Route */}
        <Route
          path="/login"
          element={
            <>
              <MainNavigation />
              <Login />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
