const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/', (req, res) => {
  let userId = req.body.userId;
  // 昇順降順
  let orderBy = req.body.ASC_or_DESC;
  // 期限が近い順に並べ換えるフラグ
  let requestNearDeadlineTask = req.body.requestDeadline;
  let condition = {
    where: {
      user_id: userId,
      is_deleted: false,
    },
    order: [
      ['created_at', orderBy],
    ]
  };
  if (requestNearDeadlineTask !== 'false') {
    condition.order = [['deadline', 'ASC']];
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
