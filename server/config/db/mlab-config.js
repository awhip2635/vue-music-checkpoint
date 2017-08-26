var mongoose = require('mongoose')
var connection = mongoose.connection

mongoose.connect('mongodb://student:student@ds159013.mlab.com:59013/musicisfun', {
  server:{socketOptions:{keepAlive: 300000, connectTimeoutMS: 30000}},
  replset:{socketOptions:{keepAlive: 300000, connectTimeoutMS: 30000}},
})

connection.on('error', (err) =>{
  console.log('Mlab Error you fool ', err)
})

connection.once('open', ()=>{
  console.log('connected to mlab or whatever')
})