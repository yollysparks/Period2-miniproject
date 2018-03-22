var mongoose = require('mongoose');
const dbURI = "mongodb://yolly:indeche13@ds213259.mlab.com:13259/local_library";

function setDbUri(uri){
  dbURI = uri;
}

function connect(){
  return mongoose.connect(dbURI);  
}

mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});
module.exports = {
  setDbUri: setDbUri,
  connect: connect
}