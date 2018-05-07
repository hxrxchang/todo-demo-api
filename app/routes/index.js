const express = require('express');
// ルーティングするで
const router = express.Router();

// routerにルーティングの動作を書いてく
router.use('/users/login', require('./user_login.js'));
router.use('/users/sign-up', require('./user_sign_up'));
router.use('/tasks', require('./tasks.js'));
router.use('/tasks/create', require('./create_task.js'));
router.use('/tasks/edit', require('./edit_task.js'));
router.use('/tasks/delete', require('./delete_task.js'));
router.use('/tasks/complete', require('./complete_task.js'));
router.use('/tasks/star', require('./favorite_tasks.js'));
router.use('/tasks/star/get', require('./get_stared_tasks.js'));

//routerをモジュールとして扱う準備
module.exports = router;
