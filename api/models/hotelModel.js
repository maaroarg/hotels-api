'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
  name: {type: String, required: true },
	stars: {type: Number, required: true },
	price: {type: Number, required: true },
  images: {type: Array, required: true }
});

module.exports = mongoose.model( 'Hotel' , HotelSchema );
