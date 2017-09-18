const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let schema = new Schema({
	date: String,
	city: String,
	temp: Number,
	humidity: Number,
	real_feel: Number,
	cloud: String,
	img: String
},{collection:'DayData',versionKey: false, unique: true});
module.exports = mongoose.model('DayData',schema);
