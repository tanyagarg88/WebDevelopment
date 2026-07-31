const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let students = [
  { id: '1', name: 'Aarav Sharma', course: 'Computer Science', grade: 'A' },
  { id: '2', name: 'Ananya Patel', course: 'Data Science', grade: 'A+' },
  { id: '3', name: 'Rohan Verma', course: 'Cybersecurity', grade: 'B+' }
];

app.get('/students', (req, res) => {
  res.render('index', { students });
});

module.exports = app;


<!-- Updated: 2026-07-28T10:10:48+05:30 [Commit #412] -->


<!-- Updated: 2026-07-28T18:12:12+05:30 [Commit #415] -->


<!-- Updated: 2026-07-28T22:19:39+05:30 [Commit #418] -->


<!-- Updated: 2026-07-29T11:09:07+05:30 [Commit #419] -->


<!-- Updated: 2026-07-29T20:25:29+05:30 [Commit #422] -->


<!-- Updated: 2026-07-30T13:22:49+05:30 [Commit #424] -->


<!-- Updated: 2026-07-30T19:21:19+05:30 [Commit #427] -->


<!-- Updated: 2026-07-30T22:05:01+05:30 [Commit #430] -->


<!-- Updated: 2026-07-31T15:24:12+05:30 [Commit #431] -->
