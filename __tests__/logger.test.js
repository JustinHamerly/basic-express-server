'use strict';

const logger = require('../src/middleware/logger');

describe('Testing logger middleware', () => {

  let req = {method: 'GET'};
  let res = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('should be able to log a method', () => {

    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('GET');
    expect(next).toHaveBeenCalled();

  });

});
