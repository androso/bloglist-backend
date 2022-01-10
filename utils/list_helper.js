const dummy = (blogs) => {
  return 1;
}
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
    _id: '5a422aa71b54a676234d17f9',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 10,
    __v: 0
  }
]
const totalLikes = (blogs) => {
  
  if (blogs.length === 1) {
    return blogs[0].likes;
  } else {
    return blogs.reduce((prev, curr) => {
      return prev.likes + curr.likes;
    })
  }

  
}
console.log(totalLikes(blogLIST));
module.exports = {
  dummy,
  totalLikes
}