import React from 'react'
import { HeroContainer, HeroBg, } from './heroElements'
import ImageSlideshow from '../Slideshow/ImageSlideshow'
import { SliderData } from '../Slideshow/SliderData'

const HeroSection = () => {

  return (
    <HeroContainer>
      <HeroBg>
        <ImageSlideshow slides={SliderData}/>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
