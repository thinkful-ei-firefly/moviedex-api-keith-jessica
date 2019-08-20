'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const movieData = require('./movieData');

//console.log(process.env.API_KEY); => 'secret-key'

const app = express();

function validateBearerToken(req, res, next) {
  console.log('checking bearer token...');
  next();
}


app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(validateBearerToken);


app.get('/movie', (req, res) => {

  return res.json(movieData);
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server on port ${PORT}!`));