import React from 'react'
import { InfoContainer, 
    InfoWrapper,
    InfoRow, 
    TopLine,
    Grid,
    Row,
    Column,
    Image 
} from './SocialResponsibilityElements'

const SocialResponsibility = () => {
  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Social Responsibility of Design Engineers</TopLine>
            </InfoRow>
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Social Responsibility of Design Engineers/NARAYAN_anusha-1.png')}/></Column>
                </Row>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Social Responsibility of Design Engineers/NARAYAN_anusha-2.png')}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default SocialResponsibility
