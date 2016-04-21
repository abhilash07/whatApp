var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    os: String, 
    created: {
    	type: Date,
    	default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);