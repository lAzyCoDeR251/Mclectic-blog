import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
// import Backdrop from "@mui/material/Backdrop";
// import Fade from "@mui/material/Fade";
import BlogForm from "./BlogForm";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // open modal
  const handleOpenModal = (blogId) => {
    setSelectedBlogId(blogId);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedBlogId(null);
    fetchBlogs();
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/blogs");
      setBlogs(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = blogs.filter(
        (blog) => blog.category === selectedCategory
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogs);
    }
  }, [selectedCategory, blogs]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Function to capitalize the first letter of each word
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Generate the heading dynamically based on the selected category
  const Conatinerheading = selectedCategory
    ? capitalizeFirstLetter(selectedCategory) + "Blogs"
    : "All Blogs";

  return (
    // <div className="border shadow-lg rounded-lg p-10 w-96">
    //   <h2 className="text-center border-b-2 p-2">All Blogs</h2>
    //   {blogs.length === 0 ? (
    //     <div>No blogs found.</div>
    //   ) : (
    //     <ul className="text-center p-2">
    //       {blogs.map((blog) => (
    //         <li
    //           key={blog._id}
    //           className="p-3 cursor-pointer hover:text-blue-600 hover:underline"
    //         >
    //           <h3>{blog.heading}</h3>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    <div>
      <div className="flex flex-col my-2">
        <label className="text-md font-normal">Category:</label>
        <select
          className="border rounded-md p-1"
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Blogs</option>
          <option value="movies">Movies</option>
          <option value="space">Space</option>
          <option value="facts">Facts</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="border shadow-lg rounded-lg p-10 w-96">
        <h2 className="text-center border-b-2 p-2">{Conatinerheading}</h2>
        <ul className="text-center p-2">
          {filteredBlogs.map((blog) => (
            <li
              key={blog._id}
              onClick={() => handleOpenModal(blog._id)}
              className="p-3 cursor-pointer hover:text-blue-600 hover:underline"
            >
              <h3>{blog.heading}</h3>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="my-5">
          <button
            className="absolute top-5 left-5 text-center bg-black hover:bg-gray-800 text-white py-2 px-4 border-2 border-white rounded-lg"
            onClick={handleCloseModal}
          >
            Close
          </button>
          <div
            className="flex justify-center "
            style={{ overflowY: "scroll", maxHeight: "100vh" }}
          >
            {selectedBlogId && <BlogForm selectedBlogId={selectedBlogId} />}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AllBlogs;
