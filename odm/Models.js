var mongoose = require('mongoose');

var gifSchema = new mongoose.Schema({
    type: String,
    id: String,
    status: String,
    title: String,
    source: String,
    creationDate: { type: Date, default: Date.now },
    lastModified: { type: Date, default: Date.now }
});

/**
 *  TODO: Media endpoints for multiple media servers
 */

exports.Gif = mongoose.model('gif', gifSchema );