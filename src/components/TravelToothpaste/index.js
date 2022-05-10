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
} from './TravelToothpasteElements'

const TravelToothpaste = () => {
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
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-01.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-02.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-03.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-04.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-05.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-06.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-07.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-08.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-09.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-10.png')}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default TravelToothpaste
