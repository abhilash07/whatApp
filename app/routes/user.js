var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var UserSchema = require('../models/user'); 

router.get('/', function(req, res) {
	UserSchema.find({}).exec(function(err, user) {
		if(!err) {
			res.jsonp({user});
		} else {
			res.jsonp({msg: 'Invalid'});
		}
	});
});

router.get('/:uuid', function(req, res) {
	UserSchema.find({_id: req.params.uuid}).exec(function(err, user) {
		if(!err) {
			res.jsonp({user});
		} else {
			res.jsonp({msg: 'Invalid'});
		}
	});
});

router.post('/', function(req, res) {
	if(typeof req.body.os != "undefined") {
		var user = new UserSchema({
			os: req.body.os
		});

		user.save(function (err, user) {
			if (err) return console.error(err);
			res.jsonp({user});
		});
	} else {
		res.jsonp({msg: 'Invalid Form'});
	}
});

router.delete('/:postID', function(req, res) {
	UserSchema.findOneAndRemove({ _id: req.params.postID}, function(err) {
		if(!err) {
			res.jsonp({msg: 'User gelöscht'});
		} else {
			res.jsonp({msg: 'User konnte nicht gelöscht werden'});
		}
	});
});

module.exports = router;