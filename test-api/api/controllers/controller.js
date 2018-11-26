'use strict';


var mongoose = require('mongoose'),
  Address = mongoose.model('Addresses');

exports.list = function(req, res) {
  Address.find({}, function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};

exports.create = function(req, res) {
  var new_address = new Address(req.body);
  new_address.save(function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};
