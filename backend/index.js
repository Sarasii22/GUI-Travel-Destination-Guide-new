import express from 'express';
import mysql from 'mysql';


const app = express();

const dbConfig = {
  host: 'bmgy9hk93sjzw8nh790h-mysql.services.clever-cloud.com',
  user: 'u4ado3u84ci7qvc1',
  password: 'u4ado3u84ci7qvc1',
  database: 'bmgy9hk93sjzw8nh790h',
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database as id', db.threadId);
});

app.get('/about', (req, res) => {
  res.send('Hello World!');
});

app.listen(5387, () => {
  console.log('Server is running on port 5387'); // eslint-disable-next-line no-console
});