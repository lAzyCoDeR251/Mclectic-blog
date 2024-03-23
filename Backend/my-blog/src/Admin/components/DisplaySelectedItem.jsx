import React from 'react';
import BlogForm from './BlogForm';
import AddSideLinkForm from './AddSideLinkForm';
import AllBlogs from './AllBlogs';

const DisplaySelectedItem = ({ selectedItem }) => {
  return (
    <div>
      {selectedItem === 'form' && <BlogForm />}
      {selectedItem === 'form2' && <AddSideLinkForm />}
      {selectedItem === 'form3' && <AllBlogs />}
      {/* Add more cases for other components as needed */}
    </div>
  );
};

export default DisplaySelectedItem;
