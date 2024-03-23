const express = require("express");
const router = express.Router();
const BlogModel = require("../models/BlogModel");

// Route to retrieve recent blog data
router.get('/recent-blogs', async (req, res) => {
    try {
      // Query recent blog posts from MongoDB
      const recentBlogs = await BlogModel.find().sort({ _id: -1 }).limit(1);
      res.json(recentBlogs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;