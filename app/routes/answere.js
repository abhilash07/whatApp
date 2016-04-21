var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var AnswereSchema = require('../models/answere'); 

router.get('/', function(req, res) {
	AnswereSchema.find(function(err, answere) {
		if(err) return console.error(err);
		res.jsonp({answere});
	})
});

router.post('/', function(req, res) {
	var data = req.body; 

	if(
		typeof data.user != "undefined" 
		&& typeof data.answere != "undefined"
		&& typeof data.question != "undefined"
	) {
		var answere = new AnswereSchema({
			user: data.user,
			question: data.question
			answere: data.answere
		});

		answere.save(function (err, answere) {
			if (err) return console.error(err);
			res.jsonp({answere});
		});
	} else {
		res.jsonp({err: 'Invalid form data'});
	}
});

router.delete('/:answereID', function(req, res) {
	var uuid = req.headers['uuid'];

	var postID = req.params.postID;
	AnswereSchema.findOneAndRemove({ _id: answereID, user: uuid}, function(err) {
		if(!err) {
			res.jsonp({msg: 'Antwort gelöscht'});
		} else {
			res.jsonp({msg: 'Antwort konnte nicht gelöscht werden'});
		}
	}); 
});

module.exports = router;