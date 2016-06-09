var bodyParser = require('body-parser');
var debug = require('debug')('giffie-search');
var express = require('express');
var helpers = require('../lib/helpers');
var Q = require('q');
var router = express.Router();


module.exports = router;