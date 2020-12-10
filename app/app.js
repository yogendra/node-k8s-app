var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var instance_name=process.env.INSTANCE_NAME || "local"
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get("/api/env", function(req,res,next){
  console.log(insance_name + " api::env");
  res.json(process.env);
});
app.get("/api/greeting", function(req, res){
  
  console.log(instance_name + " api::greeting");
  var message = "Hello, World!"  
  var timestamp = new Date();
  res.json({
    timestamp: timestamp,
    instance_name: instance_name, 
    greeting: message
  });
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});


var probesPort=3001
var probes = require("./probes")
probes.listen(probesPort);

module.exports = app;
