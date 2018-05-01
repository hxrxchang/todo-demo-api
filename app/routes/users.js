const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/login', (req, res) => {
  let userName = req.body.userName;
  let password = req.body.password;
  if (!(userName && password)) {
    throw new Error();
  }
  let condition = {
    where: {
      name: userName,
      password
    }
  };

  getUserData(condition)
  .then((response) => {
    if (response.length) {
      res.json({
        status: 200,
        message: 'success getting user',
        content: response
      });
    } else {
      res.json({
        status: 200,
        message: 'user is not found',
        content: response
      });
    }
  })
  .catch((error) =>{
    res.json({
      status: 500,
      message: 'fail getting user',
      content: err
    });
  });
});

router.post('/sign-up', (req, res) => {
  let userName = req.body.userName;
  let password = req.body.password;
  if (!(userName && password)) {
    throw new Error();
  }

  createUserData(userName, password)
  .then((response) => {
    if (response) {
      res.json({
        status: 200,
        message: 'success creating user',
        content: response
      });
    } else {
      res.json({
        status: 200,
        message: 'user is already registered',
        content: response
      });
    }
  })
  .catch((error) => {
    res.json({
      status: 500,
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