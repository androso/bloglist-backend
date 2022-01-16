const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const blogsRouter = require("./controllers/blogs");
const logger = require("./utils/logger");
const config = require("./utils/config");
const middleware = require("./utils/middleware");
logger.info("Connecting to database");

mongoose.connect(config.MONGODB_URI)
  .then(_ => {
    logger.info("Connected to MongoDB!");
  })
  .catch((error) => {
    logger.error(`error connecting to MongoDB: ${error.message}`);
  });
app.get("/", (request, response) => {
  response.send("<h1>Welcome to my API</h1>")
})
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use('/api/blogs', blogsRouter);
app.use(middleware.unknownEndpoint);
module.exports = app;