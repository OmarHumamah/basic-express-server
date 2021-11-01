'use strict';

const { app } = require('../src/server'); 
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Web server', () => {



  // Check if server is alive

  test('if the server is working', async () => {

    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);

  });


  // Check if 404 is handled 

  test('Should respond with 404 status on an invalid method', async () => {

    const response = await mockRequest.get('/foo');
    expect(response.status).toBe(404);

  });


});