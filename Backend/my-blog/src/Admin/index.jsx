import React from "react";
// import BlogForm from "./components/BlogForm";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import DisplaySelectedItem from "./components/DisplaySelectedItem";
import { Box, CssBaseline } from "@mui/material";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Perform your authentication check here
    const token = localStorage.getItem("authToken"); // Change this to your actual storage key

    if (token) {
      // User is authenticated
      setAuthenticated(true);
    } else {
      // Redirect to login page if not authenticated
      console.log("failed");
      window.location.href = "/admin/login";
    }
  }, []); // Empty dependency array means this effect runs once after the initial render
  return (
    <div>
      {authenticated && (
        <div>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header className="z-10" />
            <div className="flex justify-center items-center">
              <SideNav setSelectedItem={setSelectedItem} />
              {/* <SideNav /> */}
              <div className=" md:ml-72 mt-32">
                <DisplaySelectedItem selectedItem={selectedItem} />
                {/* <DisplaySelectedItem /> */}
              </div>
            </div>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Home;
