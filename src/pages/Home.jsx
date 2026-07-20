import React from 'react'
import HeroSlider from '../components/Home/HeroSlider'
import HomeServices from '../components/Home/HomeServices'
import AboutSection from '../components/Home/AboutSection'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import HeroBanner from '../components/Home/HeroBanner'
import WorkProcess from '../components/Home/WorkProcess'
import Testimonials from '../components/Home/Testimonials'
import CTASection from '../components/Home/CTASection'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      
      <AboutSection/>
      <HomeServices/>
      <WhyChooseUs/>
      <HeroBanner/>
      <WorkProcess/>
      <Testimonials/>
      <CTASection/>
    </div>
  )
}

export default Home
