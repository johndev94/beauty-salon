import MainNavigation from "./components/MainNavigation";
import "./App.css";
import Footer from "./components/footer/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Team from "./components/pages/Team";
import Treatments from "./components/pages/Treatments";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import Admin from "./components/pages/Admin";
import { AuthProvider, useAuth } from "./components/pages/AuthContext"; // Import AuthContext
import CoverImage from "./components/CoverImage";
import cover from "./assets/images/cover.jpg";
import banner from "./assets/images/banner3.png";
import banner1 from "./assets/images/banner4.png";
import banner2 from "./assets/images/banner5.png";

// ProtectedRoute component to protect the /admin route
const ProtectedRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <MainNavigation />
              <CoverImage
                altText="Book your appointment today"
                image={cover}
                button={true}
              />
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
              <CoverImage altText="Meet our Expert Team" image={banner} />
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
              <CoverImage altText="See all our Treatments" image={banner1} />
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
              <CoverImage altText="Contact Us" image={banner2} />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Admin Route - Protected */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              element={
                <>
                  <MainNavigation />
                  <Admin />
                  <Footer />
                </>
              }
            />
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
    </AuthProvider>
  );
}

export default App;
