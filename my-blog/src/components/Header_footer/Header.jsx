import React, { useState, useEffect } from "react";
// import { styled } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Hidden,
  Paper,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ArrowDropDown,
} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import "../../App.css";
import logoImage from "../Assests/Mclectic.png";
import { Link as RouterLink } from "react-router-dom";
import Popover from "@mui/material/Popover";
import { useLocation } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";

function Header() {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [open, setOpen] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handlePopoverOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setOpen(true);
  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  //   setOpen(false);
  // };

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <AppBar
      className="w-full"
      position="static"
      sx={{ backgroundColor: "#FFF", color: "#000" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo (you can replace this with your logo component or image) */}
        <Typography variant="h6" component="div">
          <img
            src={logoImage}
            alt="Your Logo"
            style={{ maxWidth: "100px", maxHeight: "30px", paddingTop: "9px" }}
          />
        </Typography>

        {/* Menu Items (Desktop View) */}
        <Hidden mdDown>
          <div>
            <Button
              color="inherit"
              className=""
              component={RouterLink}
              style={
                location.pathname === "/movies"
                  ? { borderBottom: "1px solid black", paddingBottom: "0.1px" }
                  : null
              }
              to="/movies"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  borderBottom: "1px solid black", // Customize the width and color
                  paddingBottom: "0.1px",
                },
                marginRight: 6,
                paddingTop: 3,
                fontSize: 16,
              }}
            >
              Movies
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              style={
                location.pathname === "/facts"
                  ? { borderBottom: "1px solid black", paddingBottom: "0.1px" }
                  : null
              }
              to="/facts"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  borderBottom: "1px solid black", // Customize the width and color
                  paddingBottom: "0.1px",
                },
                marginRight: 6,
                paddingTop: 3,
                fontSize: 16,
              }}
            >
              Facts
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              style={
                location.pathname === "/space"
                  ? { borderBottom: "1px solid black", paddingBottom: "0.1px" }
                  : null
              }
              to="/space"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  borderBottom: "1px solid black", // Customize the width and color
                  paddingBottom: "0.1px",
                },
                marginRight: 6,
                paddingTop: 3,
                fontSize: 16,
              }}
            >
              Space
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              style={
                location.pathname === "/about"
                  ? { borderBottom: "1px solid black", paddingBottom: "0.1px" }
                  : null
              }
              to="/about"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  borderBottom: "1px solid black", // Customize the width and color
                  paddingBottom: "0.1px",
                },
                marginRight: 6,
                paddingTop: 3,
                fontSize: 16,
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              style={
                location.pathname === "/contact"
                  ? { borderBottom: "1px solid black", paddingBottom: "0.1px" }
                  : null
              }
              to="/contact"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  borderBottom: "1px solid black", // Customize the width and color
                  paddingBottom: "0.1px",
                },
                marginRight: 6,
                paddingTop: 3,
                fontSize: 16,
              }}
            >
              Contact
            </Button>
            <Button
              color="inherit"
              // aria-owns={open ? "mouse-over-popover" : undefined}
              // aria-haspopup="true"
              // onMouseEnter={handlePopoverOpen}
              // onMouseLeave={handlePopoverClose}
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  borderBottom: "1px solid black", // Customize the width and color
                  paddingBottom: "0.1px",
                },
                paddingTop: 3,
                fontSize: 16,
              }}
            >
              More <ArrowDropDown />
            </Button>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            {/* <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
                top: 6,
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              onMouseEnter={handlePopoverOpen} 
              onMouseLeave={handlePopoverClose}
              disableRestoreFocus
            >
              <Paper sx={{ width: 250, textAlign: "center" }}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Item 1"
                      className="text-center cursor-pointer"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Item 2"
                      className="text-center cursor-pointer"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Item 3"
                      className="text-center cursor-pointer"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Item 4"
                      className="text-center cursor-pointer"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Item 5"
                      className="text-center cursor-pointer"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Popover> */}
          </div>
        </Hidden>

        {/* Mobile Menu Icon (Mobile View) */}
        <Hidden mdUp>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={handleMobileMenuClose}
          >
            <IconButton
              onClick={handleMobileMenuClose}
              className="cursor-pointer "
              sx={{
                float: "left",
                right: 80,
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <CloseIcon />
            </IconButton>
            <List sx={{ width: "200px" }}>
              <ListItem>
                <ListItemText
                  primary="Movies"
                  style={{ fontSize: "118px" }}
                  sx={{
                    "&:hover": {
                      // backgroundColor: "transparent",
                      // borderBottom: "1px solid black",
                      // paddingBottom: "0.1px",
                    },
                  }}
                  className="listitem text-center cursor-pointer"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Facts"
                  className="text-center cursor-pointer"
                  style={{ fontSize: "118px" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Space"
                  className="text-center cursor-pointer"
                  style={{ fontSize: "118px" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="About"
                  className="text-center cursor-pointer"
                  style={{ fontSize: "118px" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Contact"
                  className="text-center cursor-pointer"
                  style={{ fontSize: "118px" }}
                />
              </ListItem>
              <ListItem
              // onMouseOver={handlePopoverOpen}
              // onMouseLeave={handlePopoverClose}
              >
                <ListItemText
                  primary="More"
                  className="text-center cursor-pointer"
                  sx={{ fontSize: "118px", marginLeft: "50px" }}
                />{" "}
                <ListItemIcon>
                  <ArrowDropDown
                    fontSize="large"
                    sx={{ marginRight: "30px" }}
                  />
                </ListItemIcon>
              </ListItem>
              <Popover
                open={open}
                anchorEl={anchorEl}
                // onClose={handlePopoverClose}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{ right: 300, top: 145 }}
                // onMouseEnter={handlePopoverOpen} // Keep popover open when mouse enters the popover
                // onMouseLeave={handlePopoverClose} // Close on mouse leave from popover
              >
                <Paper sx={{ width: 250 }}>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Item 1"
                        className="text-center cursor-pointer"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Item 2"
                        className="text-center cursor-pointer"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Item 3"
                        className="text-center cursor-pointer"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Item 4"
                        className="text-center cursor-pointer"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Item 5"
                        className="text-center cursor-pointer"
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Popover>
            </List>

            <Divider />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px",
              }}
            >
              <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                {formattedTime}
              </Typography>
              <Typography variant="body1">{formattedDate}</Typography>
            </div>
          </Drawer>
        </Hidden>

        {/* Date and Time */}
        <Hidden mdDown>
          <div>
            <Typography
              variant="body2"
              sx={{ display: "flex", marginRight: 2 }}
            >
              {formattedTime}
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", paddingLeft: "5px" }}
            >
              {formattedDate}
            </Typography>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
