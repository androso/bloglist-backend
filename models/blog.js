const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true,
      minlength: 3
  },
  author: {
      type: String,
      required: true,
      minlength: 3
  },
  url: {
    type: String,
    minlength: 15
  },
  likes: {
    type: Number,
    default: 0
  }
});

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema);