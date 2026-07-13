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
