'use strict';

module.exports = function (request, response, next){
  if (request.query.name){
    next();
  } else{
    next('something went wrong - no name given');
  }
};
