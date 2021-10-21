'use strict';

const express = require('express');
// const dotenv = require('dotenv').config();
// const PORT = process.env.PORT || 3001;
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');
const birdFunctions = require('./routes/birdRoute');
const treeFunctions = require('./routes/treeRoute');
const app = express();

app.use(logger);
app.use(express.json());

app.get('/person', validator, (request, response) => {
  console.log(response);
  let name = request.query;
  response.send(name);
});

//bird routes
app.get('/birds', birdFunctions.getAllBirds);
app.get('/birds/:id', birdFunctions.getABird);
app.post('/birds', birdFunctions.addABird);
app.put('/birds/:id', birdFunctions.updateBird);
app.delete('/birds/:id', birdFunctions.deleteABird);

//tree routes
app.get('/trees', treeFunctions.getAllTrees);
app.get('/trees/:id', treeFunctions.getATree);
app.post('/trees', treeFunctions.addATree);
app.put('/trees/:id', treeFunctions.updateTree);
app.delete('/trees/:id', treeFunctions.deleteATree);

app.use(error404);
app.use(error500);

module.exports = {
  app,
  // start: app.listen(3001, () => console.log(`Server Running on port ${PORT}`)),
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
  },
};
