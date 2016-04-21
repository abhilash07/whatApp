var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var QuestionSchema = require('../models/question'); 

router.get('/', function(req, res) {
	QuestionSchema.find(function(err, question) {
		if(err) return console.error(err);
		res.jsonp({question});
	})
});

router.post('/', function(req, res) {
	var data = req.body; 

	if(
		typeof data.user != "undefined" 
		&& typeof data.question != "undefined"
	) {
		var question = new QuestionSchema({
			user: data.user,
			question: data.question
		});

		question.save(function (err, question) {
			if (err) return console.error(err);
			res.jsonp({questions: question});
		});
	} else {
		res.jsonp({err: 'Invalid form data'});
	}
});

router.delete('/:postID', function(req, res) {
	var uuid = req.headers['uuid'];

	var postID = req.params.postID;
		QuestionSchema.findOneAndRemove({ _id: postID, user: uuid}, function(err) {
			if(!err) {
				res.jsonp({msg: 'Eintrag gelöscht'});
			} else {
				res.jsonp({msg: 'Eintrag konnte nicht gelöscht werden'});
			}
		}); 
});

module.exports = router;