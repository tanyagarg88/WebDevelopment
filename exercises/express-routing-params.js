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


<!-- Updated: 2026-07-17T21:49:15+05:30 [Commit #360] -->


<!-- Updated: 2026-07-18T13:00:57+05:30 [Commit #363] -->


<!-- Updated: 2026-07-19T21:03:26+05:30 [Commit #371] -->


<!-- Updated: 2026-07-20T12:31:26+05:30 [Commit #373] -->


<!-- Updated: 2026-07-21T09:20:19+05:30 [Commit #378] -->


<!-- Updated: 2026-07-21T22:03:53+05:30 [Commit #383] -->


<!-- Updated: 2026-07-22T18:11:57+05:30 [Commit #384] -->


<!-- Updated: 2026-07-22T22:39:27+05:30 [Commit #389] -->


<!-- Updated: 2026-07-23T15:38:10+05:30 [Commit #392] -->


<!-- Updated: 2026-07-25T19:58:11+05:30 [Commit #402] -->
