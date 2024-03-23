import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider, Skeleton } from "@mui/material";
import "../../App.css";
// import assest from "../Assests/Ma.png";

const BlogPost = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(
          `${window.location.origin}/blogs/recent-blogs`
        );
        // console.log("Blog Details:", response.data);
        setBlog(response.data[0]);
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
      <div className="bg-white border rounded-lg md:p-6 shadow-md w-96 md:w-3/4 md:ml-10 mt-20 ">
        <Skeleton animation="wave" height={60} />
        <Skeleton animation="wave" height={200} />
        <Skeleton animation="wave" height={20} width="80%" />
        <Skeleton animation="wave" height={200} />
        <Skeleton animation="wave" height={20} width="80%" />
        <Skeleton animation="wave" height={300} />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="bg-white border rounded-lg md:p-6 shadow-md w-96 md:w-3/4 md:ml-10 mt-20 ">
        <h2 className="p-3 text-4xl font-medium text-center">{blog.heading}</h2>
        <div className="">
          {blog.sections &&
            blog.sections.map((section, index) => (
              <div key={index}>
                {section.paragraphs &&
                  section.paragraphs.map((paragraph, pIndex) => (
                    <div className="m-5" key={pIndex}>
                      <p className="text-justify">{paragraph}</p>
                    </div>
                  ))}

                <div className="flex justify-center">
                  <img key={index} src={section.images} alt={`pic ${index}`} />
                </div>
                {section.afterImageParagraphs &&
                  section.afterImageParagraphs.map((paragraph, pIndex) => (
                    <div className="m-5" key={pIndex}>
                      {/* <h2 className="p-3 text-4xl font-medium"></h2> */}
                      <p className="text-justify">{paragraph}</p>
                    </div>
                  ))}
              </div>
            ))}

          {blog.videos && (
            <div className="flex justify-center mb-10">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  title="Blog Video"
                  className="w-full h-full"
                  src={blog.videos}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white hidden md:block border rounded-lg p-6 shadow-md ml-12 mt-20 md:mr-10 w-1/3 h-fit">
        <div>
          <h3 className="p-3 text-2xl text-center">Explore Topics</h3>
          <Divider />
          <div className="m-9 text-center">
            <ul>
              <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                <a href="@">Space</a>
              </li>
              <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                <a href="@">Moveis</a>
              </li>
              <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                <a href="@">History</a>
              </li>
              <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                <a href="@">Facts</a>
              </li>
              <li className="p-3 text-lg font-light hover:text-blue-600 hover:underline">
                <a href="@">Do you Know?</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <Container>
    //   <Paper
    //     elevation={3}
    //     sx={{
    //       ml: 0,
    //       padding: 0,
    //       border: "1px solid #ddd",
    //       width: "75%",
    //       marginTop: 9,
    //       marginLeft: "-50px",
    //     }}
    //   >
    //     <Typography variant="h4" align="center" sx={{ mt: 2 }}>
    //       JFK Assassination
    //     </Typography>

    //     <Box m={3} p={3} sx={{ flex: 1 }}>
    //       <Grid container spacing={2}>
    //         Left Column: Initial Paragraph
    //         <Grid item xs={12} sm={6}>
    //           <Typography
    //             variant="body1"
    //             sx={{ textAlign: "justify", width: "auto" }}
    //           >
    //             On a crisp November day in 1963, the world was forever changed
    //             as the echoes of three fateful shots rang out in Dallas, Texas.
    //             President John F. Kennedy, the charismatic and beloved leader of
    //             the United States, was assassinated in broad daylight, sending
    //             shockwaves across the nation and the globe. On a crisp November
    //             day in 1963, the world was forever changed as the echoes of
    //             three fateful shots rang out in Dallas, Texas. President John F.
    //             Kennedy, the charismatic and beloved leader of the United
    //             States, was assassinated in broad daylight, sending shockwaves
    //             across the nation and the globe. daylight, sending shockwaves
    //             across the nation and the globe.
    //           </Typography>
    //         </Grid>

    //         Right Column: Image Carousel
    //         <Grid item xs={12} sm={6} padding={4}>
    //           <img
    //             src={img}
    //             alt="Temp img"
    //             style={{
    //               padding:4,
    //               width: "100%",
    //               height: "auto",
    //               maxWidth: "100%",
    //             }}
    //           />
    //         </Grid>
    //       </Grid>

    //       Rest of the Paragraph
    //       <Typography variant="body1" sx={{ textAlign: "justify" }}>
    //         The official account placed the blame on Lee Harvey Oswald, a lone
    //         gunman firing from a sixth-floor window, but this event would become
    //         one of the most enduring mysteries and sources of controversy in
    //         American history. With a complex web of conspiracy theories,
    //         unanswered questions, and a multitude of investigations, the JFK
    //         assassination has captured the imaginations of generations.
    //         Continue the rest of your paragraph
    //       </Typography>
    //     </Box>

    //     <iframe
    //       title="Video Title"
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/your-video-id"
    //       frameborder="0"
    //       allowfullscreen
    //     ></iframe>
    //   </Paper>
    // </Container>
  );
};

export default BlogPost;
