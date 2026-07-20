import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutMission from '../components/About/AboutMission'
import ServicesSection from '../components/About/ServicesSection'
import FitnessBanner from '../components/About/FitnessBanner'
import Statistics from '../components/About/Statistics'
import CoreValues from '../components/About/CoreValues'
import WhyChooseAbout from '../components/About/WhyChooseAbout'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutMission/>
      <ServicesSection/>
      <FitnessBanner/>
      <Statistics/>
      <CoreValues/>
      <WhyChooseAbout/>
    </div>
  )
}

export default About
