const express = require('express');
const router = express.Router();
const db = require('../../models');
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
  let userName = req.body.userName;
  let password = req.body.password;

  // リクエストにuserNameとpasswordは必須
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
    }
  };

  let userData = await db.User.findAll(condition);

  // ユーザーデータがなければ、ユーザーを作成。あればnullを返す。
  if (!userData.length) {
    let token = jwt.sign({ userToken: userName }, 'test');
    let params = {
      name: userName,
      password,
      token
    };

    return await db.User.create(params);
  } else {
    return null;
  }
}

module.exports = router;