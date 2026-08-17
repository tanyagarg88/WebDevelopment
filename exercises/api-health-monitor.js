const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  const memoryUsage = process.memoryUsage();
  res.json({
    status: 'healthy',
    uptime: `${Math.floor(process.uptime())}s`,
    memory: {
      heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
      heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`
    },
    timestamp: new Date().toISOString()
  });
});

module.exports = router;


<!-- Updated: 2026-08-17T18:04:02+05:30 [August Series Commit #9] -->
