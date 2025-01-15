import React from "react";
import GetTreatments from "../getTreatments/getTreatments";
import border from "../../assets/images/banner-border.png";

const Treatments: React.FC = () => {
  return (
    <div>
      <img
        className="cover-bottom-border"
        src={border}
        width="100%"
        height="120"
        alt="Banner border"
      />
      <h3 className="mt-5">
        Welcome to our treatments page. Here you can find various treatments we
        offer.
      </h3>
      <GetTreatments />
    </div>
  );
};

export default Treatments;
