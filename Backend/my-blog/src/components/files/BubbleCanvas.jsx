// BubbleCanvas.js
import React from "react";
import "../styles/bubbleCanvas.css"; // Import the SCSS file

const BubbleCanvas = () => {
  return (
    <div className="relative z-20">
      <div className="canvas">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="bubble" />
        ))}
        <div className="">
          <h2 className="btn-shine  my-48 md:my-36">
            About Us
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BubbleCanvas;
