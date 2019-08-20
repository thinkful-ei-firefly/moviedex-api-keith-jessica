'use strict';

const express = require('express');
const morgan = require('morgan');

const movieData = require('./movieData');

const app = express();

app.use(morgan('dev'));

app.get('/movie', (req, res) => {
  
  return res.json(movieData);
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server on port ${PORT}!`));