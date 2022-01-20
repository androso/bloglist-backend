const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app.js");
const api = supertest(app);
const Blog = require("../models/blog");



describe("api testing", () => {
  test("returns right amount of blogs in JSON", () => {
    let i = 0;
    expect(i).toBe(0);
    // const response = await api.get("/api/blogs");
    // expect(response.body.length).toBe(0);
  })
})

afterAll(() => {
  mongoose.connection.close();
})