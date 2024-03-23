import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Pagination,
} from "@mui/material";

const Cards = () => {
  return (
    // <div className="ml-8 md:p-6 w-80 md:w-8/12 md:ml-10 mt-20">
    <div className="md:p-6 mt-20 m-2">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 0, sm: 10, md:14 }}
        display="flex"
        justifyContent="center"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} data-aos="zoom-out">
            <Card sx={{ maxWidth: 370 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://picsum.photos/200/100"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
        <Pagination count={10} size="large" className="pt-6"/>
      </Grid>
    </div>
  );
}
export default Cards;