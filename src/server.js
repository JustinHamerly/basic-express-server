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
app.use(express.json());

app.get('/person', validator, (request, response) => {
  let name = request.query.name;
  response.send(name);
});

app.use(error500);
app.use(error404);

module.exports = {
  app,
  start: app.listen(3001, () => console.log(`Server Running on port ${PORT}`)),
};
