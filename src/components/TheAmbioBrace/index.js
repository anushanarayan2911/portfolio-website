import React from 'react'
import { InfoContainer, 
    InfoWrapper,
    InfoRow,
    TopLine,
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
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-01.png')}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default TheAmbioBrace
