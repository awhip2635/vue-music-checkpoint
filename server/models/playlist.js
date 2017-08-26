var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId

var playlistSchema = new mongoose.Schema({
  title: {type: String, required: true},
  artist: {type: String, required: true},

  //relationships
  userId: { type: ObjectId, ref: 'User', required: true}
})

var Playlists = mongoose.model("Playlist", playlistSchema);

module.exports = Playlists