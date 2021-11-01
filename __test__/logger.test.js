'use strict';
const logger = require('../src/middleware/logger');

// this file is only going ot be used to test out our logger middleware


describe('Logger Middleware', () => {

  let consoleSpy;
  let req = {}; 
  let res = {};
  let next = jest.fn();

  beforeEach(() => {

    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('properly logs some output', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });



  test('check if properly moved to the next middleware', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalled();
  });

});