var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var server = express();
var playlist = require('../models/playlist')
var Songs = require('../models/songs')


router.get('/', function(req, res, next) {
  Songs.find({})
  .then((song)=>{
    res.send(song)
  })
})

router.delete('/:songId', (req, res, next) => {
  var songId = req.params.songId
  Songs.findByIdAndRemove(songId)
  .then(song =>{
    res.send({message: 'Successfully deleted.'})
  })
  .catch(next)
})

router.post('/', function(req, res, next) {  
  Songs.create(req.body)
    .then((song)=>{
        res.send(song)
    })
    .catch(next)
})




router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next){
  if (req.xhr){
    res.json({success: false, error: err})
  }else{
    res.json({success: false, error: err.message})
  }
}

module.exports = router