'use strict';

const express = require('express');
// const dotenv = require('dotenv').config();
// const PORT = process.env.PORT || 3001;
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');
const app = express();

app.use(logger);
app.use(express.json());

app.get('/person', validator, (request, response) => {
  console.log(response);
  let name = request.query;
  response.send(name);
});

app.use(error404);
app.use(error500);

module.exports = {
  app,
  // start: app.listen(3001, () => console.log(`Server Running on port ${PORT}`)),
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
  },
};
