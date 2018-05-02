const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/', (req, res) => {
  let taskId = req.body.taskId;
  if (!taskId) {
    throw new Error();
  }
  let params = { is_completed: true };
  let condition = {
    where: { id: taskId }
  };

  db.Task.update(params, condition)
    .then((response) => {
      res.json({
        status: 200,
        message: 'success completing task',
        content: response
      });
    })
    .catch((error) => {
      res.json({
        status: 500,
        message: 'fail completing task',
        content: error
      });
    });
});

module.exports = router;