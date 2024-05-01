const express = require('express');
const router = express.Router();

// Bar Chart API endpoint
router.get('/bar-chart', (req, res) => {
  const month = req.query.month;
  res.json({ price_ranges });
});

module.exports = router;
