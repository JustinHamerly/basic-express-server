'use strict';

const validator = require('../src/middleware/validator');

describe('testing validator middleware', () => {
  let req = {query: {name: 'justin'}};
  let res = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('should be able to validate if query string has name property', () => {

    validator(req, res, next);

    expect(req.query.name).toBe('justin');
    expect(next).toHaveBeenCalled();

  });

});
