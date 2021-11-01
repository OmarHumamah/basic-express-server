'use strict';

const { app } = require('../src/server'); 
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Web server', () => {



 // Check if /person rout is working with name query

 test('should given an name in the query string', async ()=> {
    const response = await mockRequest.get('/person?name=omar');
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('omar');  
    expect(typeof response.body).toEqual('object');  

  })

  // Check if general error handling is working

  test('should respond with 500 on an error', async () => {

    const response = await mockRequest.get('/person');
    expect(response.status).toBe(500);

  });

});