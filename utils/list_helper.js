const blogLIST = require("../tests/testingBlogList").blogs;
const collection = require("lodash/fp/collection");
const _ = require("lodash");
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
  //USING LODASH
  const authorsArr = _.map(blogs, 'author');
  const mostRepeatedAuthor = _.head(_(authorsArr)
    .countBy()
    .entries()
    .maxBy(_.last));
  const authorBlogs = _.filter(blogs, { author: mostRepeatedAuthor });
  return {
    author: mostRepeatedAuthor,
    blogs: authorBlogs.length
  }

  // VANILLA JS
  // let authors = {}
  // let authorMostBlog = {
  //   author: "",
  //   blogs: 0
  // };
  // blogs.forEach((currBlog, currIndex) => {
  //   if (!authors[currBlog.author] && authors[currBlog.author] !== 0) {
  //     authors[currBlog.author] = 1
  //   } else {
  //     authors[currBlog.author] += 1
  //   }
  // })
  // for (let author in authors) {
  //   if (authors[author] > authorMostBlog.blogs) {
  //     authorMostBlog.author = author;
  //     authorMostBlog.blogs = authors[author];
  //   }
  // }
  // return authorMostBlog;
}
// console.log(mostBlogs(blogLIST));

const mostLiked = (blogs) => {
  if (blogs.length === 1) {
    return {
      author: blogs[0].author,
      likes: blogs[0].likes
    }
  } else {
    let authors = {}
    blogs.forEach((currBlog, currIndex) => {
      if (!authors[currBlog.author]) {
        authors[currBlog.author] = { likes: currBlog.likes }
      } else {
        authors[currBlog.author].likes += currBlog.likes
      }
    })
    const mostLikes = _.map(authors, (author) => author.likes).sort().reverse()[0];
    const mostLikedAuthor = _.findKey(authors, { likes: mostLikes });
    return {
      author: mostLikedAuthor,
      likes: mostLikes
    }
  }

}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLiked
}