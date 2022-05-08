import React from 'react'
import { InfoContainer, 
    InfoWrapper, 
    InfoRow,
    TopLine,
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
