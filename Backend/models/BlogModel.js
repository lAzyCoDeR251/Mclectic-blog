const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  sections: [
    {
      subheading: String,
      paragraphs: [String],
      images: [String], 
    },
  ],
  videos: String,
  links: [String],
  slug: {
    type: String,
    unique: true,
    required: true,
  }
});

const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;
