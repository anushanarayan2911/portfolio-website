import React from 'react'
import { InfoContainer, 
    InfoWrapper, 
    InfoRow,
    TopLine,
    Subtitle,
    Grid,
    Row,
    Column,
    Image 
} from './AramaElements'

const Arama = () => {
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
            <Subtitle>Nature: an individual ideation document, detailing the design process carried out to come up with a device to aid communication for severely autistic, non-verbal children, done as part of an Industrial Design Engineering module in 2nd year</Subtitle>
            <br/>
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-01.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-02.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-03.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-04.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-05.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-06.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-07.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-08.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-09.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-10.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-11.png')}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default Arama
