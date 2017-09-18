const express = require('express');
const router = express.Router();
const user = require('../model/schema');
const userDetails = require('../model/userDetailsSchema');
const passport = require('passport');
require('../config/passport')(passport);

var jwt = require('jsonwebtoken'); 

router.post('/', (req,res) => {
	user.create(req.body,(err,user) => {
		if(err)
		{
			console.log("error in insertion");
		}
		else {
			console.log(user);
			res.json(user);
		}
	});
});

router.post('/signup', (req,res) => {
	userDetails.create(req.body,(err,user) => {
		if(err)
		{
			console.log("error in insertion",err);
		}
		else {
			console.log(user)
			res.json(user);
		}
	});
});

router.post('/login', function(req, res) {
  userDetails.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      // Check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch) {
        	let payload = {
        		email : req.body.email
        	}
          // Create token if the password matched and no error was thrown
          var token = jwt.sign(payload, 'putsomethinghere', {
            expiresIn: '1h'// in seconds
          });
          res.json({ success: true, token: 'bearer ' + token });
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });
    }
  });
});

module.exports = router;