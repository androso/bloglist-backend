const blogLIST = require("../tests/testingBlogList").blogs;


const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  if (blogs.length === 1) {
    return blogs[0].likes;
  } else {
    return blogs.reduce((sum, currBlog, currIndex) => {
      if (currIndex === 1) {
        //first time, sum will be blogs[0], an object.
        const prevBlog = sum;
        return prevBlog.likes + currBlog.likes;
      }
      //second time onwards, sum will be the total likes up until current index
      return sum + currBlog.likes;
    })
  }
}
const favoriteBlog = (blogs) => {
  let maxLikes = 0;
  let mostLikedBlog = {}
  blogs.forEach((blog, index) => {
    if (blog.likes > maxLikes) {
      maxLikes = blog.likes
      mostLikedBlog.title = blog.title;
      mostLikedBlog.author = blog.author;
      mostLikedBlog.likes = blog.likes
    }
  })
  return mostLikedBlog;
}
const mostBlogs = (blogs) => {
  //TODO implement LODASH

  let authors = {}
  let authorMostBlog = {
    author: "",
    blogs: 0
  };
  blogs.forEach((currBlog, currIndex) => {
    if (!authors[currBlog.author] && authors[currBlog.author] !== 0) {
      authors[currBlog.author] = 1
    } else {
      authors[currBlog.author] += 1
    }
  })
  for (let author in authors) {
    if (authors[author] > authorMostBlog.blogs) {
      authorMostBlog.author = author;
      authorMostBlog.blogs = authors[author];
    }
  }
  return authorMostBlog;
  
}
console.log(mostBlogs(blogLIST));

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}