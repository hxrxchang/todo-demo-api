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
app.use('/api/users/login', require('./routes/user_login.js')); //ログイン
app.use('/api/users/sign-up', require('./routes/user_sign_up')); //サインアップ
app.use('/api/tasks', require('./routes/tasks.js')); //通常タスク取得
app.use('/api/tasks/star/get', require('./routes/get_stared_tasks.js')); //お気に入りタスク取得
app.use('/api/tasks/create', require('./routes/create_task.js')); //タスク作成
app.use('/api/tasks/edit', require('./routes/edit_task.js')); // タスク編集
app.use('/api/tasks/delete', require('./routes/delete_task.js')); //タスク削除
app.use('/api/tasks/complete', require('./routes/complete_task.js')); //タスク完了
app.use('/api/tasks/star', require('./routes/favorite_tasks.js')); //お気に入り登録

module.exports = app;
