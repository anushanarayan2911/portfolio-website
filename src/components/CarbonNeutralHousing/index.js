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
    ImageOverlay,
    LinkWrap,
    ImageLink,
    LogoImage
} from './CarbonNeutralHousingElements'

const CarbonNeutralHousing = () => {
    const[isOverlay, setIsOverlay] = useState(false);
    const [isImage, setIsImage] = useState('');

    var imagesPath = [
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-01.png'),
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-02.png'),
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-03.png'),
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-04.png'),
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-05.png'),
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-06.png'),
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-07.png'),
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-08.png'),
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-09.png'),
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-10.png'),
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-11.png'),
        require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-12.png'),
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
            <LinkWrap>
                <ImageLink to={"/"}>
                    <LogoImage src={require('../../Visuals/Home/Images/logoLight.png')}/>
                </ImageLink>
            </LinkWrap>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Carbon Neutral Housing</TopLine>
            </InfoRow>
            <Subtitle>Duration: 6 weeks</Subtitle>
            <br/>
            <Subtitle>Date: November - December 2021</Subtitle>
            <br/>
            <Subtitle>Nature: a technical report detailing 4 interventions that could be impemented into a 3 storey house in order to make it carbon neutral</Subtitle>
            <br/>
            <ImageOverlay onClick={showOverlay} src={isImage} visible={isOverlay}/>
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-01.png')} onClick={() => {showOverlay() ; setImage(0)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-02.png')} onClick={() => {showOverlay() ; setImage(1)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-03.png')} onClick={() => {showOverlay() ; setImage(2)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-04.png')} onClick={() => {showOverlay() ; setImage(3)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-05.png')} onClick={() => {showOverlay() ; setImage(4)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-06.png')} onClick={() => {showOverlay() ; setImage(5)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-07.png')} onClick={() => {showOverlay() ; setImage(6)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-08.png')} onClick={() => {showOverlay() ; setImage(7)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-09.png')} onClick={() => {showOverlay() ; setImage(8)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-10.png')} onClick={() => {showOverlay() ; setImage(9)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-11.png')} onClick={() => {showOverlay() ; setImage(10)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-12.png')} onClick={() => {showOverlay() ; setImage(11)}} opacity={isOverlay}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default CarbonNeutralHousing
