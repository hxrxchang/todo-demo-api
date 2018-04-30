const express = require('express');
// ルーティングするで
const router = express.Router();

// routerにルーティングの動作を書いてく
router.use('/tasks', require('./tasks.js'));
router.use('/users', require('./users.js'));
// router.use('/users', require('./users.js'));

//routerをモジュールとして扱う準備
module.exports = router;