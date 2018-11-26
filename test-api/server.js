var express = require('express');
var cors = require('cors');
var app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Task = require('./api/models/model'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testdb'); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('test RESTful API server started on: ' + port);
