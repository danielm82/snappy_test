'use strict';
module.exports = function(app) {
  var test = require('../controllers/controller');

  app.route('/addresses')
    .get(test.list)
    .post(test.create);
};