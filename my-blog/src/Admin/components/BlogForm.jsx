// BlogForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";
// import slugify from 'slugify';

const BlogForm = ({ selectedBlogId }) => {
  const [blogContent, setBlogContent] = useState({
    category: "",
    heading: "",
    sections: [{ subheading: "", paragraphs: [""], images: [""] }],
    videos: null,
    links: [],
    // slug: "",
  });

  // const [addedSections, setAddedSections] = useState([0]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogContent((prevContent) => ({
      ...prevContent,
      [name]: value,
      // slug: slugify(value, { lower: true })
    }));
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBlogContent((prevContent) => ({
        ...prevContent,
        videos: file,
      }));
    }
  };

  const handleSectionChange = (event, sectionIndex, field) => {
    const { value } = event.target;
    setBlogContent((prevContent) => {
      const updatedSections = [...prevContent.sections];
      updatedSections[sectionIndex][field] = value;
      return { ...prevContent, sections: updatedSections };
    });
  };

  const handleParagraphChange = (event, sectionIndex, paragraphIndex) => {
    const { value } = event.target;
    setBlogContent((prevContent) => {
      const updatedSections = [...prevContent.sections];
      updatedSections[sectionIndex].paragraphs[paragraphIndex] = value;
      return { ...prevContent, sections: updatedSections };
    });
  };

  const handleImageChange = (event, sectionIndex, imageIndex) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogContent((prevContent) => {
          const updatedSections = [...prevContent.sections];
          updatedSections[sectionIndex].images[imageIndex] = reader.result;
          return { ...prevContent, sections: updatedSections };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLinkChange = (event, linkIndex) => {
    const { value } = event.target;
    setBlogContent((prevContent) => ({
      ...prevContent,
      links: [
        ...prevContent.links.slice(0, linkIndex),
        value,
        ...prevContent.links.slice(linkIndex + 1),
      ],
    }));
  };

  // const handleAddSection = () => {
  //   setBlogContent((prevContent) => ({
  //     ...prevContent,
  //     sections: [
  //       ...prevContent.sections,
  //       { subheading: "", paragraphs: [""], images: [""] },
  //     ],
  //   }));
  // };

  const handleAddSection = () => {
    setBlogContent((prevContent) => ({
      ...prevContent,
      sections: [
        ...prevContent.sections,
        { subheading: "", paragraphs: [""], images: [""] },
      ],
    }));
  };

  const handleDeleteSection = (sectionIndex) => {
    // Only delete if the section is added (not the default section)
    if (sectionIndex !== 0) {
      setBlogContent((prevContent) => {
        const updatedSections = [...prevContent.sections];
        updatedSections.splice(sectionIndex, 1);
        return { ...prevContent, sections: updatedSections };
      });
    }
  };

  const handleAddParagraph = (sectionIndex) => {
    setBlogContent((prevContent) => {
      const updatedSections = [...prevContent.sections];
      updatedSections[sectionIndex].paragraphs.push("");
      return { ...prevContent, sections: updatedSections };
    });
  };

  const handleAddImage = (sectionIndex) => {
    setBlogContent((prevContent) => {
      const updatedSections = [...prevContent.sections];
      updatedSections[sectionIndex].images.push("");
      return { ...prevContent, sections: updatedSections };
    });
  };

  const handleAddLink = () => {
    setBlogContent((prevContent) => ({
      ...prevContent,
      links: [...prevContent.links, ""],
    }));
  };

  useEffect(() => {
    // Fetch the selected blog data if editing an existing blog
    if (selectedBlogId) {
      fetchBlogData(selectedBlogId);
    }
  }, [selectedBlogId]);

  const fetchBlogData = async (blogId) => {
    try {
      const response = await axios.get(`http://localhost:5000/auth/blogs/${blogId}`);
      const blogData = response.data;
      // Populate the form fields with the data of the selected blog
      setBlogContent(blogData);
      console.log("This is Blog Data: ", blogData);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (selectedBlogId) {
        // If selectedBlogId exists, update the existing blog
        response = await axios.put(
          `http://localhost:5000/auth/blogs/${selectedBlogId}`,
          blogContent,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        // If selectedBlogId is null, create a new blog
        response = await axios.post(
          "http://localhost:5000/auth/blogs",
          blogContent,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      if (response.status === 200) {
        console.log("Blog successfully saved to MongoDB!");
        // Optionally, you can redirect or perform other actions here
      } else {
        console.error("Failed to save blog to MongoDB");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-lg p-6 shadow-md h-fit w-fit bg-white overflow-auto"
    >
      <h2 className="text-center font-semibold text-2xl p-3 "> Add Blog </h2>

      {/* {category} */}
      <div className="flex flex-col my-2">
        <label className="text-md font-normal">Category:</label>
        <select
          className="border rounded-md p-1"
          name="category"
          value={blogContent.category}
          onChange={handleInputChange}
        >
          <option value="">Select Category</option>
          <option value="movies">Movies</option>
          <option value="space">Space</option>
          <option value="facts">Facts</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Heading Input */}
      <div className="flex flex-col">
        <label className="text-md font-normal">Heading:</label>
        <input
          className="border rounded-md p-1"
          type="text"
          name="heading"
          value={blogContent.heading}
          onChange={handleInputChange}
        />
      </div>

      {/* Section Inputs */}
      <div className="flex flex-col border rounded-lg p-2 mt-2 mb-2 shadow-sm">
        {blogContent.sections.map((section, sectionIndex) => (
          <div className="flex flex-col" key={sectionIndex}>
            {/* Subheading Input */}
            <label>Subheading:</label>
            <input
              className="border rounded-md p-1"
              type="text"
              value={section.subheading}
              onChange={(e) =>
                handleSectionChange(e, sectionIndex, "subheading")
              }
            />

            {/* Paragraphs Inputs */}
            <div className="flex flex-col border rounded-lg p-2 mt-2 mb-2 shadow-sm">
              <label>Paragraphs:</label>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <textarea
                  className="border rounded-md p-1 m-2"
                  key={paragraphIndex}
                  value={paragraph}
                  onChange={(e) =>
                    handleParagraphChange(e, sectionIndex, paragraphIndex)
                  }
                />
              ))}
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  onClick={() => handleAddParagraph(sectionIndex)}
                  className="m-2 p-2 border w-fit rounded bg-slate-500"
                >
                  Add Paragraph
                </button>
              </div>
            </div>

            {/* Images Inputs */}
            <div className="flex flex-col">
              <label>Images:</label>
              <div>
                {" "}
                {section.images.map((image, imageIndex) => (
                  <input
                    className="border rounded-md p-1"
                    key={imageIndex}
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageChange(e, sectionIndex, imageIndex)
                    }
                  />
                ))}
                <button
                  className="m-2 p-2 border w-fit rounded bg-slate-500"
                  type="button"
                  onClick={() => handleAddImage(sectionIndex)}
                >
                  Add Image
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-5">
          <div className="">
            <button
              className="m-2 p-2 border w-fit rounded bg-slate-500"
              type="button"
              onClick={handleAddSection}
            >
              Add Section
            </button>
          </div>

          {blogContent.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="">
              {/* Only render delete button for the last added section */}
              {sectionIndex === blogContent.sections.length - 1 && (
                <button
                  className="m-2 p-2 border w-fit rounded bg-red-500 text-white"
                  type="button"
                  onClick={() => handleDeleteSection(sectionIndex)}
                >
                  Delete Section
                </button>
              )}
              {/* Render section inputs */}
            </div>
          ))}
        </div>
      </div>

      {/* Videos Input */}
      <div className="flex flex-col mt-2">
        <label>Videos:</label>
        <input
          className="border rounded-md p-1"
          type="file"
          accept="video/*" // Specify that only video files are allowed
          name="videos"
          onChange={handleVideoChange}
        />
      </div>

      {/* Links Inputs */}
      <div className="mt-4">
        <label>Links:</label>
        {blogContent.links.map((link, linkIndex) => (
          <input
            className="border rounded-md p-1"
            key={linkIndex}
            type="text"
            value={link}
            onChange={(e) => handleLinkChange(e, linkIndex)}
          />
        ))}
        <button
          type="button"
          className="m-2 p-2 border w-fit rounded bg-slate-500"
          onClick={handleAddLink}
        >
          Add Link
        </button>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="m-2 p-2 border w-fit rounded bg-slate-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
