import React from 'react'
import { InfoContainer,
    InfoWrapper,
    InfoRow,
    TopLine,
    GalleryGrid,
    GalleryRow,
    Column,
    Image
} from './galleryElements'

const GallerySection = () => {
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
            <GalleryGrid>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/1.png')}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/2.png')}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/3.png')}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/4.png')}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/5.png')}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/6.png')}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/7.png')}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/8.png')}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/9.png')}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/10.png')}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/11.png')}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/12.png')}/></Column>
                    <Column><Image src={require('../../Visuals/Gallery/Images/13.png')}/></Column>
                </GalleryRow>
                <GalleryRow>
                    <Column><Image src={require('../../Visuals/Gallery/Images/14.png')}/></Column>
                </GalleryRow>
            </GalleryGrid>
        </InfoWrapper>

    </InfoContainer>
  )
}

export default GallerySection
