const express = require('express');
const router = express.Router();

// Statistics API endpoint
router.get('/statistics', (req, res) => {
  const month = req.query.month;
  res.json({ total_sale_amount, total_sold_items, total_unsold_items });
});

module.exports = router;
