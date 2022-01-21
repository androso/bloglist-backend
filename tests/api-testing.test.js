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
  })
})

afterAll(() => {
  console.log("done");
  mongoose.connection.close();
})