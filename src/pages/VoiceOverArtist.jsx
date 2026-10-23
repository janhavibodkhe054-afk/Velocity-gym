import React from 'react'
import VoiceOverArtistHero from '../components/voiceover/VoiceOverArtistHero'
import VoiceOverArtistAbout from '../components/voiceover/VoiceOverArtistAbout'
import VoiceOverArtistGalleryStrip from '../components/voiceover/VoiceOverArtistGalleryStrip'

const VoiceOverArtist = () => {
  return (
    <div>
      <VoiceOverArtistHero/>
      <VoiceOverArtistAbout/>
      <VoiceOverArtistGalleryStrip/>
    </div>
  )
}

export default VoiceOverArtist
