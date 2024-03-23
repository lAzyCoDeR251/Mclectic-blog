import React from 'react'
import Header from '../components/Header_footer/Header'
import Footer from '../components/Header_footer/Footer'
import SpaceBanner from '../components/space_compoenets/SpaceBanner'
import SpaceBlogCard from '../components/space_compoenets/SpaceBlogCard'
import SpaceBlog from '../components/space_compoenets/Space_Blog'
import SpaceQuote from '../components/space_compoenets/SpaceQuote'

const Space = () => {
  return (
    <div>
        <Header />
        <SpaceBanner />
        <SpaceBlog />
        <SpaceBlogCard />
        <SpaceQuote />
        <Footer />
    </div>
  )
}

export default Space