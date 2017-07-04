'use strict';

const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');

exports.listHotels = ( req , res ) => {

  Hotel.find( {} , ( err , hotels ) => {
    if( err ){
      res.send( err );
    }
    res.json( hotels );
  });
};

exports.createHotel = ( req, res ) => {

  const new_hotel = new Hotel(req.body);
  new_hotel.save((err, hotel) => {
    if (err){
      res.send(err);
    }
    res.json(hotel);
  });
};

exports.getHotel = function(req, res) {
  Hotel.findById(req.params.id, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};

exports.updateHotel = function(req, res) {
  Hotel.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, hotel) {
    if (err)
      res.send(err);
    res.json(hotel);
  });
};


exports.removeHotel = function(req, res) {
  Hotel.remove({
    _id: req.params.id
  }, function(err, hotel) {
    if (err)
      res.send(err);
    res.json({ message: 'Hotel successfully deleted' });
  });
};
