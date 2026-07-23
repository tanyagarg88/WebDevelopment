const express = require('express');
const app = express();

app.use(express.json());

let tasks = [
  { id: 1, title: 'Learn JavaScript DOM', completed: true },
  { id: 2, title: 'Build Express REST API', completed: false }
];

app.get('/api/tasks', (req, res) => res.json(tasks));

app.post('/api/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, title: req.body.title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.delete('/api/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
});


<!-- Updated: 2026-07-13T13:09:41+05:30 [Commit #334] -->


<!-- Updated: 2026-07-13T21:15:55+05:30 [Commit #339] -->


<!-- Updated: 2026-07-14T12:44:11+05:30 [Commit #340] -->


<!-- Updated: 2026-07-15T11:04:29+05:30 [Commit #344] -->


<!-- Updated: 2026-07-15T18:30:20+05:30 [Commit #349] -->


<!-- Updated: 2026-07-16T16:16:28+05:30 [Commit #350] -->


<!-- Updated: 2026-07-16T22:54:30+05:30 [Commit #355] -->


<!-- Updated: 2026-07-17T13:43:31+05:30 [Commit #358] -->


<!-- Updated: 2026-07-18T14:43:08+05:30 [Commit #366] -->


<!-- Updated: 2026-07-19T15:32:04+05:30 [Commit #369] -->


<!-- Updated: 2026-07-20T18:15:49+05:30 [Commit #376] -->


<!-- Updated: 2026-07-21T18:49:54+05:30 [Commit #381] -->


<!-- Updated: 2026-07-22T21:32:14+05:30 [Commit #387] -->


<!-- Updated: 2026-07-23T09:29:25+05:30 [Commit #390] -->


<!-- Updated: 2026-07-23T22:37:58+05:30 [Commit #395] -->
