'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HotelSchema = new Schema({
  name: {type: String, required: true },
	stars: {type: Number, required: true},
	price: {type: Number, required: true}
});

module.exports = mongoose.model( 'Hotel' , HotelSchema );
