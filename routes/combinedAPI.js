const express = require('express');
const router = express.Router();

// Combined API endpoint
router.get('/combined-api', async (req, res) => {
  try {
    const month = req.query.month;
    res.json({ combined_data });
  } catch (error) {
    console.error("Error fetching combined data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
