const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ status: 'active', message: 'Express Server Running smoothly' });
});

app.get('/api/health', (req, res) => {
  res.json({ uptime: process.uptime(), timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


<!-- Updated: 2026-07-13T15:33:44+05:30 [Commit #335] -->


<!-- Updated: 2026-07-14T16:15:51+05:30 [Commit #341] -->


<!-- Updated: 2026-07-15T11:16:42+05:30 [Commit #345] -->


<!-- Updated: 2026-07-16T17:36:57+05:30 [Commit #351] -->


<!-- Updated: 2026-07-17T19:52:40+05:30 [Commit #359] -->


<!-- Updated: 2026-07-18T10:19:20+05:30 [Commit #362] -->


<!-- Updated: 2026-07-18T21:10:09+05:30 [Commit #367] -->


<!-- Updated: 2026-07-19T20:50:26+05:30 [Commit #370] -->


<!-- Updated: 2026-07-20T10:03:53+05:30 [Commit #372] -->


<!-- Updated: 2026-07-21T09:06:22+05:30 [Commit #377] -->


<!-- Updated: 2026-07-21T20:52:57+05:30 [Commit #382] -->


<!-- Updated: 2026-07-22T21:45:17+05:30 [Commit #388] -->


<!-- Updated: 2026-07-23T14:44:46+05:30 [Commit #391] -->


<!-- Updated: 2026-07-24T19:37:01+05:30 [Commit #399] -->


<!-- Updated: 2026-07-25T16:18:29+05:30 [Commit #401] -->


<!-- Updated: 2026-07-26T15:28:20+05:30 [Commit #405] -->
