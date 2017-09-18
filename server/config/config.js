const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/weather',{
  useMongoClient: true,
  /* other options */
});
module.exports = connect;