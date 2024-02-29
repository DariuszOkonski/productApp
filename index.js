const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/productApp')
  .then(() => {
    console.log('Connection open...');
  })
  .catch((err) => {
    console.log(err);
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
  res.send('woof');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000...');
});
