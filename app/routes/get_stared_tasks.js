const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/', (req, res) => {
  let userId = req.body.userId;
  let ASC_or_DESC = req.body.ASC_or_DESC;
  let condition = {
    where: {
      user_id: userId,
      is_stared: true,
      is_deleted: false,
    },
    order: [
      ['created_at', ASC_or_DESC]
    ]
  };

  db.Task.findAll(condition)
  .then((response) => {
    res.json({
      status: 200,
      message: 'success getting stared tasks',
      content: response
    });
  })
  .catch((error) => {
    res.json({
      status: 200,
      message: 'fail getting stared tasks',
      content: error
    });
  });
});

module.exports = router;
