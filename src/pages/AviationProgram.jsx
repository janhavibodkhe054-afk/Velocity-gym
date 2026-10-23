import React from 'react'
import AviationHero from '../components/aviation-program/AviationHero'
import AviationAbout from '../components/aviation-program/AviationAbout'
import AviationModules from '../components/aviation-program/AviationModules'
import AviationGalleryStrip from '../components/aviation-program/AviationGalleryStrip'
import IATACourseListing from '../components/aviation-program/IATACourseListing'

const AviationProgram = () => {
  return (
    <div>
      <AviationHero/>
      <AviationAbout/>
      <IATACourseListing/>
      <AviationModules/>
      <AviationGalleryStrip/>
    </div>
  )
}

export default AviationProgram
