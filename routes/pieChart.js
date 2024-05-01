const express = require('express');
const router = express.Router();

// Pie Chart API endpoint
router.get('/pie-chart', (req, res) => {
  const month = req.query.month;
  res.json({ category_items });
});

module.exports = router;
