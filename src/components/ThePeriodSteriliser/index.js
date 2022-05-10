import React, {useState} from 'react'
import { InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    TopLine, 
    Subtitle,
    Image,
    Grid,
    Row,
    Column,
    ImageOverlay
} from './ThePeriodSteriliserElements'

const ThePeriodSteriliser = () => {
    const [isOverlay, setIsOverlay] = useState(false);
    const [isImage, setIsImage] = useState('')

    var imagesPath = [
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-01.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-02.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-03.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-04.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-05.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-06.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-07.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-08.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-09.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-10.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-11.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-12.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-13.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-14.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-15.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-16.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-17.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-18.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-19.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-20.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-21.png')
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
                <TopLine>The Period Steriliser</TopLine>
            </InfoRow>
            <Subtitle>Duration: 10 weeks</Subtitle>
            <br/>
            <Subtitle>Date: July - September 2021</Subtitle>
            <br/>
            <Subtitle>Nature: an individual, personal project carried out in Summer 2021, looking to design a solution to the problem of period poverty in developing countries</Subtitle>
            <br/>
            <ImageOverlay onClick={showOverlay} src={isImage} visible={isOverlay}/>
            <Grid>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-01.png')} onClick={() => {showOverlay() ; setImage(0)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-02.png')} onClick={() => {showOverlay() ; setImage(1)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-03.png')} onClick={() => {showOverlay() ; setImage(2)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-04.png')} onClick={() => {showOverlay() ; setImage(3)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-05.png')} onClick={() => {showOverlay() ; setImage(4)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-06.png')} onClick={() => {showOverlay() ; setImage(5)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-07.png')} onClick={() => {showOverlay() ; setImage(6)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-08.png')} onClick={() => {showOverlay() ; setImage(7)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-09.png')} onClick={() => {showOverlay() ; setImage(8)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-10.png')} onClick={() => {showOverlay() ; setImage(9)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-11.png')} onClick={() => {showOverlay() ; setImage(10)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-12.png')} onClick={() => {showOverlay() ; setImage(11)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-13.png')} onClick={() => {showOverlay() ; setImage(12)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-14.png')} onClick={() => {showOverlay() ; setImage(13)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-15.png')} onClick={() => {showOverlay() ; setImage(14)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-16.png')} onClick={() => {showOverlay() ; setImage(15)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-17.png')} onClick={() => {showOverlay() ; setImage(16)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-18.png')} onClick={() => {showOverlay() ; setImage(17)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-19.png')} onClick={() => {showOverlay() ; setImage(18)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-20.png')} onClick={() => {showOverlay() ; setImage(19)}} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-21.png')} onClick={() => {showOverlay() ; setImage(20)}} opacity={isOverlay}/>
                    </Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default ThePeriodSteriliser
