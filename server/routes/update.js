const express = require('express');
const router = express.Router();
const user = require('../model/schema');
const getToken = require('./../utils/utility');
const passport = require('passport');
require('./../config/passport')(passport);

router.put('/:date/:city/:real_feel', passport.authenticate('jwt', { session: false }),(req,res) => {
	let token = getToken(req.headers);
	if(token) {
		user.update({
			date: req.params.date,
			city: req.params.city

		},
		{$set: {real_feel: req.params.real_feel}},
		(err,user) => {
			if(err) {
				console.log("error in updation", err);
			}
			else {
				console.log("updated");
				res.json(user);
			}
		}
		);}
	})

module.exports = router;
