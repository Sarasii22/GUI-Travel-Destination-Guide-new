// server.js
const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API to get all tours
app.get('/api/tours', (req, res) => {
  const { onlyFeatured } = req.query;
  console.log(req.query);

  let query = 'SELECT * FROM tours';
  if (onlyFeatured === 'true') {
    query += ' WHERE featured = 1';
  }

  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});