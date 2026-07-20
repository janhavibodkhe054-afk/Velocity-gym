import React from 'react'
import HeroSection from '../components/GymPersonal/HeroSection'
import AboutGymTraining from '../components/GymPersonal/AboutGymTraining'
import ProgramsSection from '../components/GymPersonal/ProgramsSection'
import GalleryStrip from '../components/GymPersonal/GalleryStrip'

const GymPersonal = () => {
  return (
    <div>
      <HeroSection/>
      <AboutGymTraining/>
      <ProgramsSection/>
      <GalleryStrip/>
    </div>
  )
}

export default GymPersonal
