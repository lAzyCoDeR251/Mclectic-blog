import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post(`${window.location.origin}/auth/blogs/contact`, formData);
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
        // console.log("Form submitted successfully:", response.data);

        // Optionally, you can redirect the user to a thank-you page or show a success message
      } catch (error) {
        console.error("Error submitting form:", error);
        // Optionally, handle the error and provide feedback to the user
      }
    } else {
      console.error("Form submission failed. Please fix errors.");
      // Optionally, display a message to the user indicating that the form submission failed
    }
  };

  return (
    <div className="absolute top-48 left-0 right-0 mx-12 md:w-2/4 p-6 border bg-white rounded-lg shadow-md md:mx-auto">
      <form onSubmit={handleSubmit}>
        <div>
          <span className="uppercase text-sm text-gray-600 font-bold">
            Full Name
          </span>
          <input
            className="w-full text-gray-900 mt-2 p-3 rounded-lg border border-gray-400 focus:outline-none focus:shadow-outline"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Email
          </span>
          <input
            className="w-full text-gray-900 mt-2 p-3 rounded-lg border border-gray-400 focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
            placeholder="yourmail@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Message
          </span>
          <textarea
            className="w-full text-gray-900 mt-2 p-3 rounded-lg border border-gray-400 focus:outline-none focus:shadow-outline"
            placeholder="start typing...."
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-black text-white p-3 rounded-lg w-full md:w-2/5 focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
