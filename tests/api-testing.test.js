const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app.js");
const api = supertest(app);
const Blog = require("../models/blog");
const testUtils = require("./test-helper");

beforeEach(async () => {
  await Blog.deleteMany({});

  for (let blog of testUtils.initialBlogs) {
    let blogObject = new Blog(blog);
    await blogObject.save();
  }
})

describe("api testing", () => {
  test("returns right amount of blogs in JSON", async () => {
    const response = await api.get("/api/blogs").expect(200).expect('Content-Type', /application\/json/);
    expect(response.body.length).toBe(3);
  });

  test('_id is changed for id in each blog', async () => {
    const response = await api.get("/api/blogs");
    const aBlog = response.body[0];
    expect(aBlog.id).toBeDefined();
  });

  test.only("succesfully posting to api", async () => {
    const blogToSave = {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 23
    }
    
    const savedBlog = await api.post(blogToSave);
    const blogsInDB = await (await api.get("/api/blogs")).body;
    console.log(blogsInDB);

  })
})

afterAll(() => {
  console.log("done");
  mongoose.connection.close();
})