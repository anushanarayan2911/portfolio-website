import React, {useState} from 'react'
import Video from '../../Videos/video.mp4'
import { HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward, 
  ArrowRight 
} from './heroElements'
import {Button} from '../ButtonElements'
import ImageSlideshow from '../Slideshow/ImageSlideshow'
import { SliderData } from '../Slideshow/SliderData'

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  
  const onHover = () => {
      setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBg>
        <ImageSlideshow slides={SliderData}/>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
