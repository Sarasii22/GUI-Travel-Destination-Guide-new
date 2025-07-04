const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./tours.db", (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
    // Enable foreign key enforcement
    db.run("PRAGMA foreign_keys = ON;", (err) => {
      if (err) console.error("Error enabling foreign keys:", err.message);
      else console.log("Foreign keys enabled");
    });
    createTables();
  }
});

const createTables = () => {
  // Tours table
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

  // Users table
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

  // Bookings table
  db.run(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      tour_id INTEGER NOT NULL,
      start_date TEXT NOT NULL,
      end_date TEXT NOT NULL,
      price REAL NOT NULL,
      booking_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (tour_id) REFERENCES tours(id)
    )
  `, (err) => {
    if (err) {
      console.error("Error creating bookings table:", err.message);
    } else {
      console.log("Bookings table created or already exists.");
    }
  });
};

// Tours Functions
/*const deleteTour = (id, callback) => {
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
*/

const deleteTour = (id, callback) => {
  db.serialize(() => {
    // First, delete related bookings
    db.run(`DELETE FROM bookings WHERE tour_id = ?`, [id], function (err) {
      if (err) {
        console.error("Error deleting related bookings:", err.message);
        callback(err);
        return;
      }
      console.log(`Deleted ${this.changes} bookings for tour_id ${id}`);

      // Then, delete the tour
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
    });
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

// User Functions
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

// Booking Functions
const insertBooking = (booking, callback) => {
  const { user_id, tour_id, start_date, end_date, price } = booking;
  const sql = `
    INSERT INTO bookings (user_id, tour_id, start_date, end_date, price)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.run(sql, [user_id, tour_id, start_date, end_date, price], function (err) {
    if (err) {
      console.error("Error inserting booking:", err.message);
      callback(err); // Pass error to callback
    } else {
      console.log(`Booking inserted with id: ${this.lastID}`);
      callback(null, this.lastID); // Success case
    }
  });
};

const getUserBookings = (user_id, callback) => {
  const sql = `
    SELECT b.id, b.tour_id, t.title, t.city, b.start_date, b.end_date, b.price, b.booking_date
    FROM bookings b
    JOIN tours t ON b.tour_id = t.id
    WHERE b.user_id = ?
  `;
  db.all(sql, [user_id], (err, rows) => {
    if (err) {
      console.error("Error retrieving bookings:", err.message);
      callback(err);
    } else {
      callback(null, rows);
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
  insertBooking,
  getUserBookings,
};