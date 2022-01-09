
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Blog = require('./models/blog');
const PORT = 3003;

const mongoURL = process.env.mongoURL;

mongoose.connect(mongoURL);

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.redirect("/api/blogs");
})
app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)
  
  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})