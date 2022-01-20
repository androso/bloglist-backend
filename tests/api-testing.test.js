const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Blog = require("../models/blog");



describe("api testing", () => {
  test("returns right amount of blogs in JSON", async () => {
    const response = await api.get("/api/blogs");
    expect(response.body.length).toBe(0);
  })
})

afterAll(() => {
  console.log("done");
  mongoose.connection.close();
})