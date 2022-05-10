import React, {useState} from 'react'
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
} from './TravelToothpasteElements'

const TravelToothpaste = () => {
    const [isOverlay, setIsOverlay] = useState(false);
    const [isImage, setIsImage] = useState('')

    var imagesPath = [
        require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-01.png'),
        require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-02.png'),
        require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-03.png'),
        require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-04.png'),
        require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-05.png'),
        require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-06.png'),
        require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-07.png'),
        require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-08.png'),
        require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-09.png'),
        require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-10.png'),
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
                <TopLine>Travel Toothpaste</TopLine>
            </InfoRow>
            <Subtitle>Duration: 5 weeks</Subtitle>
            <br/>
            <Subtitle>Date: October - November 2021</Subtitle>
            <br/>
            <Subtitle>Nature: an individual research document, detailing the environmental impact of travel toothpastes, for a Sustainable Design Engineering module in 2nd year</Subtitle>
            <br/>
            <ImageOverlay onClick={showOverlay} src={isImage} visible={isOverlay}/>
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-01.png')} onClick={() => {showOverlay() ; setImage(0)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-02.png')} onClick={() => {showOverlay() ; setImage(1)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-03.png')} onClick={() => {showOverlay() ; setImage(2)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-04.png')} onClick={() => {showOverlay() ; setImage(3)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-05.png')} onClick={() => {showOverlay() ; setImage(4)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-06.png')} onClick={() => {showOverlay() ; setImage(5)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-07.png')} onClick={() => {showOverlay() ; setImage(6)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-08.png')} onClick={() => {showOverlay() ; setImage(7)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-09.png')} onClick={() => {showOverlay() ; setImage(8)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-10.png')} onClick={() => {showOverlay() ; setImage(9)}} opacity={isOverlay}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default TravelToothpaste
