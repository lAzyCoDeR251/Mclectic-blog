import React from 'react'
import FactsBanner from '../components/facts_components/factsBanner'
import Footer from '../components/Header_footer/Footer';
import Header from '../components/Header_footer/Header';
import DidYouKnow from '../components/facts_components/DidYouKnow';
import FactsBlog from '../components/facts_components/FactsBlog';

const page = () => {
  return (
    <div>
        <Header />
        <FactsBanner />
        <FactsBlog />
        <DidYouKnow />
        <Footer />
    </div>
  )
}

export default page
