var mongoose = require('mongoose');
var AnswereSchema = mongoose.Schema({
    user: {
    	type: String, 
    	require: true
    },
    question: {
    	type: String, 
    	require: true
    },
    answere: {
        type: String, 
        require: true
    }, 
    created: {
    	type: Date, 
    	default: Date.now
    }
});

module.exports = mongoose.model('Answere', AnswereSchema);