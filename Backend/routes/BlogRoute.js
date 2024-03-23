const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const BlogModel = require("../models/BlogModel");

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 100,
  },
});

// This function generates a URL-friendly slug from a given string
function generateSlug(str) {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s]/gi, "") // Remove non-word characters
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .slice(0, 50); // Limit the length of the slug
}

// POST: Create a new blog entry with video and image uploads
router.post(
  "/",
  upload.fields([{ name: "videos", maxCount: 1 }, { name: "images" }]),
  async (req, res) => {
    console.log(req.files);
    try {
      const { category, heading, sections, links } = req.body;

      // Assuming you have a single video and multiple images
      const videoPath = req.files["videos"]
        ? req.files["videos"][0].path
        : null;
      const images = req.files["images"]
        ? req.files["images"].map((file) => file.path)
        : [];

      const newBlog = new BlogModel({
        category,
        heading,
        sections,
        videos: videoPath,
        images,
        links,
        slug: generateSlug(heading),
      });
      const savedBlog = await newBlog.save();
      const blog = res.json(savedBlog);
      console.log(blog);
    } catch (error) {
      console.error("Error creating blog entry:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
router.use("/uploads", express.static("uploads"));

// GET: Retrieve all blog entries
router.get("/", async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.json(blogs);
    console.log(blogs);
  } catch (error) {
    console.error("Error retrieving blog entries:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET: Retrieve a specific blog entry by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    console.error("Error retrieving blog by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT: Update an existing blog entry
router.put(
  "/:id",
  upload.fields([{ name: "videos" }, { name: "images" }]),
  async (req, res) => {
    const { id } = req.params;
    console.log(req.files);
    try {
      const { category, heading, sections, links } = req.body;

      // Check if images are provided in the request
      const images =
        req.files && req.files["images"]
          ? req.files["images"].map((file) => file.path)
          : [];

      // Add images and videos to the updatedFields if they exist in the request
      const updatedFields = {
        category,
        heading,
        sections,
        links,
        slug: generateSlug(heading),
      };

      // Only add videos field if it exists in the request body
      if (req.files && req.files["videos"] && req.files["videos"].length > 0) {
        updatedFields.videos = req.files["videos"][0].path;
      }

      // Only add images field if it exists in the request body
      if (images.length > 0) {
        updatedFields.images = images;
      }

      const updatedBlog = await BlogModel.findByIdAndUpdate(id, updatedFields, {
        new: true,
      });

      if (!updatedBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }

      res.json(updatedBlog);
    } catch (error) {
      console.error("Error updating blog entry:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// GET: Retrieve the latest uploaded blog entry
router.get("/latest", async (req, res) => {
  try {
    // Sort blogs based on the creation timestamp in descending order and limit to 1 result
    const latestBlog = await BlogModel.find().sort({ createdAt: -1 }).limit(1);

    if (latestBlog.length > 0) {
      res.json(latestBlog[0]); // Return the latest blog entry
      console.log("Latest Blog Entry:", latestBlog[0]);
    } else {
      res.json({}); // Return an empty object if no blogs are found
      console.log("No blogs found.");
    }
  } catch (error) {
    console.error("Error retrieving latest blog entry:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
