import React from 'react'
import WhyusHero from '../components/Whyus/WhyusHero'
import WhyAbout from '../components/Whyus/WhyAbout'
import WhyChoose from '../components/Whyus/WhyChoose'
import OurAdvantages from '../components/Whyus/OurAdvantages'
import Statistics from '../components/Whyus/Statistics'
import FacilitiesProcess from '../components/Whyus/FacilitiesProcess'
import FAQ from '../components/Whyus/FAQ'
import CTASection from '../components/Whyus/CTASection'

const WhyUs = () => {
  return (
    <div>
      <WhyusHero/>
      <WhyAbout/>
      <Statistics/>
      <WhyChoose/>
      <OurAdvantages/>
      <FacilitiesProcess/>
      
      <FAQ/>
        <CTASection/>
    </div>
  )
}

export default WhyUs
