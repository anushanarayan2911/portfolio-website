import React, { useEffect, useState } from 'react'
import { HeroContainer, HeroBg, Image} from './heroElements'
import ImageSlideshow from '../Slideshow/ImageSlideshow'
import { SliderData } from '../Slideshow/SliderData'


const HeroSection = () => {
  var imagesPath = [
    require('../../Visuals/Home/Images/1.png'),
    require('../../Visuals/Home/Images/2.png'),
    require('../../Visuals/Home/Images/3.png'),
    require('../../Visuals/Home/Images/4.png'),
    require('../../Visuals/Home/Images/5.png')
  ]

  const [counter, setCounter] = useState(0);

  setInterval(function() {
    counter === 4 ? setCounter(0) : setCounter(counter + 1);
  }, 10000)
  
   
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageSlideshow slides={SliderData}/>
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
