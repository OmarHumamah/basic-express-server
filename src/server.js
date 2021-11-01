"use strict ";

const express = require("express");
const notFound= require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require("./middleware/logger");
const nameValid = require('./middleware/validator')
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// test server
app.get("/", (req, res) => {
  res.status(200).send("the server is live");
});


// try error message with next
app.get('/person', nameValid)

// middle wares 
app.use('*', notFound);
app.use(errorHandler)
app.use(logger)



function start() {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
}

module.exports = { app, start };