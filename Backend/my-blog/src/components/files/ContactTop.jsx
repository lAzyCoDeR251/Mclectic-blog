import React from "react";
import { ArrowBack } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import ContactForm from "./ContactForm";
import { HashLink } from "react-router-hash-link";
const ContactTop = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 left-0">
          <RouterLink to="/">
            <ArrowBack
              className="text-white"
              sx={{
                fill: `#ffffff`,
                color: "primary",
                fontSize: "30px",
                cursor: "pointer",
                margin: "20px",
              }}
            />
          </RouterLink>
        </div>
        <div className="absolute top-0 right-0">
          <HashLink to="/contact#faq">
            <h3 className="text-white font-extralight m-5 text-xl cursor-pointer">
              FAQ
            </h3>
          </HashLink>
        </div>
        <div className="bg-custom-img h-64 bg-cover bg-center">
          <h2 className="text-center flex justify-center items-center pt-20 md:pt-8 font-light text-6xl md:text-9xl bg-gradient-to-b from-gray-200 via-gray-300 to-white bg-clip-text text-transparent ">
            Contact Us
          </h2>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactTop;
