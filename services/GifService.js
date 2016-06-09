
var debug = require('debug')('giffie-gifservice');
var dbModels = require('../odm/Models'); // Repository
var Q = require('q');


var GifService = function () {

};

GifService.prototype = {

    isValidGifDate: function ( data ) {
        var isValid = true;


        return isValid;
    },

    isValidGifUpdate: function ( data ) {
        var isValid = true;


        return isValid;
    }
};

module.exports = new GifService(); // Singleton