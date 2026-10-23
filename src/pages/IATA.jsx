import React from 'react'
import IATAHero from '../components/iata/IATAHero'
import IATAAbout from '../components/iata/IATAAbout'
import IATACourses from '../components/iata/IATACourses'
import IATAGalleryStrip from '../components/iata/IATAGalleryStrip'

const IATA = () => {
  return (
    <div>
      <IATAHero/>
      <IATAAbout/>
      <IATACourses/>
      <IATAGalleryStrip/>
    </div>
  )
}

export default IATA
