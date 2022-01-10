const listHelper = require("../utils/list_helper");

describe('dummy', () => {
  test('returns one', () => {
    const blogs = [];
    const result = listHelper.dummy(blogs); 
    expect(result).toBe(1);
  })
})

describe('total likes', () => {
  const blogLIST = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17g8',
      title: 'Go To Statement Considered benign',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    }

  ]
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
  
  test("when there's only one blog, total equals its likes", () => {
    const result = listHelper.totalLikes(oneBlog);
    expect(result).toBe(oneBlog[0].likes);
  })
  test("when there's more than one blog, total equals the sum of likes", () => {
    const result = listHelper.totalLikes(blogLIST);
    expect(result).toBe(15);
  })
})