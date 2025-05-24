const express = require('express');
const app = express();
const PORT = 8085;

app.use(express.json());

let tasks = [];
let nextId = 1;

app.post('/insert-tasks', (req, res) => {
  const inserted = req.body.map(task => ({
    id: String(nextId++),
    ...task
  }));
  tasks.push(...inserted);
  res.status(201).json(inserted);
});

app.get('/get-tasks', (req, res) => {
  res.json(tasks);
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}

module.exports = app;
