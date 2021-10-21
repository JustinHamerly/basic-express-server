'use strict';

const supertest = require('supertest');
const { db, trees } = require('../src/model');
const app = require('../src/server');
const request = supertest(app.app);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('testing tree routes', () => {

  it('Should be able to create a tree', async () => {

    const newTree0 = {'name': 'flowering dogwood', 'location': 'eastern north america and northern mexico', 'height':'6-20ft'};
    const response = await request.post('/trees').send(newTree0);

    expect(response.statusCode).toBe(201);
    
  });

});
