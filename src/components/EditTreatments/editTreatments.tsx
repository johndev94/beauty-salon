import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EditTreatments: React.FC = () => {
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
          {/* Add form to add new treatments */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Treatment Name"
              aria-label="Treatment Name"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              aria-label="Price"
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Add Treatment</button>
          </div>

          <br></br>

          <ul className="list-group">
            {treatments.map((treatment, index) => (
              <>
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <div>
                        <input type="text" value={treatment.name} />
                        <input type="text" value={treatment.price} />
                    </div>
                  <div>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                  
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditTreatments;
