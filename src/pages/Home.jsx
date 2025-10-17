import React from 'react'
import Hero from '../components/Hero/Hero'
import Newsletter from '../components/Newsletter/Newsletter'
import WhoIsFor from '../components/WhoIsFor/WhoIsFor'
import Features from '../components/Features/Features'
import Platforms from '../components/Platforms/Platforms'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <WhoIsFor />
      <Features />
      <Platforms />
      <Testimonials />
      <FAQ />
      <CTA secondary />
      <Newsletter />
    </>
  )
}

export default Home


