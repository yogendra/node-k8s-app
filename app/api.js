var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.info("API::environment");
  res.json(process.env);
});

router.get('/greeting', function(req, res, next) {
  console.info("API::environment");
  res.json({message: "Hello, World!"});
});

module.exports = router;
