const blogLIST = require("../tests/testingBlogList").blogs;


const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  if (blogs.length === 1) {
    return blogs[0].likes;
  } else {
    return blogs.reduce((sum, currBlog, currIndex) => {
      if (currIndex === 1 ) {
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

console.log(totalLikes(blogLIST));

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}