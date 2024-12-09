// setupDatabase.js
const sqlite3 = require('sqlite3').verbose();

// Create a new database or connect to an existing one
const db = new sqlite3.Database('./db/treatments.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Database connected!');
    }
});

// Create the treatments table
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS treatments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price TEXT NOT NULL
        )
    `);

    // Insert the price list into the database
    const treatments = [
        { name: 'LIP FILLER 0.5ML', price: '€150' },
        { name: 'LIP FILLER 1ML', price: '€200' },
        { name: 'NASOLABIAL FILLER', price: 'From €200' },
        { name: 'PROFHILO', price: '€250' },
        { name: 'SKIN BOOSTERS & MESOTHERAPY', price: 'From €200' },
        { name: 'FAT DISSOLVING (SMALL AREA)', price: '€120' },
        { name: 'FAT DISSOLVING (LARGE AREA)', price: '€240' },
        { name: 'MEDICAL MICRONEEDLING', price: '€150' },
        { name: 'ADD SKIN BOOSTER', price: '€250' },
        { name: 'CHEMICAL PEEL', price: '€100' },
        { name: 'HYDRAFACIAL', price: '€100' },
        { name: 'ADD CHEMICAL PEEL', price: '€150' },
        { name: 'STRETCH MARK & SCAR REVISION', price: 'From €300' }
    ];

    // Insert each treatment into the database
    const stmt = db.prepare("INSERT INTO treatments (name, price) VALUES (?, ?)");
    treatments.forEach(treatment => {
        stmt.run(treatment.name, treatment.price);
    });
    stmt.finalize();
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error('Error closing database:', err);
    } else {
        console.log('Database setup complete!');
    }
});
