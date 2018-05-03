const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/', (req, res) => {
  let userId = req.body.userId;
  let requestCompletedTask = req.body.requestCompletedTask;
  let requestDeletedTask = req.body.requestDeletedTask;
  let condition = {
    where: {
      user_id: userId,
      is_completed: false,
      is_deleted: false,
    }
  };

  if (requestCompletedTask) {
    condition.where.is_completed = true;
  }

  if (requestDeletedTask) {
    condition.where.is_deleted = true;
  }

  db.Task.findAll(condition)
  .then((response) => {
    res.json({
      status: 200,
      message: 'success getting tasks',
      content: response
    });
  })
  .catch((error) => {
    res.json({
      status: 500,
      message: 'fail getting tasks',
      content: error
    });
  });
});

module.exports = router;
