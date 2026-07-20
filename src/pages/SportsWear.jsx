import React from 'react'
import SportsWearHero from '../components/SportsWear/SportsWearHero'
import AboutSportsWear from '../components/SportsWear/AboutSportsWear'
import SportsWearSection from '../components/SportsWear/SportsWearSection'
import GalleryStrip from '../components/SportsWear/GalleryStrip'

const SportsWear = () => {
  return (
    <div>
      <SportsWearHero/>
      <AboutSportsWear/>
      <SportsWearSection/>
      <GalleryStrip/>
    </div>
  )
}

export default SportsWear
