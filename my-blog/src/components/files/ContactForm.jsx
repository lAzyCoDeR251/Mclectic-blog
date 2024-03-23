import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to send data to the backend or handle form submission
        console.log("Form submitted:", formData);
        // You can make an API request or send the data to an email service here
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
        </div>
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="uppercase text-sm font-bold tracking-wide bg-gray-500 text-white p-3 rounded-lg w-full md:w-2/5 focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
