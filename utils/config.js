require('dotenv').config()

const PORT = process.env.PORT;
const MONGODB_URI = process.env.NODE_ENV === 'test' ? process.env.mongoTest : process.env.mongoURL;

module.exports = {
  PORT,
  MONGODB_URI
}