const express = require('express');
const router = express.Router();
const axios = require('axios');

// Initialize Database API endpoint
router.get('/initialize-database', async (req, res) => {
  try {
    const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
    res.json({ message: "Database initialized successfully" });
  } catch (error) {
    console.error("Error initializing database:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
