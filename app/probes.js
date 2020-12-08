var express = require('express');
var logger = require('morgan');
var status = require('./status');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Setup Probe interface
var probes = express.Router();

probes.get('/liveness', function(req, res, next) {
  console.info("liveness");
  status.livenessProbe(function(data){
    res.json(data);
  }, function(errorData){
    res.status(503)
    res.json(errorData);
  });
});

probes.get('/readiness', function(req, res, next) {
  console.info("readiness");
  status.readinessProbe(function(data){
    res.json(data);
  }, function(errorData){
    res.status(503)
    res.json(errorData);
  });  
});
probes.get('/startup', function(req, res, next) {
  console.info("startup");
  status.startupProbe(function(data){
    res.json(data);
  }, function(errorData){
    res.status(503)
    res.json(errorData);
  });
});


probes.get("/startup/break", function(req, res, next){
  status.startup = false;
  res.json(status);
});

probes.get("/startup/fix", function(req, res, next){
  status.startup = true;
  res.json(status);
});
probes.get("/liveness/break", function(req, res, next){
  status.liveness = false;
  res.json(status);
});
probes.get("/liveness/fix", function(req, res, next){
  status.liveness = true;
  res.json(status);
});

probes.get("/readiness/break", function(req, res, next){
  status.readiness = false;
  res.json(status);
});

probes.get("/readiness/fix", function(req, res, next){
  status.readiness = true;
  res.json(status);
});

app.use("/probes", probes);

module.exports = app;


// Handle process signals
process.on('SIGINT', () => {
  console.log('Received SIGINT. Press Control-D to exit.');
});

// Using a single function to handle multiple signals
function exitApp(signal) {
  console.log(`Received ${signal}. Exiting`);
  process.exit(0);
}

process.on('SIGINT', exitApp);
process.on('SIGTERM', exitApp);
