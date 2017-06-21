/*
  Config file
*/

module.exports = {
  db: {
    url : 'mongodb://localhost:27017/hotels'
 },
 app: {
   port :  process.env.PORT || 9090
 },
 swagger: {
   swaggerDefinition : {
   info: {
     title: 'Hotel API',
     version: '1.0.0',
     description: 'Demo App Hotel Api NodeJs',
   },
   host: 'localhost:9090'},
   apis: ['./api/routes/*.js']
 }
};
