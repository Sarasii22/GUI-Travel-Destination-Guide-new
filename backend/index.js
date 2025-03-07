const express = require('express');
const cors = require('cors');
const { db, deleteTour, insertTour, updateTour } = require('./database');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/tours', (req, res) => {
  const { onlyFeatured } = req.query;
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

app.delete('/api/tours/:id', (req, res) => {
  const { id } = req.params;
  deleteTour(id, (err, changes) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (changes === 0) {
      res.status(404).json({ message: 'No tour found with that ID' });
      return;
    }
    res.status(200).json({ message: `Tour with id ${id} deleted successfully` });
  });
});

app.post('/api/tours', (req, res) => {
  const tour = req.body;
  if (!tour.title || !tour.city || !tour.price || !tour.img) {
    return res.status(400).json({ message: 'Missing required fields: title, city, price, or img' });
  }
  insertTour(tour, (err, newId) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: 'Tour added successfully', id: newId });
  });
});

app.put('/api/tours/:id', (req, res) => {
  const { id } = req.params;
  const tour = req.body;
  if (!tour.title || !tour.city || !tour.price || !tour.img) {
    return res.status(400).json({ message: 'Missing required fields: title, city, price, or img' });
  }
  updateTour(id, tour, (err, changes) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (changes === 0) {
      res.status(404).json({ message: 'No tour found with that ID' });
      return;
    }
    res.status(200).json({ message: `Tour with id ${id} updated successfully` });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});