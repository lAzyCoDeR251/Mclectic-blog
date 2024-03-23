import React from "react";
import spaceImg from "../Assests/Untitled design (3).png";

const Space_Blog = () => {
  return (
    <div className="w-full border-b-[1px] border-black flex my-10">
      <div className="max-w-[900px] border-r-[1px] border-gray-900 mb-10">
        <div className="px-11">
          {" "}
          <h3 className="text-center font-light text-6xl m-10">Space</h3>
          <p className="text-justify m-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            rem ipsam suscipit sequi reiciendis dignissimos voluptatem, quos
            atque, optio velit commodi animi enim, ut qui quo debitis doloremque
            dolorem iste. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Officiis rem ipsam suscipit sequi reiciendis dignissimos
            voluptatem, quos atque, optio velit commodi animi enim, ut qui quo
            debitis doloremque dolorem iste. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Officiis rem ipsam suscipit sequi
            reiciendis dignissimos voluptatem, quos atque, optio velit commodi
            animi enim, ut qui quo debitis doloremque dolorem iste.
            <br />
            <img src={spaceImg} alt="xyz" className="h-72 mx-auto m-5" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            laboriosam soluta quia quis eligendi accusantium, beatae eaque est
            sapiente earum enim. Harum corporis obcaecati deserunt ipsum
            eligendi quibusdam excepturi sed. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repudiandae laboriosam soluta quia
            quis eligendi accusantium, beatae eaque est sapiente earum enim.
            Harum corporis obcaecati deserunt ipsum eligendi quibusdam excepturi
            sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae laboriosam soluta quia quis eligendi accusantium, beatae
            eaque est sapiente earum enim. Harum corporis obcaecati deserunt
            ipsum eligendi quibusdam excepturi sed.
          </p>
        </div>
        
      </div>
      <div className="hidden md:block p-8">
        <h3 className="text-center text-2xl p-2">Disclaimer</h3>
        <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit delectus ratione quam. Maiores, sequi. Odio temporibus quo rem? Asperiores repudiandae nam sed, commodi labore officia pariatur necessitatibus eveniet fugit.</p>

      </div>
    </div>
  );
};

export default Space_Blog;
