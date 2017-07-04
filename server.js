'use strict';

const swaggerJSDoc = require('swagger-jsdoc');
const app = require('./api/app');
const config = require('./api/config/config');
const express = require('express');
const path = require('path');

//Init swagger-jsdoc
const swaggerSpec = swaggerJSDoc(config.swagger);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

//Init server
app.listen(config.app.port,
  () => {console.log(`Server running... port:${config.app.port}`);}
);
