'use strict';

const supertest = require('supertest');
const { db, birds, trees } = require('../src/model');
const app = require('../src/server');
const request = supertest(app.app);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('testing bird routes', () => {

  it('Should be able to create a bird', async () => {

    const newBird0 = {'name': 'american white pelican', 'wingspan': '8.5 feet', 'location':'North America'};
    const response = await request.post('/birds').send(newBird0);

    expect(response.statusCode).toBe(201);

  });

  it('should be able to get all the birds from the database', async () => {

    const newBird1 = {'name': 'cackling goose', 'wingspan': '42.5-43.7 in', 'location': 'North America'};
    const newBird2 = {'name': 'kiwi', 'wingspan': '1 inch', 'location': 'New Zealand'};

    await request.post('/birds').send(newBird1);
    await request.post('/birds').send(newBird2);

    const response = await request.get('/birds');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(3);

  });

  it('should be able to retrieve a specific bird from the database', async () => {
    let response = await request.get('/birds/1');
    expect(response.statusCode).toBe(200);
    
    response = JSON.parse(response.res.text);

    expect(response.id).toBe(1);
    expect(response.name).toBe('american white pelican');
    expect(response.wingspan).toBe('8.5 feet');
    expect(response.location).toBe('North America');
  });

  it('should update a specific bird in the database', async () =>{
    let response = await request.get('/birds/1');
    response = JSON.parse(response.res.text);
    expect(response.id).toBe(1);

    const updatedBird = {'name': 'pink-backed pelican', 'wingspan': '7.1-9.5 feet', 'location':'swamps and shallow lakes of Africa, southern Arabia and southern India'};

    await request.put('/birds/1').send(updatedBird);

    let updatedResponse = await request.get('/birds/1');
    updatedResponse = JSON.parse(updatedResponse.res.text);

    expect(updatedResponse.id).toBe(1);
    expect(updatedResponse.name).toBe('pink-backed pelican');
    expect(updatedResponse.wingspan).toBe('7.1-9.5 feet');
    expect(updatedResponse.location).toBe('swamps and shallow lakes of Africa, southern Arabia and southern India');
  });

  it('should delete a bird by ID', async () => {
    let response = await request.delete('/birds/1');
    response = JSON.parse(response.res.text);
    expect(response).toStrictEqual({});
  });
  
});

describe('testing tree routes', () => {

  it('Should be able to create a tree', async () => {

    const newTree0 = {'name': 'flowering dogwood', 'location': 'eastern north america and northern mexico', 'height':'6-20ft'};
    const response = await request.post('/trees').send(newTree0);

    expect(response.statusCode).toBe(201);
    
  });

  it('should be able to get all the trees from the database', async () => {

    const newTree1 = {'name': 'baobab', 'location': 'Africa', 'height': '16 - 98 feet'};
    const newTree2 = {'name': 'narra', 'location': 'indonesia', 'height': '82 - 115 feet'};

    await request.post('/trees').send(newTree1);
    await request.post('/trees').send(newTree2);

    const response = await request.get('/trees');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(3);

  });

  it('should be able to retrieve a specific tree from the database', async () => {
    let response = await request.get('/trees/1');
    expect(response.statusCode).toBe(200);
    
    response = JSON.parse(response.res.text);

    expect(response.id).toBe(1);
    expect(response.name).toBe('flowering dogwood');
  });

  it('should update a specific tree in the database', async () =>{
    let response = await request.get('/birds/1');
    response = JSON.parse(response.res.text);
    expect(response.id).toBe(1);

    const updatedTree = {'name': 'cornelian cherry', 'location': 'Europe and Western Asia', 'height':'15 feet'};

    await request.put('/trees/1').send(updatedTree);

    let updatedResponse = await request.get('/trees/1');
    updatedResponse = JSON.parse(updatedResponse.res.text);

    expect(updatedResponse.id).toBe(1);
    expect(updatedResponse.name).toBe('cornelian cherry');
    expect(updatedResponse.location).toBe('Europe and Western Asia');
    expect(updatedResponse.height).toBe('15 feet');
  });

  it('should delete a tree by ID', async () => {
    let response = await request.delete('/trees/1');
    response = JSON.parse(response.res.text);
    expect(response).toStrictEqual({});
  });

});