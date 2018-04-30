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
  let userName = req.body.userName;
  let password = req.body.password;
  let condition = {
    where: {
      name: userName,
      password,
    },
  };

  getUserData(condition)
  .then((response) => {
    console.log(response);
    res.json({
      message: 'json from users sign-up controller'
    });
  })
  .catch((error) => {
    console.log(error);
    console.log('ここまできてるよ');
    res.json({
      message: error
    });
  });

  async function getUserData(condition) {
    return await db.User.findAll(condition);
  }
});

module.exports = router;