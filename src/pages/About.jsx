import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutMission from '../components/About/AboutMission'
import ServicesSection from '../components/About/ServicesSection'

import Statistics from '../components/About/Statistics'
import CoreValues from '../components/About/CoreValues'
import WhyChooseAbout from '../components/About/WhyChooseAbout'
import AboutVelocity from '../components/About/AboutVelocity'
import VisionMission from '../components/About/VisionMission'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutMission/>
      <AboutVelocity/>
      <VisionMission/>
      <Statistics/>
      <CoreValues/>
      <WhyChooseAbout/>
    </div>
  )
}

export default About
