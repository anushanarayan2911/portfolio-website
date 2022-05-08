import React from 'react'
import { InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    TopLine, 
    Image,
    Grid,
    Row,
    Column 
} from './ThePeriodSteriliserElements'

const ThePeriodSteriliser = () => {
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
            <Grid>
                <Row>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-01.png')}/>
                    </Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default ThePeriodSteriliser
