import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slidesImages = [
    {
        url: '../Visuals/Home/Images/1.png',
        caption: '1'
    },
    {
        url: '..Visuals/Home/Images/2.png',
        caption: '2'
    },
    {
        url: '..Visuals/Home/Images/3.png',
        caption: '3'
    }
]
function Slideshow() {
    return (
        <div className='slide-container'>
            <Slide>
                {slidesImages.map((slideImage, index)=> (
                    <div className='each-slide' key={index}>
                        <div style={{'background-image': `url(${slideImage.url})`}}>
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow
