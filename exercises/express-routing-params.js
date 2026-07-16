const express = require('express');
const router = express.Router();

// Route Parameters & Query Strings
router.get('/products/:category', (req, res) => {
  const { category } = req.params;
  const { sortBy = 'price', order = 'asc' } = req.query;
  res.json({
    category,
    sortBy,
    order,
    results: [`Sample product in ${category}`]
  });
});

module.exports = router;


<!-- Updated: 2026-07-13T15:49:00+05:30 [Commit #336] -->


<!-- Updated: 2026-07-14T22:17:44+05:30 [Commit #342] -->


<!-- Updated: 2026-07-15T13:15:33+05:30 [Commit #346] -->


<!-- Updated: 2026-07-16T18:21:10+05:30 [Commit #352] -->
