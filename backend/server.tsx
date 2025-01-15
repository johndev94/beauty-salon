const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
const db = new sqlite3.Database("./db/treatments.db", (err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// API route to fetch all treatments
app.get("/api/treatments", (req, res) => {
  db.all("SELECT * FROM treatments", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// API route to add a new treatment
app.post("/api/treatments", (req, res) => {
  const { name, price } = req.body;

  // Validate inputs
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required." });
  }

  // Insert the treatment into the database
  const sql = `INSERT INTO treatments (name, price) VALUES (?, ?)`;
  db.run(sql, [name, price], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({
        message: "Treatment added successfully!",
        treatmentId: this.lastID,
      });
    }
  });
});
// API route to update a treatment
app.put("/api/treatments/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  // Validate inputs
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required." });
  }

  // Update the treatment in the database
  const sql = `UPDATE treatments SET name = ?, price = ? WHERE id = ?`;
  db.run(sql, [name, price, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      // No rows updated
      res.status(404).json({ error: "Treatment not found." });
    } else {
      res.json({ message: "Treatment updated successfully!" });
    }
  });
});

// API route to delete a treatment
app.delete("/api/treatments/:id", (req, res) => {
  const { id } = req.params;

  // Delete the treatment from the database
  const sql = `DELETE FROM treatments WHERE id = ?`;
  db.run(sql, id, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      // No rows deleted
      res.status(404).json({ error: "Treatment not found." });
    } else {
      res.json({ message: "Treatment deleted successfully!" });
    }
  });
});

// API route to fetch all users
app.get("/api/login", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// API route to register a user
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;

  // Validate inputs
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  // Hash the password
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      res.status(500).json({ error: "Error hashing password." });
      return;
    }

    // Insert the user into the database
    const sql = `INSERT INTO users (email, password) VALUES (?, ?)`;
    db.run(sql, [email, hash], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({
          message: "User registered successfully!",
          userId: this.lastID,
        });
      }
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
