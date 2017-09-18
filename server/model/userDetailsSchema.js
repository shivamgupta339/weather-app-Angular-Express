const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let schema = new Schema({
	username: String,
	email: String,
	mobileNo: Number,
	password: String
},{collection:'userDetails',versionKey: false, unique: true});

schema.methods.comparePassword = function(pw, cb) {  
    if(this.password == pw) {
    	cb(null,true)
    }
    else {
    	cb(null, false);
    }
  };
module.exports = mongoose.model('userDetails',schema);
