require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

const cors = require("cors");
const connectDB = require("./db/db").connectDB;
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/BlogRoute");
const recentRoutes = require("./routes/RecentRoute")

// const errorHandler = require('./utils/errorHandler');

// database connection
connectDB()
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((error) => {
    console.log(`Error connecting to database: ${error}`);
  });

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// middlewarexs
app.use(express.json({ limit: "100mb" }));
app.use(cors());

// Routes
app.use("/auth/login", authRoutes);
app.use("/auth/blogs", blogRoutes);
app.use("/blogs", recentRoutes)

// Error handler
// app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
