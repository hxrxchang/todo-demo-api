const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/', (req, res) => {
  let userId = req.body.userId;
  let condition = {
    where: {
      user_id: userId
    }
  };
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

router.post('/create', (req, res) => {
  let title = req.body.todoTitle;
  let description = req.body.todoDetail;
  let userId = req.body.userId;
  if (!(description && userId)) {
    throw new Error();
  }
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
});

router.post('/edit', (req, res) => {
  console.log('2222222222222222222222222222');
});

router.post('/complete', (req, res) => {
  console.log('3333333333333333333333');
});

router.post('/delete', (req, res) => {
  console.log('44444444444444444444444');
});

async function createTask(params) {
  return await db.Task.create(params);
}

module.exports = router;