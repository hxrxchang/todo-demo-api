const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/login', (req, res) => {
  console.log('1111111111111111111111111');
  console.log(req.body);
  res.json({
    message: 'json from users login controller'
  });
});

router.post('/sign-up', (req, res) => {
  console.log('222222222222222222222222222');
  res.json({
    message: 'json from users sign-up controller'
  });
});

module.exports = router;