import React, { useState } from 'react'
import { InfoContainer, 
    InfoWrapper, 
    InfoRow,
    TopLine,
    Subtitle,
    Grid,
    Row,
    Column,
    Image, 
    ImageOverlay
} from './AramaElements'

const Arama = () => {
    const [isOverlay, setIsOverlay] = useState(false);
    const [isImage, setIsImage] = useState('');

    var imagesPath = [
        require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-01.png'),
        require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-02.png'),
        require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-03.png'),
        require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-04.png'),
        require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-05.png'),
        require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-06.png'),
        require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-07.png'),
        require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-08.png'),
        require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-09.png'),
        require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-10.png'),
        require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-11.png'),
    ]

    const setImage = (sourceLink) => {
        setIsImage(imagesPath[sourceLink]);
    }

    const showOverlay = () => {
        setIsOverlay(!isOverlay);
    }

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Arama</TopLine>
            </InfoRow>
            <Subtitle>Duration: 5 weeks</Subtitle>
            <br/>
            <Subtitle>Date: February - March 2022</Subtitle>
            <br/>
            <Subtitle>Nature: an individual ideation document, detailing the design process carried out to come up with a device to aid communication for severely autistic, non-verbal children done as part of an Industrial Design Engineering module in 2nd year</Subtitle>
            <br/>
            <ImageOverlay onClick={showOverlay} src={isImage} visible={isOverlay}/>
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-01.png')} onClick={() => {showOverlay() ; setImage(0)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-02.png')} onClick={() => {showOverlay() ; setImage(1)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-03.png')} onClick={() => {showOverlay() ; setImage(2)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-04.png')} onClick={() => {showOverlay() ; setImage(3)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-05.png')} onClick={() => {showOverlay() ; setImage(4)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-06.png')} onClick={() => {showOverlay() ; setImage(5)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-07.png')} onClick={() => {showOverlay() ; setImage(6)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-08.png')} onClick={() => {showOverlay() ; setImage(7)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-09.png')} onClick={() => {showOverlay() ; setImage(8)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-10.png')} onClick={() => {showOverlay() ; setImage(9)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-11.png')} onClick={() => {showOverlay() ; setImage(10)}} opacity={isOverlay}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default Arama
