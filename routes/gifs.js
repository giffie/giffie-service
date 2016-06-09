var bodyParser = require('body-parser');
var dbModels = require('../odm/Models');
var debug = require('debug')('giffie-gifs');
var express = require('express');
var helpers = require('../lib/helpers');
var Q = require('q');
var router = express.Router();


/**
 *
 * gifs/ GET
 * -    return order by recent
 *
 * gifs/?ids=  GET
 * -    return multiple gifs
 *
 * gifs/id GET
 * -    return by ID
 *
 * Restricted
 *
 * gifs/ POST
 * -   create by admin
 *
 * gifs/id/ PUT
 * -   update from admin
 *
 */

module.exports = router;