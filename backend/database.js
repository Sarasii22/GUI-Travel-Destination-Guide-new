const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./tours.db", (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
    createTables(); // Updated to create both tables
  }
});

const createTables = () => {
  // Tours table (unchanged)
  db.run(`
    CREATE TABLE IF NOT EXISTS tours (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      city TEXT NOT NULL,
      price REAL NOT NULL,
      desc TEXT,
      img TEXT NOT NULL,
      reviews INTEGER,
      featured BOOLEAN
    )
  `, (err) => {
    if (err) {
      console.error("Error creating tours table:", err.message);
    } else {
      console.log("Tours table created or already exists.");
    }
  });

  // Users table (new)
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      country TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error("Error creating users table:", err.message);
    } else {
      console.log("Users table created or already exists.");
    }
  });
};

// Tours Functions (unchanged)
const deleteTour = (id, callback) => {
  const sql = `DELETE FROM tours WHERE id = ?`;
  db.run(sql, [id], function (err) {
    if (err) {
      console.error("Error deleting tour:", err.message);
      callback(err);
    } else {
      console.log(`Tour with id ${id} deleted. Rows affected: ${this.changes}`);
      callback(null, this.changes);
    }
  });
};

const insertTour = (tour, callback) => {
  const { title, city, price, desc, img, reviews, featured } = tour;
  const sql = `
    INSERT INTO tours (title, city, price, desc, img, reviews, featured)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  db.run(sql, [title, city, price, desc, img, reviews, featured], function (err) {
    if (err) {
      console.error("Error inserting tour:", err.message);
      callback(err);
    } else {
      console.log(`Tour inserted with id: ${this.lastID}`);
      callback(null, this.lastID);
    }
  });
};

const updateTour = (id, tour, callback) => {
  const { title, city, price, desc, img, reviews, featured } = tour;
  const sql = `
    UPDATE tours 
    SET title = ?, city = ?, price = ?, desc = ?, img = ?, reviews = ?, featured = ?
    WHERE id = ?
  `;
  db.run(sql, [title, city, price, desc, img, reviews, featured, id], function (err) {
    if (err) {
      console.error("Error updating tour:", err.message);
      callback(err);
    } else {
      console.log(`Tour with id ${id} updated. Rows affected: ${this.changes}`);
      callback(null, this.changes);
    }
  });
};

// User Functions (new)
const insertUser = (user, callback) => {
  const { email, password, firstName, lastName, country } = user;
  const sql = `
    INSERT INTO users (email, password, firstName, lastName, country)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.run(sql, [email, password, firstName, lastName, country], function (err) {
    if (err) {
      console.error("Error inserting user:", err.message);
      callback(err);
    } else {
      console.log(`User inserted with id: ${this.lastID}`);
      callback(null, this.lastID);
    }
  });
};

const getUserByEmail = (email, callback) => {
  const sql = `SELECT * FROM users WHERE email = ?`;
  db.get(sql, [email], (err, row) => {
    if (err) {
      console.error("Error retrieving user:", err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
};

module.exports = {
  db,
  deleteTour,
  insertTour,
  updateTour,
  insertUser,
  getUserByEmail,
};