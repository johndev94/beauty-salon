import React from "react";
import GetTreatments from "../getTreatments/getTreatments";
import EditTreatments from "../EditTreatments/editTreatments";

const Admin: React.FC = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome to the admin page. Here you can manage the website content.</p>
      {/* Add more admin functionalities here */}
      <EditTreatments />
    </div>
  );
};

export default Admin;
