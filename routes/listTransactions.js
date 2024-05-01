const express = require('express');
const router = express.Router();

// List Transactions API endpoint
router.get('/list-transactions', (req, res) => {
  const month = req.query.month;
  res.json({ transactions: transactions });
});

module.exports = router;
