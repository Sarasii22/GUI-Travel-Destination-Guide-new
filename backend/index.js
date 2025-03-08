const express = require("express");
const cors = require("cors");
const { db, deleteTour, insertTour, updateTour, insertUser, getUserByEmail } = require("./database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;
const JWT_SECRET = "your-secret-key-change-this"; // Change this in production!

app.use(cors());
app.use(express.json());

// Tours Routes (unchanged)
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

// User Routes (new)
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
        if (err) return res.status(500).json({ error: "Failed to save user" });
        res.status(201).json({ message: "User registered successfully" });
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  getUserByEmail(email, async (err, user) => {
    if (err) return res.status(500).json({ error: "Database error" });
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});