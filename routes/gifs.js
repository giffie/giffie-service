var bodyParser = require('body-parser');
var debug = require('debug')('giffie-gifs');
var express = require('express');
var helpers = require('../lib/helpers');
var Q = require('q');
var router = express.Router();


var gifPostIsValid = function ( request ) {
    var isValid = true;


    return isValid;
};

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

router.post('/gifs', bodyParser.json(), function ( req, res ) {

    if ( gifPostIsValid( req ) ) {



    } else {

        helpers.respondWithBadRequest( res );
    }
});


module.exports = router;