const express = require('express');
const router = express.Router();
const user = require('../model/schema');
router.delete('/:date/:city', (req, res) =>{
  user.remove({
    'date': req.params.date,
    'city': req.params.city
  }, (err,user) => {
    if(err) {
      res.json(err);
    } else {
     res.json(user);
    }
  });
});

module.exports = router;
