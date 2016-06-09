var debug = require('debug')('giffie-service');
var express = require('express');
var mongoose = require('mongoose');

var appIp = process.env.IP || '0.0.0.0';
var appPort = process.env.PORT || 4000;
var app = express();

var indexRoutes = require('./routes/index');
var gifsRoutes = require('./routes/gifs');
var searchRoutes = require('./routes/search');

app.use( indexRoutes );
app.use( gifsRoutes );
app.use( searchRoutes );

mongoose.connect( process.env.MONGODB_URI, function ( error ) {

    if ( error ) {
        throw new Error('error connecting to database, we really need that one...');
    } else {
        app.listen( appPort, appIp, function () {
            debug('%s: Giffie server started on %s:%d ...',
                        Date( Date.now() ), appIp, appPort );
        });
    }
});