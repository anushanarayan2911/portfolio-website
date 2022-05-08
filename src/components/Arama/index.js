import React from 'react'
import { InfoContainer, 
    InfoWrapper, 
    InfoRow,
    TopLine,
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
