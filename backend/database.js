// database.js
const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database (or create it if it doesn't exist)
const db = new sqlite3.Database('./tours.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    createTable();
  }
});

// Create the tours table
const createTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tours (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      city TEXT NOT NULL,
      price REAL NOT NULL,
      desc TEXT, -- Allow NULL
      img TEXT NOT NULL,
      reviews INTEGER, -- Allow NULL
      featured BOOLEAN -- Allow NULL
    )
  `, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Tours table created or already exists.');
    }
  });
};

// Export the database instance
module.exports = db;