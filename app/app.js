const express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extend: true}));
app.use(bodyParser.json());

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
}
app.use(allowCrossDomain);

const router = require('./routes/');
app.use('/api/', router);

let port = process.env.PORT || 3000;

app.listen(port);
console.log('listen on port' + port);
