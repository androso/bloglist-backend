const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Blog = require("../models/blog");
const mongoose = require("mongoose");

describe("api testing", () => {
  test("returns right amount of blogs in JSON", async () => {
    const {body} = await api.get("/api/blogs");
  })
})

afterAll(() => {
  mongoose.connection.close();
})