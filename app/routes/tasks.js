const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/create', (req, res) => {
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
  .catch((error) => {
    res.json({
      status: 500,
      message: 'creating task data err',
      content: error
    });
  });

  async function createTask(params) {
    return await db.Task.create(params);
  }
});

module.exports = router;