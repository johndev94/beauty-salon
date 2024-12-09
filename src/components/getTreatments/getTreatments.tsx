import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GetTreatments: React.FC = () => {
  const [treatments, setTreatments] = useState<
    { name: string; price: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from backend API
    fetch("http://localhost:5000/api/treatments")
      .then((response) => response.json())
      .then((data) => {
        setTreatments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching treatments:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h2>Price List</h2>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {treatments.map((treatment, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {treatment.name}
                <span className="badge bg-success">{treatment.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetTreatments;
