import React, {useEffect, useState} from 'react'
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
    const [imgSource, setImgSource] = useState('');
    var source;
    var randomImages = [
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
        require('../../Visuals/Gallery/Images/14.png')
    ]

    const showOverlay = (sourceLink) => {
        setIsOverlay(!isOverlay);
        setImgSource(sourceLink);

        for (let i = 0; i < randomImages.length; i++) {
            const start = randomImages[i].lastIndexOf('/') + 1;
            const end = randomImages[i].indexOf('.');
            const length = end - start;
            const index = randomImages[i].substr(start, length);
            
            console.log(index)
        }
    }

    const hideOverlay = () => {
        setIsOverlay("false");
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
            <ImageOverlay src={randomImages[0]} onClick={hideOverlay} visible={isOverlay}/>
            <GalleryGrid>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/1.png')} onClick={() => showOverlay('1')} opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/2.png')} onClick={() => showOverlay('2')} opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/3.png')} onClick={() => showOverlay('3')}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/4.png')} onClick={() => showOverlay('../../Visuals/Gallery/Images/4.png')}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/5.png')} onClick={() => showOverlay('../../Visuals/Gallery/Images/5.png')}opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/6.png')} onClick={() => showOverlay('../../Visuals/Gallery/Images/6.png')}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/7.png')} onClick={() => showOverlay('../../Visuals/Gallery/Images/7.png')}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/8.png')} onClick={() => showOverlay('../../Visuals/Gallery/Images/8.png')}opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/9.png')} onClick={() => showOverlay('../../Visuals/Gallery/Images/9.png')}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/10.png')} onClick={() => showOverlay('../../Visuals/Gallery/Images/10.png')}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/11.png')} onClick={() => showOverlay('../../Visuals/Gallery/Images/11.png')}opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/12.png')} onClick={() => showOverlay('../../Visuals/Gallery/Images/12.png')}opacity={isOverlay}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/13.png')} onClick={() => showOverlay('../../Visuals/Gallery/Images/13.png')}opacity={isOverlay}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/14.png')} onClick={() => showOverlay('../../Visuals/Gallery/Images/14.png')}opacity={isOverlay}/></Column>
                </GalleryRow>
            </GalleryGrid>
        </InfoWrapper>

    </InfoContainer>
  )
}

export default GallerySection
