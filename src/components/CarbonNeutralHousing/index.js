import React from 'react'
import { InfoContainer, 
    InfoWrapper,
    InfoRow, 
    TopLine,
    Grid,
    Row,
    Column,
    Image 
} from './CarbonNeutralHousingElements'

const CarbonNeutralHousing = () => {
  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Carbon Neutral Housing</TopLine>
            </InfoRow>
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-01.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-02.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-03.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-04.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-05.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-06.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-07.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-08.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-09.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-10.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-11.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-12.png')}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default CarbonNeutralHousing
