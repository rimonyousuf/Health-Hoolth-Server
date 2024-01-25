const express = require('express')
const cors = require("cors")
const app = express()
const port = 5000

const foods = require('./data/food.json')
const blogs = require('./data/blog.json')
const chefs = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/foods', (req, res) => {
  res.send(foods);
})

app.get('/foods/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const food = foods.find(food => parseInt(food.id) === id);

  if (food) {
    res.send(food);
  } else {
    res.send({});
  }
})

app.get('/blogs', (req, res) => {
  res.send(blogs);
})

app.get('/chefs', (req, res) => {
  res.send(chefs);
})

app.listen(port)