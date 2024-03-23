import React from 'react'
import Header from '../components/Header_footer/Header';
import Welcome from '../components/files/Welcome';
import Cards from '../components/files/Cards';
import Intro from '../components/files/Intro';
import BlogPost from '../components/files/BlogPost';
import AboutUsShort from '../components/files/AboutUsShort';
import Footer from '../components/Header_footer/Footer'
import { Divider } from  "@mui/material";
const Home = () => {
  return (
    <div className="w-full bg-design">
      <Header />
      <Welcome />
      <Intro />
      <Divider style={{paddingTop:'50px'}}/>
      <BlogPost />
      <Cards />
      <AboutUsShort />
      <Footer />
    </div>
  )
}

export default Home
