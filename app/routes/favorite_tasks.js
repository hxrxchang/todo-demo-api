const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/', (req, res) => {
  console.log('111111111111111111111111111');
  let taskId = req.body.taskId;
  favoriteTask(taskId)
  .then((response) => {
    let message;
    if (response.is_stared) {
      message = 'success stared item';
    } else {
      message = 'success unstared item';
    }

    res.json({
      status: 200,
      message,
      content: response
    });
  })
  .catch((error) => {
    res.json({
      status: 500,
      message: 'fail star item',
      content: error
    });
  });
});

async function favoriteTask(taskId) {
  let condition = {
    where: { id: taskId }
  };
  let task = await db.Task.findOne(condition);

  let params = {};
  if (task.is_stared) {
    params.is_stared =  false;
  } else {
    params.is_stared = true;
  }

  return await db.Task.update(params, condition);
}

module.exports = router;