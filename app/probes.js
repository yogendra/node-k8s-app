var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


var probes = express.Router();
probes.get('/liveness', function(req, res, next) {
  
  console.info("liveness");
  res.json({type: "liveness", status: "ok"});
});

probes.get('/readiness', function(req, res, next) {
  console.info("readiness");
  res.json({type: "readiness", status: "ok"});
});
app.use("/probes", probes);

module.exports = app;
