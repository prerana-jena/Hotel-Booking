import React from 'react'
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <Hero />
        <Destination/>
        <ExclusiveOffers/>
        <Testimonial/>
        <Newsletter/>
        
    </>
  )
}

export default Home;