import React from "react";
import GetTreatments from "../getTreatments/getTreatments";

const Treatments: React.FC = () => {
  return (
    <div>
      <h1>Treatments</h1>
      <p>
        Welcome to our treatments page. Here you can find various treatments we
        offer.
      </p>
      <GetTreatments />
      {/* Add more content and components as needed */}
    </div>
  );
};

export default Treatments;
