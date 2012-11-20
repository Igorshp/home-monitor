/**
 * Module dependencies.
 */
var app = require('express')()
  , server = require('http').createServer(app)
  , passport = require('passport')
  , fs = require('fs');
//Load Configs TODO  

var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
console.log(config);
//bootstrap db TODO
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  mongoose.connect(config.db);


//bootstrap models TODO
var models_path = __dirname + '/app/models'
  , model_files = fs.readdirSync(models_path);
model_files.forEach(function(file) {
  require(models_path+'/'+file)
});

require('./config/auth').boot(passport,config);
//bootstrap express settings
require('./config/settings').boot(app, passport);
//bootstrap Interfaces
require('./interfaces/routes')(app, passport);


var port = process.env.PORT || 3002;
server.listen(port);