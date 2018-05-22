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

// ルーティング
app.use('/api/users/login', require('./routes/user_login.js'));
app.use('/api/users/sign-up', require('./routes/user_sign_up'));
app.use('/api/tasks', require('./routes/tasks.js'));
app.use('/api/tasks/create', require('./routes/create_task.js'));
app.use('/api/tasks/edit', require('./routes/edit_task.js'));
app.use('/api/tasks/delete', require('./routes/delete_task.js'));
app.use('/api/tasks/complete', require('./routes/complete_task.js'));
app.use('/api/tasks/star', require('./routes/favorite_tasks.js'));
app.use('/api/tasks/star/get', require('./routes/get_stared_tasks.js'));

module.exports = app;
