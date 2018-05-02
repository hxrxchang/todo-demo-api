const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/', (req, res) => {
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

async function getUserData(condition) {
  return await db.User.findAll(condition);
}

module.exports = router;
