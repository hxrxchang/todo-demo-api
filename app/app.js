const express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extend: true}));
app.use(bodyParser.json());

let ENV = app.get('env');
if (ENV === 'development') {
  const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  }
  app.use(allowCrossDomain);
}

let port = process.env.PORT || 3000;

const router = require('./routes/');
app.use('/api/', router);

app.listen(port);
console.log('listen on port' + port);
