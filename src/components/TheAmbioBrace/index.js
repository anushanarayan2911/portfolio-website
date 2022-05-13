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
    ImageOverlay,
    LinkWrap,
    ImageLink,
    LogoImage
 } from './TheAmbioBraceElements'

const TheAmbioBrace = () => {
    const [isOverlay, setIsOverlay] = useState(false);
    const [isImage, setIsImage] = useState('');

    var imagesPath = [
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-01.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-02.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-03.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-04.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-05.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-06.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-07.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-08.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-09.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-10.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-11.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-12.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-13.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-14.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-15.png'),
        require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-16.png')
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
                <TopLine>The Ambio Brace</TopLine>
            </InfoRow>
            <Subtitle>Duration: 6 weeks</Subtitle>
            <br/>
            <Subtitle>Date: May - June 2021</Subtitle>
            <br/>
            <Subtitle>Nature: a group project working to design a product that improved phyiscal wellbeing, specifically in elderly people, as part of a Human-Centred Design module in 1st year</Subtitle>
            <br/>
            <ImageOverlay onClick={showOverlay} src={isImage} visible={isOverlay}/>
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-01.png')} onClick={() => {showOverlay() ; setImage(0)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-02.png')} onClick={() => {showOverlay() ; setImage(1)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-03.png')} onClick={() => {showOverlay() ; setImage(2)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-04.png')} onClick={() => {showOverlay() ; setImage(3)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-05.png')} onClick={() => {showOverlay() ; setImage(4)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-06.png')} onClick={() => {showOverlay() ; setImage(5)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-07.png')} onClick={() => {showOverlay() ; setImage(6)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-08.png')} onClick={() => {showOverlay() ; setImage(7)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-09.png')} onClick={() => {showOverlay() ; setImage(8)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-10.png')} onClick={() => {showOverlay() ; setImage(9)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-11.png')} onClick={() => {showOverlay() ; setImage(10)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-12.png')} onClick={() => {showOverlay() ; setImage(11)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-13.png')} onClick={() => {showOverlay() ; setImage(12)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-14.png')} onClick={() => {showOverlay() ; setImage(13)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-15.png')} onClick={() => {showOverlay() ; setImage(14)}} opacity={isOverlay}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-16.png')} onClick={() => {showOverlay() ; setImage(15)}} opacity={isOverlay}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default TheAmbioBrace
