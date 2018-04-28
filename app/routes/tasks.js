const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/test', (req, res) => {
  console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
  console.log(req.body);
  let title = req.boby.todoTitle;
  let description = req.body.todoDetail;
  let userId = req.body.userId;
  let params = {
    user_id: userId,
    title,
    description,
    is_completed: false,
    is_deleted: false
  };

  createTask(params)
  .then((response) => {
    console.log(response);
    res.json({
      message: 'this is tasks api',
    });
  });
  // .catch((err) => {
  //   console.log(err);
  //   res.json({

  //   });
  // });

  // res.json({
  //   message: 'this is tasks api',
  // });

  async function createTask(params) {
    return await db.Task.create(params);
  }
});

module.exports = router;