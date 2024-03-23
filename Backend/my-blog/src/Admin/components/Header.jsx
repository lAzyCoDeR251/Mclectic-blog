import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";



// import BlogForm from "./BlogForm";
// import SideNav from "./SideNav";
// import BlankScreen from "./BlankScreen";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem("authToken");
    // Redirect the user to a certain page (e.g., home page)
    navigate("/");
  };

  return (
    <>
      <AppBar
        className="w-full z-30"
        position="fixed"
        sx={{ backgroundColor: "#FFF", color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1  }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div className="flex justify-center items-center">
            <Typography variant="h6" component="div" paddingLeft="20px">
              Dashboard
            </Typography>
          </div>

          <Typography variant="h6" component="div">
            Admin
          </Typography>

          <Typography
           onClick={handleLogout}
            variant="h6"
            component="div"
            paddingRight="40px"
            className="hidden md:block cursor-pointer"
          >
            Logout
          </Typography>
        </Toolbar>
      </AppBar>

    </>
  );
}

export default Header;
