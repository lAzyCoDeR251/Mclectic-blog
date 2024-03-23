import React from "react";
import {
  Toolbar,
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse
} from "@mui/material";
import IconExpandLess from '@mui/icons-material/ExpandLess'
import IconExpandMore from '@mui/icons-material/ExpandMore'
import IconLibraryBooks from '@mui/icons-material/LibraryBooks'
// import BlogForm from "./BlogForm";
// import AddSideLinkForm from "./AddSideLinkForm";


const drawerWidth = 240;

function SideNav({ setSelectedItem }) {
  // const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="z-20">
      <div>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto", textAlign: "center" }}>
            <Divider />
            <List className="mt-3 ">
              {/* <ListItem disablePadding onClick={() => handleItemClick("form")}> */}
              <ListItem
                button
                onClick={handleClick}
              >
                <ListItemIcon >
                  <IconLibraryBooks />
                </ListItemIcon>
                <ListItemText primary="Add Blogs" />
                {open ? <IconExpandLess /> : <IconExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Divider />
                <List component="div" disablePadding>
                  <ListItem button onClick={() => handleItemClick("form")}>
                    <ListItemText inset primary="Movies" />
                  </ListItem>
                  <ListItem button onClick={() => handleItemClick("form3")}>
                    <ListItemText inset primary="All Blogs" />
                  </ListItem>
                  <ListItem button >
                    <ListItemText inset primary="Space" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
            <Divider />
            <List className="mt-3">
              <ListItem disablePadding onClick={() => handleItemClick("form2")}>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Add links Form" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem disablePadding className="md:hidden text-center">
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
          </Box>
        </Drawer>
      </div>
    </div>
  );
}

export default SideNav;
