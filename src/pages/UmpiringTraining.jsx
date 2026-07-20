import React from 'react'
import UmpiringHero from '../components/UmpiringTraining/UmpiringHero'
import AboutUmpiring from '../components/UmpiringTraining/AboutUmpiring'
import UmpiringPrograms from '../components/UmpiringTraining/UmpiringPrograms'
import GalleryStrip from '../components/UmpiringTraining/GalleryStrip'

const UmpiringTraining = () => {
  return (
    <div>
      <UmpiringHero/>
      <AboutUmpiring/>
      <UmpiringPrograms/>
      <GalleryStrip/>
    </div>
  )
}

export default UmpiringTraining
