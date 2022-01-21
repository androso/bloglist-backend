const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.route("/")
  .get(async (request, response) => {
    const blogs = await Blog.find({});
    response.json(blogs);
  })
  .post(async (request, response) => {
    const blog = new Blog(request.body)
    const savedBlog = await blog.save();
    response.status(201).json(savedBlog);
  })

module.exports = blogsRouter;