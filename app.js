var express = require('express');
var mongoose = require('mongoose');

var app = express();
var config = {
  root: __dirname
}

require('./app/config/express')(app, config);
//require('./app/config/mongoose');


mongoose.connect('mongodb://localhost/whatApp');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Verbindung fehlgeschlagen:'));
db.once('open', function() {
  console.log("Verbindung erfolgreich!")
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


module.exports = app;
