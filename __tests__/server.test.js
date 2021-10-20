'use strict';

const supertest = require('supertest');
const app = require('../src/server');

const request = supertest(app.app);

describe('Testing our Server', () => {

  it('should respond with a name on GET to /person', async () => {

    const response = await request.get('/person?name=justin');

    expect(response.status).toBe(200);
    expect(response.text).toBe('justin');

  });

  it('should respond with 500 error if no name on GET to /person', async() => {

    const response = await request.get('/person');

    expect(response.status).toBe(500);
    expect(response.query).toBe(undefined);

  });

  it('should respond with 404 if a bad route on GET', async () => {

    const response = await request.get('/pesron');
    expect(response.status).toBe(404);

  });

  it('should respond with 404 on a bad method to /person', async () => {

    const response = await request.post('/person');
    expect(response.status).toBe(404);

  });

});
