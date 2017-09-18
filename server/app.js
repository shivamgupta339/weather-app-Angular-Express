const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs'); // for file system
const bodyParser = require('body-parser');
const connect = require('./config/config');
const find = require('./routes/find');
const del = require('./routes/delete');
const insert = require('./routes/insert');
const update = require('./routes/update');
const index = require('./routes/index');
var passport = require('passport');  
var jwt = require('jsonwebtoken');  
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use(morgan('dev'));
app.use(morgan('common', {stream: fs.createWriteStream('./logs/debug.log',{flags: 'a'})}));
//app.use('/',index);

app.use(passport.initialize());  
require('./config/passport')(passport);

app.use('/', find);
app.use('/index', index);
app.use('/delete', del);
app.use('/update', update);
app.use('/insert', insert);

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');;
  console.log("Connected to mongo");
});
