const listHelper = require("../utils/list_helper");
const blogLIST = require("./testingBlogList").blogs;
const mostLikedBlog = require("./testingBlogList").mostLikedBlog;

const oneBlog = [
  {
    _id: '8e422aa71b54a676234d17g8',
    title: 'Go To Statement Considered benign',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 20,
    __v: 0
  }
]

describe('dummy', () => {
  test('returns one', () => {
    const blogs = [];
    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
  })
})

describe('total likes', () => {

  test("when there's only one blog, total equals its likes", () => {
    const result = listHelper.totalLikes(oneBlog);
    expect(result).toBe(oneBlog[0].likes);
  })
  test("when there's more than one blog, total equals the sum of likes", () => {
    const result = listHelper.totalLikes(blogLIST);
    expect(result).toBe(36);
  })
})

describe("favorite blog", () => {
  test("getting the most liked blog out of a blog list", () => {
    const result = listHelper.favoriteBlog(blogLIST);
    expect(result).toEqual(mostLikedBlog)
  })
})

describe("Author with the most blogs", () => {
  test("When there's multiple author", () => {
    const result = listHelper.mostBlogs(blogLIST);
    expect(result).toEqual({ author: 'Edsger W. Dijkstra', blogs: 3 })
  })

  test("when there's only one blog, it returns that author and that blog", () => {
    const result = listHelper.mostBlogs(oneBlog);
    expect(result).toEqual({author: 'Edsger W. Dijkstra', blogs: 1})
  })
  
  test("when there's multiple authors with same amount of blogs, returns the first one", () => {
    const result = listHelper.mostBlogs(blogLIST);
    expect(result).toEqual({ author: 'Edsger W. Dijkstra', blogs: 3 })
  })
})