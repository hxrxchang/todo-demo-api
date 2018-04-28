const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
  console.log(req.query);
  res.json({
    message: 'this is tasks api',
  });
});

module.exports = router;