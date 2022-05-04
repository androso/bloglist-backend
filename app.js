require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blogs");
const logger = require("./utils/logger");
const config = require("./utils/config");
const middleware = require("./utils/middleware");

logger.info("Connecting to database");

<<<<<<< HEAD
=======

>>>>>>> f9a475be9875556231b347991868b0bf95a04aea
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info("Connected to MongoDB!");
  })
  .catch((error) => {
    logger.error(`error connecting to MongoDB: ${error.message}`);
  });

<<<<<<< HEAD
// try {
// 	await mongoose.connect(config.MONGODB_URI, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	});
// 	logger.info("connected to MongoDB");
// } catch (error) {
// 	logger.error("error connection to MongoDB:", error.message);
// }

=======
app.get('/', (req, res) => {
  res.send("<h1>Welcome to my Api!!</h1>")
})
  
>>>>>>> f9a475be9875556231b347991868b0bf95a04aea
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use("/api/blogs", blogsRouter);
<<<<<<< HEAD
=======
app.use(middleware.errorHandler);
>>>>>>> f9a475be9875556231b347991868b0bf95a04aea
app.use(middleware.unknownEndpoint);
module.exports = app;
