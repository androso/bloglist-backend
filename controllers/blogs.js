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
    response.status(201).json(savedBlog.toJSON);
  })

blogsRouter.route("/:id")
  .delete(async (request, response) => {
    const blogID = request.params.id;
    const res = await Blog.findByIdAndDelete(blogID);
    response.status(204).end()
  })
  .put(async (request, response) => {
    const blogID = request.params.id;
    const res = await Blog.findByIdAndUpdate(blogID, request.body);
    response.status(200).end();
  })
  .get(async (request, response) => {
    const blogID = request.params.id;
    const blog = await Blog.findById(blogID);
    response.status(200).json(blog);
  })

module.exports = blogsRouter;