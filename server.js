'use strict';

const express = require('express');
const config = require('./api/config/config');
const app = express();
const mongoose = require('mongoose');
const Hotel = require('./api/models/hotelModel');
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

//Init swagger-jsdoc
let swaggerSpec = swaggerJSDoc(config.swagger);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

//Init BD
mongoose.Promise = global.Promise;
mongoose.connect(config.db.url);

//Middlewares
app.use(bodyParser.json());

//Init routing
const routes = require('./api/routes/hotelRoutes');
routes(app);

//Init server
app.listen(config.app.port, () => {console.log(`Server running... port:${config.app.port}`)});
