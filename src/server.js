'use strict';

const express = require('express');
const dotenv = require('dotenv').config();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger);
app.use(validator);

app.use(error404);
app.use(error500);

module.exports = {
  app,
  start: app.listen(3000, () => console.log(`Server Running on port ${PORT}`)),
};
