import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Divider } from "@mui/material";

const BottomFooter = () => {
  return (
    <div className="relative top-[68vh] bg-white">
      <Divider/>
      <Grid item xs={12}>
        <Grid
          container
          className="flex justify-center md:justify-between"
          marginBottom="10px"
          marginTop="20px"
        >
          <Grid item marginLeft="20px" marginBottom="20px">
            <Typography variant="body2" color="textSecondary">
              &copy; {new Date().getFullYear()} Mclectic. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item marginRight="20px" className="">
            <FacebookIcon
              style={{ marginLeft: "20px", fontSize: "32px" }}
              className="hover:text-gray-800 cursor-pointer"
            />
            <TwitterIcon
              style={{ marginLeft: "20px", fontSize: "32px" }}
              className="hover:text-gray-800 cursor-pointer"
            />
            <InstagramIcon
              style={{ marginLeft: "20px", fontSize: "32px" }}
              className="hover:text-gray-800 cursor-pointer"
            />
            <YouTubeIcon
              style={{ marginLeft: "20px", fontSize: "32px" }}
              className="hover:text-gray-800 cursor-pointer"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default BottomFooter;
