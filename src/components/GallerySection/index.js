import React, { useState } from 'react'
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
    const [isImage, setIsImage] = useState('');

    var imagesPath = [
        require('../../Visuals/Gallery/Images/1.png'),
        require('../../Visuals/Gallery/Images/2.png'),
        require('../../Visuals/Gallery/Images/3.png'),
        require('../../Visuals/Gallery/Images/4.png'),
        require('../../Visuals/Gallery/Images/5.png'),
        require('../../Visuals/Gallery/Images/6.png'),
        require('../../Visuals/Gallery/Images/7.png'),
        require('../../Visuals/Gallery/Images/8.png'),
        require('../../Visuals/Gallery/Images/9.png'),
        require('../../Visuals/Gallery/Images/10.png'),
        require('../../Visuals/Gallery/Images/11.png'),
        require('../../Visuals/Gallery/Images/12.png'),
        require('../../Visuals/Gallery/Images/13.png'),
        require('../../Visuals/Gallery/Images/14.png'),
    ]

    const setImage = (sourceLink) => {
        setIsImage(imagesPath[sourceLink]);
    }

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
            <ImageOverlay src={isImage} visible={isOverlay} onClick={showOverlay}/>
            <GalleryGrid>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/1.png')} onClick={() => {showOverlay() ; setImage(0)}} opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/2.png')} onClick={() => {showOverlay() ; setImage(1)}} opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/3.png')} onClick={() => {showOverlay() ; setImage(2)}}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/4.png')} onClick={() => {showOverlay() ; setImage(3)}}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/5.png')} onClick={() => {showOverlay() ; setImage(4)}}opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/6.png')} onClick={() => {showOverlay() ; setImage(5)}}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/7.png')} onClick={() => {showOverlay() ; setImage(6)}}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/8.png')} onClick={() => {showOverlay() ; setImage(7)}}opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/9.png')} onClick={() => {showOverlay() ; setImage(8)}}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/10.png')} onClick={() => {showOverlay() ; setImage(9)}}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/11.png')} onClick={() => {showOverlay() ; setImage(10)}}opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/12.png')} onClick={() => {showOverlay() ; setImage(11)}}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/13.png')} onClick={() => {showOverlay() ; setImage(12)}}opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/14.png')} onClick={() => {showOverlay() ; setImage(13)}}opacity={isOverlay}/></Column>
                </GalleryRow>
            </GalleryGrid>
        </InfoWrapper>

    </InfoContainer>
  )
}

export default GallerySection
