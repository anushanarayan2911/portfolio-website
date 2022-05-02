import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import './slideshow.css'

const ImageSlideshow = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }  
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


  return (
    <section className='slider'>
        <AiOutlineArrowLeft className='leftArrow' onClick={prevSlide}/>
        <AiOutlineArrowRight className='rightArrow' onClick={nextSlide}/>
        {SliderData.map((slide, index) => {
            return (
                (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt=" image" className='image'/>)}
                        
                    </div>
                )
            )
        })}
    </section>
  )
}

export default ImageSlideshow
