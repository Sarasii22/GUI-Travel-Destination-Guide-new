const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow requests from the frontend
app.use(express.json()); // Parse incoming JSON requests

app.get('/', (req, res) => {
  res.send('Welcome to the Travel API. Use /places to view the available destinations.');
});


// Example data for places
const places = [
  {
    name: 'Hiriketiya Beach',
    city: 'Matara',
    price: '$99',
    mapLink: 'https://www.google.com/maps?q=Hiriketiya+Beach+Matara',
    image: 'https://example.com/hiriketiya.jpg',
    description: 'A serene beach with clear waters and lush surroundings, perfect for relaxation and surfing.',
    rating: 4.8,
  },
  {
    name: 'Galle Fort',
    city: 'Galle',
    price: '$99',
    mapLink: 'https://www.google.com/maps?q=Galle+Fort+Galle',
    image: 'https://example.com/gallefort.jpg',
    description: 'A historic site offering stunning architecture, vibrant culture, and scenic views.',
    rating: 4.7,
  },
];

// API endpoint to fetch places
app.get('/places', (req, res) => {
  res.json(places);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
