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
    const noteID = request.params.id;
    const res = await Blog.findByIdAndDelete(noteID);
    response.status(204).end()
  })

module.exports = blogsRouter;