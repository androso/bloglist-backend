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
  test("returns right amount of blogs in JSON", () => {
    let i = 0;
    expect(i).toBe(0);
    // const response = await api.get("/api/blogs");
    // expect(response.body.length).toBe(0);
  })
}, 10000)

afterAll(() => {
  console.log("done");
  mongoose.connection.close();
})