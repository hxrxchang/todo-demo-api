const express = require('express');
const router = express.Router();
const db = require('../../models');

router.post('/', (req, res) => {
  let userId = req.body.userId;
  let condition = {
    where: {
      user_id: userId,
      is_deleted: false
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

  db.Task.create(params)
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
  let taskId = req.body.taskId;
  if (!taskId) {
    throw new Error();
  }
  let title = req.body.title;
  let description = req.body.description;
  let params = {};
  if (title) params.title = title;
  if (description) params.description = description;

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

router.post('/complete', (req, res) => {
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

router.post('/delete', (req, res) => {
  let taskId = req.body.taskId;
  if (!taskId) {
    throw new Error();
  }
  let params = { is_deleted: true };
  let condition = {
    where: { id: taskId }
  };

  db.Task.update(params, condition)
  .then((response) => {
    res.json({
      status: 200,
      message: 'success deleting task',
      content: response
    });
  })
  .catch((error) => {
    res.json({
      status: 500,
      message: 'fail deleting task',
      content: error
    });
  });
});

module.exports = router;