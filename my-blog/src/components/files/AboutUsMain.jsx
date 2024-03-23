// AboutUsMain.js
import React from "react";

const AboutUsMain = () => {
  return (
    <div className="">
      <div className="relative z-10">
        <div class="absolute top-0 left-0 z-0">
          <div class="circle xxlarge shade1"></div>
          <div class="circle xlarge shade2"></div>
          <div class="circle large shade3"></div>
          <div class="circle mediun shade4"></div>
          <div class="circle small shade5"></div>
        </div>
      </div>

      <div className="flex justify-center h-screen bg-color">
        <div className="p-20">
          {" "}
          <div className="m-5 mb-10 text-white text-center">
            <h1 className=" m-4 animate-slide-up text-shadow text-5xl font-light uppercase">
              Welcome to Mclectic
            </h1>
            <h2 className="m-4 animate-slide-up text-shadow text-2xl font-light">
              Explore the Diverse and Eclectic World
            </h2>
            <p className="md:w-3/5  mx-auto justify-center animate-slide-up text-shadow text-lg font-light">
              At Mclectic, we're passionate about curating content that spans
              various fields and niches. Our blog is your go-to destination for
              technology, lifestyle, travel, and much more. We aim to provide
              engaging and informative content that caters to every interest.
              Join us on this journey through the multifaceted aspects of life!
            </p>
          </div>
          <div className=" mb-10 border-b-2 border-white mx-auto w-52"></div>
          <div className="m-5 mb-10 text-white text-center">
            <h1 className=" m-4 animate-slide-up text-shadow text-5xl font-light uppercase">
              Our Mission
            </h1>

            <p className="md:w-3/5  mx-auto text-center text-shadow text-lg font-light">
              Our mission is to provide a platform where curiosity knows no
              bounds. We aim to curate engaging and informative content that
              caters to every interest. Mclectic is more than just a blog; it's
              a journey through the multifaceted aspects of life.
            </p>
          </div>
          <div className=" mb-10 border-b-2 border-white mx-auto w-52"></div>
          <div className="m-5 mb-10 text-white text-center">
            <h1 className="m-4 animate-slide-up text-shadow text-5xl font-light uppercase">
              What We Offer
            </h1>

            <ul className="list-disc m-4  md:w-3/5  mx-auto text-justify">
              <li className="mb-4">
                <span className="font-bold">Electrifying Technology:</span> Stay
                updated with the latest in tech trends, gadgets, and innovations
                that are shaping the future.
              </li>
              <li className="mb-4">
                <span className="font-bold">Lifestyle Unleashed: </span>Explore
                a spectrum of lifestyle choices, from wellness tips to
                productivity hacks, designed to enhance your everyday life.
              </li>
              <li className="mb-4">
                <span className="font-bold">Wanderlust Chronicles: </span>Embark
                on virtual journeys with our travel narratives, uncovering
                hidden gems and inspiring destinations.
              </li>
              <li className="mb-4">
                <span className="font-bold">Niche Wonders: </span>Dive into
                niche-specific content, discovering the unique and extraordinary
                in every field.
              </li>
            </ul>
          </div>
          <div className=" mb-10 border-b-2 border-white mx-auto w-52"></div>
          <div className="m-5 mb-10 text-white text-center">
            <h1 className="m-4 animate-slide-up text-shadow text-5xl font-light uppercase">
              Who We Are
            </h1>

            <p className="md:w-3/5  mx-auto animate-slide-up text-shadow text-lg font-light">
              Mclectic is fueled by a team of passionate individuals who love to
              share their insights and discoveries. Our diverse team brings
              expertise from various backgrounds, ensuring a rich blend of
              perspectives in our content.
            </p>
          </div>
          <div className=" mb-10 border-b-2 border-white mx-auto w-52"></div>
          <div className="m-5 mb-10 text-white text-center">
            <h1 className="m-4 animate-slide-up text-shadow text-5xl font-light uppercase">
              Join the Mclectic Community
            </h1>

            <p className="md:w-3/5  mx-auto animate-slide-up text-shadow text-lg font-light">
              Connect with us on social media to be part of the Mclectic
              community. Share your thoughts, suggestions, and experiences. Your
              voice matters, and we're here to celebrate the diversity of
              interests that make our community vibrant
            </p>
          </div>
          <div className=" mb-10 border-b-2 border-white mx-auto w-52"></div>
          <div className="m-5 mb-10 text-white text-center">
            <h1 className="m-4 animate-slide-up text-shadow text-5xl font-light uppercase">
              Contact Us
            </h1>

            <p className="md:w-3/5  mx-auto animate-slide-up text-shadow text-lg font-light">
              Have something to share or a topic you'd like us to explore? Reach
              out to us at contact@mclectic.com. We'd love to hear from you!
            </p>
            {/* <p>
              Thank you for being a part of the Mclectic journey. Let's explore
              the extraordinary together!
            </p> */}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="absolute top-0 right-0 z-0">
          <div className="circle xxlarge shade1"></div>
          <div className="circle xlarge shade2"></div>
          <div className="circle large shade3"></div>
          <div className="circle medium shade4"></div>
          <div className="circle small shade5"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMain;
