import React from 'react'
import AdvanceHero from '../components/AdvanceTrainer/AdvanceHero'
import PersonalTrainerCourse from '../components/AdvanceTrainer/PersonalTrainerCourse'
import PersonalTrainerCoursePrograms from '../components/AdvanceTrainer/PersonalTrainerCoursePrograms'
import GalleryStrip from '../components/AdvanceTrainer/GalleryStrip'

const AdvanceTrainer = () => {
  return (
    <div>
      <AdvanceHero/>
      <PersonalTrainerCourse/>
      <PersonalTrainerCoursePrograms/>
      <GalleryStrip/>
    </div>
  )
}

export default AdvanceTrainer
