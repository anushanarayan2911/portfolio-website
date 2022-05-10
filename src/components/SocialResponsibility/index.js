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
            <Subtitle>Duration: 2 weeks</Subtitle>
            <br/>
            <Subtitle>Date: December 2020</Subtitle>
            <br/>
            <Subtitle>Nature: an essay on the social responsbility of design engineers and culpability when their products cause harm, written in 1st year </Subtitle>
            <br/>
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
