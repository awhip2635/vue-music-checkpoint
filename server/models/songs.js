var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId


var songSchema = new mongoose.Schema({
    title: {type: String, required: true},
    albumArt: {type: String, required: true},
    artist: {type: String, required: true},
    preview: {type: String, required: true}
})

var Song = mongoose.model("Song", songSchema);

module.exports = Song