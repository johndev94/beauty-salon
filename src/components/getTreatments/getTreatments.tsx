import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const GetTreatments: React.FC = () => {
  const [treatments, setTreatments] = useState<{ name: string; price: string; image: string }[]>([]);
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
    <div className="treatments-page">
      {/* Treatments List */}
      <div className="treatments-list container mt-5">
        <ul className="list-unstyled">
          {treatments.map((treatment, index) => (
            <li key={index} className="treatment-item">
              <div className="treatment-card">
                <div className="treatment-content">
                  <h3 className="treatment-name">{treatment.name}</h3>
                  <h5 className="treatment-price">{treatment.price}</h5>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GetTreatments;
