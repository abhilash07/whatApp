var mongoose = require('mongoose');
var QuestionSchema = mongoose.Schema({
    user: {
    	type: String, 
    	require: true
    },
    question: {
    	type: String, 
    	require: true
    }, 
    created: {
    	type: Date, 
    	default: Date.now
    }
});

module.exports = mongoose.model('question', QuestionSchema);