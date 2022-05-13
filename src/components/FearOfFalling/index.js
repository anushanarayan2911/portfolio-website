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
} from './FearOfFallingElements'

const FearOfFalling = () => {
    const [isOverlay, setIsOverlay] = useState(false);
    const [isImage, setIsImage] = useState('');

    var imagesPath = [
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-01.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-02.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-03.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-04.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-05.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-06.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-07.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-08.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-09.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-10.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-11.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-12.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-13.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-14.png'),
        require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-15.png')
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
                <TopLine>Fear of Falling</TopLine>
            </InfoRow>
            <Subtitle>Duration: 6 weeks</Subtitle>
            <br/>
            <Subtitle>Date: February - March 2021</Subtitle>
            <br/>
            <Subtitle>Nature: an ideation document detailing the design process conducted to come up with a design to lower the risk of falling</Subtitle>
            <br/>
            <ImageOverlay onClick={showOverlay} src={isImage} visible={isOverlay}/>
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-01.png')} onClick={() => {showOverlay() ; setImage(0)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-02.png')} onClick={() => {showOverlay() ; setImage(1)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-03.png')} onClick={() => {showOverlay() ; setImage(2)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-04.png')} onClick={() => {showOverlay() ; setImage(3)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-05.png')} onClick={() => {showOverlay() ; setImage(4)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-06.png')} onClick={() => {showOverlay() ; setImage(5)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-07.png')} onClick={() => {showOverlay() ; setImage(6)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-08.png')} onClick={() => {showOverlay() ; setImage(7)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-09.png')} onClick={() => {showOverlay() ; setImage(8)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-10.png')} onClick={() => {showOverlay() ; setImage(9)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-11.png')} onClick={() => {showOverlay() ; setImage(10)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-12.png')} onClick={() => {showOverlay() ; setImage(11)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-13.png')} onClick={() => {showOverlay() ; setImage(12)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-14.png')} onClick={() => {showOverlay() ; setImage(13)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Fear of Falling/NARAYAN_anusha-15.png')} onClick={() => {showOverlay() ; setImage(14)}} opacity={isOverlay}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default FearOfFalling
