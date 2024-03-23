import React from "react";
// import Typography from "@mui/material/Typography";
import "../../App.css";
import image from "../Assests/banner1.png"

const Welcome = () => {
  return (
    <div className="bg-wlc w-full">
     <img src={image} alt="banner" className="w-full md:h-80  md:object-top"/>
    </div>
  );
};


export default Welcome;

// import React from "react";
// import Typography from "@mui/material/Typography";
// import "../../App.css";

// const Welcome = () => {
//   return (
//     <div className="bg-wlc">
      
//       <div className="welcome-container">
//         {[...Array(4)].map((_, index) => (
//           <Typography
//             key={index}
//             className="text"
//             sx={{
//               fontSize: {
//                 xs: "70px", 
//                 sm: "120px",
//                 md: "160px", 
//                 lg: "8rem",
//               },
//               fontWeight:200,
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             WELCOME
//           </Typography>
//          ))} 
//       </div>

      
//       <div className="blog-container">
//         {[...Array(4)].map((_, index) => (
//           <Typography
//             key={index}
//             className="text"
//             sx={{
//               fontSize: {
//                 xs: "40px", 
//                 sm: "60px", 
//                 md: "80px", 
//                 lg: "5rem", 
//               },
//             }}
//           >
//             To the Blog
//           </Typography>
//          ))} 
//       </div>
//     </div>
//   );
// };

// export default Welcome;
