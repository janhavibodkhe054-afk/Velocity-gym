import React from 'react'
import HomeTrainingHero from '../components/Hometraining/HomeTrainingHero'
import AboutHomeTraining from '../components/Hometraining/AboutHomeTraining'
import HomePersonalTraining from '../components/Hometraining/HomePersonalTraining'
import GalleryStrip from '../components/Hometraining/GalleryStrip'

const HomeTraining = () => {
  return (
    <div>
      <HomeTrainingHero/>
      <AboutHomeTraining/>
      <HomePersonalTraining/>
      <GalleryStrip/>
    </div>
  )
}

export default HomeTraining
