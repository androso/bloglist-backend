const Blog = require("../models/blog");

const initialBlogs = [
  {
    title:"Essays",
    author:"Paul Graham",
    url:"http://www.paulgraham.com/articles.html",
    likes:12,
  },
  {
    title:"Essays",
    author:"Anibal Andrade",
    url:"https://blog.androsoa3.repl.co/",
    likes:0,
  },
  {
    title:"Learning how to learn",
    author:"Random guy",
    url:"https://blog.androsoa3.repl.co/",
    likes:0,
  }
]

<<<<<<< HEAD
module.exports = {
  initialBlogs
=======
const blogsInDB = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
  
}

module.exports = {
  initialBlogs,
  blogsInDB
>>>>>>> f9a475be9875556231b347991868b0bf95a04aea
};
