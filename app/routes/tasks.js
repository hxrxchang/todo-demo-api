const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/', (req, res) => {
  let title = req.body.todoTitle;
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
    res.json({
      status: 200,
      message: 'task is saved',
      details: response
    });
  })
  .catch((err) => {
    console.log('1111111111111111');
    console.log(err);
    res.json({
      status: 500,
      message: 'creating task data err'
    });
  });

  async function createTask(params) {
    return await db.Task.create(params);
  }
});

module.exports = router;