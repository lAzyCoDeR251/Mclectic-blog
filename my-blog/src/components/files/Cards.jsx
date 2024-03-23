import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Skeleton,
} from "@mui/material";

const Cards = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get("http://localhost:5000/auth/blogs");
        console.log("Blog Details:", response.data);
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, []);

  if (loading) {
    // Loading skeleton while fetching data
    return (
      <div className="md:p-6 mt-20 m-2">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 0, sm: 10, md: 14 }}
          display="flex"
          justifyContent="center"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos="zoom-out">
              <Card sx={{ maxWidth: 370 }}>
                <CardActionArea>
                  <Skeleton variant="rectangular" height={140} />
                  <CardContent>
                    <Skeleton variant="text" height={50} />
                    <Skeleton variant="text" height={20} />
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                  <Skeleton variant="text" height={5} />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  return (
    // <div className="ml-8 md:p-6 w-80 md:w-8/12 md:ml-10 mt-20">
    <div className="md:p-6 mt-20 m-2">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 0, sm: 10, md: 14 }}
        display="flex"
        justifyContent="center"
      >
        {blog.map((blog, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} data-aos="zoom-out">
            <Card sx={{ maxWidth: 370 }}>
              <CardActionArea>
                {blog.sections && blog.sections[0]?.images && (
                  <CardMedia
                    component="img"
                    className="h-60"
                    image={blog.sections[0].images[0]}
                    alt="Blog Image"
                  />
                )}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.heading}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.sections &&
                      blog.sections[0]?.paragraphs &&
                      blog.sections[0].paragraphs[0]?.slice(0, 100)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Cards;
