// Footer.js
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logoImage from "../Assests/Mclectic.png";

const Footer = () => {
  return (
    <footer className=" relative max-h-96 z-20 border-t-2 rounded-lg shadow-black border-t-gray-200 bg-white">
      <Grid container spacing={3}>
        {/* First Row */}
        <Grid item xs={12}>
          <Grid container rowSpacing={2} marginTop="30px">

            <Grid item xs={12} md={4} className="flex justify-center md:items-center">
              <Typography className="flex justify-center">
                <img
                  src={logoImage}
                  alt="Your Logo"
                  style={{
                    maxWidth: "300px",
                    maxHeight: "70px",
                    paddingTop: "9px",
                  }}
                />
                <span className="text-2xl font-medium mt-11">lectic</span>
              </Typography>
            </Grid>

            <Grid
              item
              container
              xs={12}
              md={8}
              display="flex"
              justifyContent="space-around"
              marginTop="30px"
            >
              <Grid item>
                <Typography
                  variant="h6"
                  style={{
                    borderBottom: "2px solid #000",
                    // color:"White",
                    marginBottom: "8px",
                    display: "inline-block",
                  }}
                >
                  Explore
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="flex flex-col"
                >
                  <Link
                    color="inherit"
                    underline="none"
                    style={{
                      fontSize: "18px",
                      marginTop: "15px",
                      display: "inline-block",
                    }}
                    className="hover:text-black hover:underline text-center"
                    href="/"
                  >
                    Space
                  </Link>
                  <br />
                  <Link
                    color="inherit"
                    underline="none"
                    style={{
                      fontSize: "18px",
                      marginTop: "5px",
                      display: "inline-block",
                      justifyContent: "center",
                    }}
                    className="hover:text-black hover:underline text-center"
                    href="/"
                  >
                    Facts
                  </Link>
                  <br />
                  <Link
                    color="inherit"
                    underline="none"
                    style={{
                      fontSize: "18px",
                      marginTop: "5px",
                      display: "inline-block",
                      justifyContent: "center",
                    }}
                    className="hover:text-black hover:underline text-center"
                    href="/"
                  >
                    Movies
                  </Link>
                </Typography>
              </Grid>

              <Grid
                item
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  style={{
                    borderBottom: "2px solid #000",
                    // color:"White",
                    marginBottom: "8px",
                    display: "inline-block",
                  }}
                >
                  <span className="text-center">Links</span>
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="flex flex-col"
                >
                  <Link
                    color="inherit"
                    underline="none"
                    style={{
                      fontSize: "18px",
                      marginTop: "15px",
                      display: "inline-block",
                    }}
                    className="hover:text-black hover:underline text-center"
                    href="/"
                  >
                    About
                  </Link>
                  <br />
                  <Link
                    color="inherit"
                    underline="none"
                    style={{
                      fontSize: "18px",
                      marginTop: "5px",
                      display: "inline-block",
                    }}
                    className="hover:text-black hover:underline text-center"
                    href="/"
                  >
                    Contact
                  </Link>
                  <br />
                  <Link
                    color="inherit"
                    underline="none"
                    style={{
                      fontSize: "18px",
                      marginTop: "5px",
                      display: "inline-block",
                    }}
                    className="hover:text-black hover:underline text-center"
                    href="/"
                  >
                    Connect
                  </Link>
                </Typography>
              </Grid>

              <Grid
                item
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  style={{
                    borderBottom: "2px solid #000",
                    // color:"White",
                    marginBottom: "8px",
                    display: "inline-block",
                  }}
                >
                  <span className="text-center">More</span>
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="flex flex-col"
                >
                  <Link
                    color="inherit"
                    underline="none"
                    style={{
                      fontSize: "18px",
                      marginTop: "15px",
                      display: "inline-block",
                    }}
                    className="hover:text-black hover:underline text-center"
                    href="/"
                  >
                    Work With Me
                  </Link>
                  <br />
                  <Link
                    color="inherit"
                    underline="none"
                    style={{
                      fontSize: "18px",
                      marginTop: "5px",
                      display: "inline-block",
                    }}
                    className="hover:text-black hover:underline text-center"
                    href="/"
                  >
                    FAQs
                  </Link>
                  <br />
                  <Link
                    color="inherit"
                    underline="none"
                    style={{
                      fontSize: "18px",
                      marginTop: "5px",
                      display: "inline-block",
                    }}
                    className="hover:text-black hover:underline text-center"
                    href="/"
                  >
                    Youtube
                  </Link>
                </Typography>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        {/* Second Row */}
        <Grid item xs={12}>
          {/* <Typography variant="h6">Quote</Typography> */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 300,
              fontStyle: "italic",
            }}
            className=" text-center p-8 md:pl-48 md:pr-48"
          >
            "Exploring the vast tapestry of knowledge, our channel embraces the
            eclectic, offering insights into every realm. Discover the joy of
            learning without boundaries."
          </Typography>
        </Grid>
        {/* Divider */}
        <Grid item xs={12} className="">
          <Divider className="" />
        </Grid>
        {/* Third Row */}
        <Grid item xs={12}>
          <Grid container className="flex justify-center md:justify-between" marginBottom="10px">
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
      </Grid>
    </footer>
  );
};

export default Footer;
