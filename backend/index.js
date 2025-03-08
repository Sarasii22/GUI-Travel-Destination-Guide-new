
const express = require("express");
const cors = require("cors");
const { db, deleteTour, insertTour, updateTour, insertUser, getUserByEmail, insertBooking, getUserBookings } = require("./database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;
const JWT_SECRET = "your-secret-key-change-this"; // Change this in production!

app.use(cors());
app.use(express.json());

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>
  if (!token) return res.status(401).json({ error: "Access denied, no token provided" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user; // Attach user info to request
    next();
  });
};

// Tours Routes
app.get("/api/tours", (req, res) => {
  const { onlyFeatured } = req.query;
  let query = "SELECT * FROM tours";
  if (onlyFeatured === "true") {
    query += " WHERE featured = 1";
  }
  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get("/api/tours/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM tours WHERE id = ?";
  db.get(query, [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ message: "Tour not found" });
      return;
    }
    res.json(row);
  });
});

app.delete("/api/tours/:id", (req, res) => {
  const { id } = req.params;
  deleteTour(id, (err, changes) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (changes === 0) {
      res.status(404).json({ message: "No tour found with that ID" });
      return;
    }
    res.status(200).json({ message: `Tour with id ${id} deleted successfully` });
  });
});

app.post("/api/tours", (req, res) => {
  const tour = req.body;
  if (!tour.title || !tour.city || !tour.price || !tour.img) {
    return res.status(400).json({ message: "Missing required fields: title, city, price, or img" });
  }
  insertTour(tour, (err, newId) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: "Tour added successfully", id: newId });
  });
});

app.put("/api/tours/:id", (req, res) => {
  const { id } = req.params;
  const tour = req.body;
  if (!tour.title || !tour.city || !tour.price || !tour.img) {
    return res.status(400).json({ message: "Missing required fields: title, city, price, or img" });
  }
  updateTour(id, tour, (err, changes) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (changes === 0) {
      res.status(404).json({ message: "No tour found with that ID" });
      return;
    }
    res.status(200).json({ message: `Tour with id ${id} updated successfully` });
  });
});

// User Routes
app.post("/api/signup", async (req, res) => {
  const { email, password, firstName, lastName, country } = req.body;

  if (!email || !password || !firstName || !lastName || !country) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    getUserByEmail(email, async (err, row) => {
      if (err) return res.status(500).json({ error: "Database error" });
      if (row) return res.status(400).json({ error: "Email already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);
      insertUser({ email, password: hashedPassword, firstName, lastName, country }, (err, id) => {
        if (err) return res.status(500).json({ error: "Failed to save user: " + err.message });
        res.status(201).json({ message: "User registered successfully" });
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  getUserByEmail(email, async (err, user) => {
    if (err) return res.status(500).json({ error: "Database error: " + err.message });
    if (!user) return res.status(401).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid email or password" });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    res.json({
      message: "Login successful",
      token,
      user: { email, firstName: user.firstName, lastName: user.lastName },
    });
  });
});

// Booking Routes
app.post("/api/bookings", authenticateToken, (req, res) => {
  const { tour_id, start_date, end_date, price } = req.body;
  const user_id = req.user.id; // From JWT

  if (!tour_id || !start_date || !end_date || !price) {
    return res.status(400).json({ error: "Missing required fields: tour_id, start_date, end_date, or price" });
  }

  const booking = { user_id, tour_id, start_date, end_date, price };
  insertBooking(booking, (err, newId) => {
    if (err) {
      res.status(500).json({ error: "Failed to create booking: " + err.message });
      return;
    }
    res.status(201).json({ message: "Booking created successfully", id: newId });
  });
});

app.get("/api/bookings", authenticateToken, (req, res) => {
  const user_id = req.user.id; // From JWT
  getUserBookings(user_id, (err, bookings) => {
    if (err) {
      res.status(500).json({ error: "Failed to retrieve bookings: " + err.message });
      return;
    }
    res.json(bookings);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});