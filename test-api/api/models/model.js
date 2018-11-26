'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  address: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Addresses', AddressSchema);