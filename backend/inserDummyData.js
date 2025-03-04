// insertDummyData.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tours.db');

const imgUrl = 'https://tse3.mm.bing.net/th?id=OIP.tFCI92hlEgWFLCdnX0dZlgHaE8&pid=Api&P=0&h=220';

const tours = [
  {
    title: 'Explore Paris',
    city: 'Paris',
    price: 500,
    desc: 'A wonderful tour of Paris.',
    reviews: [4, 5, 3],
    featured: true,
  },
  {
    title: 'Discover Rome',
    city: 'Rome',
    price: 450,
    desc: 'Explore the ancient city of Rome.',
    reviews: [5, 4],
    featured: false,
  },
  {
    title: 'New York Adventure',
    city: 'New York',
    price: 600,
    desc: 'Experience the Big Apple.',
    reviews: [3, 4, 5],
    featured: true,
  },
  {
    title: 'Tokyo Highlights',
    city: 'Tokyo',
    price: 700,
    desc: 'Discover the vibrant city of Tokyo.',
    reviews: [],
    featured: false,
  },
];

db.serialize(() => {
  tours.forEach((tour) => {
    const query =
      'INSERT INTO tours (title, city, price, desc, img, reviews, featured) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const params = [
      tour.title,
      tour.city,
      tour.price,
      tour.desc,
      imgUrl,
      JSON.stringify(tour.reviews),
      tour.featured,
    ];
    db.run(query, params, function (err) {
      if (err) {
        console.error('Error inserting tour:', err.message);
      } else {
        console.log(`Tour added with ID: ${this.lastID}`);
      }
    });
  });
});

db.close();