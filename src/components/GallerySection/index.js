import React, {useRef, useState} from 'react'
import * as ReactDOM from 'react-dom';
import { InfoContainer,
    InfoWrapper,
    InfoRow,
    TopLine,
    GalleryGrid,
    GalleryRow,
    Column,
    Image,
    ImageOverlay,
} from './galleryElements'



const GallerySection = () => {
    const [isOverlay, setIsOverlay] = useState(false);

    const showOverlay = () => {
        setIsOverlay(!isOverlay);
    }
    

  return (
    <InfoContainer id="gallery">
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>G A L L E R Y</TopLine>
            </InfoRow>
            <ImageOverlay src={require('../../Visuals/Gallery/Images/1.png')} onClick={showOverlay} visible={isOverlay}/>
            <GalleryGrid>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/1.png')} onClick={showOverlay} opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/2.png')} opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/3.png')} opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/4.png')} opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/5.png')} opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/6.png')} opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/7.png')} opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/8.png')} opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/9.png')} opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/10.png')} opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/11.png')} opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/12.png')} opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/13.png')} opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/14.png')} opacity={isOverlay}/></Column>
                </GalleryRow>
            </GalleryGrid>
        </InfoWrapper>

    </InfoContainer>
  )
}

export default GallerySection
