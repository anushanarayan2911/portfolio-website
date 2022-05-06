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
                    <Column><Image src={require('../../Visuals/Gallery/1.png')}/></Column>
                </GalleryRow>
            </GalleryGrid>
        </InfoWrapper>

    </InfoContainer>
  )
}

export default GallerySection
