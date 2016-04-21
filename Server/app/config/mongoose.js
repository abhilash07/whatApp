var mongoose = require('mongoose');

module.exports = function() {
	mongoose.connect('mongodb://localhost/whatApp');
	var db = mongoose.connection;
	
	db.on('error', console.error.bind(console, 'Verbindung fehlgeschlagen:'));
	db.once('open', function() {
	  console.log("Verbindung erfolgreich!")
	});
}