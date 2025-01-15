import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Treatment {
  id: number; // Ensure this matches your database schema
  name: string;
  price: string;
}

const EditTreatments: React.FC = () => {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch all treatments from the backend
  useEffect(() => {
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

  // Add a new treatment
  const handleAddTreatment = async () => {
    if (!newName || !newPrice) {
      setMessage("Both name and price are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/treatments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newName, price: newPrice }),
      });

      if (response.ok) {
        const newTreatment = await response.json();
        setTreatments([...treatments, newTreatment]);
        setNewName("");
        setNewPrice("");
        alert("Treatment added successfully!");
        setMessage("Treatment added successfully!");
        window.location.reload(); // Refresh the entire page
      } else {
        const error = await response.json();
        setMessage(error.error || "Error adding treatment.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error adding treatment.");
    }
  };

  // Update a treatment
  const handleUpdateTreatment = async (
    id: number,
    updatedName: string,
    updatedPrice: string
  ) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/treatments/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: updatedName, price: updatedPrice }),
        }
      );

      if (response.ok) {
        setTreatments(
          treatments.map((treatment) =>
            treatment.id === id
              ? { ...treatment, name: updatedName, price: updatedPrice }
              : treatment
          )
        );
        setMessage("Treatment updated successfully!");
      } else {
        setMessage("Error updating treatment.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error updating treatment.");
    }
  };

  // Delete a treatment
  const handleDeleteTreatment = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/treatments/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setTreatments(treatments.filter((treatment) => treatment.id !== id));
        setMessage("Treatment deleted successfully!");
      } else {
        setMessage("Error deleting treatment.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error deleting treatment.");
    }
  };

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
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Treatment Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" onClick={handleAddTreatment}>
              Add Treatment
            </button>
          </div>

          <br />
          {message && <div className="alert alert-info mt-3">{message}</div>}

          <ul className="list-group mt-4">
            {treatments.map((treatment) => (
              <li
                key={treatment.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    value={treatment.name}
                    onChange={(e) =>
                      handleUpdateTreatment(
                        treatment.id,
                        e.target.value,
                        treatment.price
                      )
                    }
                    className="form-control me-2"
                  />
                  <input
                    type="text"
                    value={treatment.price}
                    onChange={(e) =>
                      handleUpdateTreatment(
                        treatment.id,
                        treatment.name,
                        e.target.value
                      )
                    }
                    className="form-control ms-2"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDeleteTreatment(treatment.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditTreatments;
