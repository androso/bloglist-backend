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

  test("succesfully posting to api", async () => {
    const blogsInDBBefore = await (await api.get("/api/blogs")).body;
    const blogToSave = {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 23
    }
    await api.post("/api/blogs").send(blogToSave);
    const blogsInDBAfter = await (await api.get("/api/blogs")).body;


    const savedBlog = await Blog.findOne({ title: blogToSave.title });

    expect(savedBlog.title).toEqual(blogToSave.title);
    expect(blogsInDBAfter.length).toBe(blogsInDBBefore.length + 1);
  })

  test("if likes is not provided, it defaults to 0", async () => {
    const blogToSave = {
      title: "Song of the sisters",
      author: "Hans Zimmer",
      url: "http://www.sisterhood.com"
    }
    await api.post("/api/blogs").send(blogToSave);
    const savedBlog = await Blog.findOne({ title: blogToSave.title });
    expect(savedBlog.likes).toBe(0);
  });

  test.only("if title and url not provided it returns bad request", async () => {
    const blogToSave = {
      author: "Hans Zimmer",
      likes: 20
    }
    await api.post("/api/blogs").send(blogToSave).expect(400);
  });
  
})

describe("deletion of a note", () => {
  test.only("success with 204 if it's valid", async () => {
      const previousBlogs = await testUtils.blogsInDB();
      const blogToDelete = previousBlogs[0];
      await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

      const currentBlogs = await testUtils.blogsInDB(); 
      const currentIDs = currentBlogs.map(blog => blog.id);

      expect(currentBlogs.length).toBe(previousBlogs.length - 1);
      expect(currentIDs).not.toContain(blogToDelete.id);
  })
}, 10000)

afterAll(() => {
  mongoose.connection.close();
})