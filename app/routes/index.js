const express = require('express');
// ルーティングするで
const router = express.Router();

// routerにルーティングの動作を書いてく
router.use('/tasks', require('./tasks.js'));
router.use('/users/login', require('./user_login.js'));
router.use('/users/sign-up', require('./user_sign_up'));
// router.use('/users', require('./users.js'));

//routerをモジュールとして扱う準備
module.exports = router;