// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Connect to the database
const db = new sqlite3.Database('./db/treatments.db');

// API route to fetch all treatments
app.get('/api/treatments', (req, res) => {
    db.all("SELECT * FROM treatments", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

import * as bcrypt from 'bcrypt';

const saltRounds = 10;

function generatePasswordHash(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

console.log(generatePasswordHash('password123'));
