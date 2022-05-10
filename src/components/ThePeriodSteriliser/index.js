import React, {useState} from 'react'
import { InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    TopLine, 
    Image,
    Grid,
    Row,
    Column,
    ImageOverlay 
} from './ThePeriodSteriliserElements'
import ThePeriodSteriliserSlideshow from './ThePeriodSteriliserSlideshow'
import { SliderData } from './ThePeriodSteriliserSliderData';

const ThePeriodSteriliser = () => {
    const [isOverlay, setIsOverlay] = useState(false);
    const [isImage, setIsImage] = useState('');


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
            <ThePeriodSteriliserSlideshow slides={SliderData}/>
            <Grid>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-01.png')} onClick={showOverlay} opacity={isOverlay}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-02.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-03.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-04.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-05.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-06.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-07.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-08.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-09.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-10.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-11.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-12.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-13.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-14.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-15.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-16.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-17.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-18.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-19.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-20.png')}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-21.png')}/>
                    </Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default ThePeriodSteriliser
