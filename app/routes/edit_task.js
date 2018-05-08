const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/', (req, res) => {
  let taskId = req.body.taskId;
  if (!taskId && title) {
    throw new Error();
  }
  let title = req.body.newTitle;
  let description = req.body.newDetail;
  let deadline = req.body.newDeadline;
  let params = {};
  if (title) params.title = title;
  if (description) params.description = description;
  if (deadline) params.deadline = deadline;

  let condition = {
    where: { id: taskId }
  };

  db.Task.update(params, condition)
    .then((response) => {
      res.json({
        status: 200,
        message: 'success editing task',
        content: response
      });
    })
    .catch((error) => {
      res.json({
        status: 500,
        message: 'fail edition task',
        content: error
      });
    });
});

module.exports = router;
