const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/tasks', (req, res) => {
  const newTask = req.body;
  data.push(newTask);
  res.status(201).send('created');
});

app.get('/tasks', (req, res) => {
  res.status(200).send(data);
});

module.exports = app;
