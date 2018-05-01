const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/login', (req, res) => {
  let userName = req.body.userName;
  let password = req.body.password;
  let condition = {
    where: {
      name: userName,
      password
    }
  };

  getUserData(condition)
  .then((response) => {
    console.log(response);
    res.json({
      message: 'success getting user',
      content: response
    });
  })
  .catch((error) =>{
    res.json({
      message: 'fail getting user',
      content: err
    });
  });
});

router.post('/sign-up', (req, res) => {
  let userName = req.body.userName;
  let password = req.body.password;

  createUserData(userName, password)
  .then((response) => {
    res.json({
      message: 'success creating user',
      content: response
    });
  })
  .catch((error) => {
    res.json({
      message: 'fail creating user',
      content: error
    });
  });
});

async function createUserData(userName, password) {
  let condition = {
    where: {
      name: userName,
      password
    }
  };

  let userData = await getUserData(condition);

  if (!userData.length) {
    let params = {
      name: userName,
      password
    };
    return await db.User.create(params);
  } else {
    return null;
  }
}

async function getUserData(condition) {
  return await db.User.findAll(condition);
}

module.exports = router;