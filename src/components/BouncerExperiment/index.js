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
} from './BouncerExperimentElements'

const BouncerExperiment = () => {
  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Bouncer Experiment</TopLine>
            </InfoRow>
            <Subtitle>Duration: 2 weeks</Subtitle>
            <br/>
            <Subtitle>Date: February 2021</Subtitle>
            <br/>
            <Subtitle>Nature: a technical report, detailing the process and mechanics of the Bouncer experiment, wherein a steel ball was released from the top of an inclined, PVC tube</Subtitle>
            <br/>
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-01.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-02.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-03.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-04.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-05.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-06.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-07.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-08.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-09.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-10.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-11.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-12.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-13.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-14.png')}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default BouncerExperiment
