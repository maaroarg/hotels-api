const express = require('express');
const config = require('./config/config');
const app = express();
const mongoose = require('mongoose');
const Hotel = require('./models/hotelModel');
const bodyParser = require('body-parser');
const routes = require('./routes/hotelRoutes');
const path = require('path');

const appBuild = () => {

  //Init BD
  mongoose.Promise = global.Promise;
  mongoose.connect(config.db.url);

  //Middlewares
  app.use(bodyParser.json());
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //Init routing
  routes(app);

  return app;
}

module.exports = appBuild();
