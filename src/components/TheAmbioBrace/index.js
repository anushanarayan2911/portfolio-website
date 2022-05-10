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
 } from './TheAmbioBraceElements'

const TheAmbioBrace = () => {
  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
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
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-01.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-02.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-03.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-04.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-05.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-06.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-07.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-08.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-09.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-10.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-11.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-12.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-13.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-14.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-15.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-16.png')}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default TheAmbioBrace
