import React from 'react'
import { InfoContainer, 
    InfoWrapper,
    InfoRow, 
    TopLine,
    Subtitle,
    Grid,
    Row,
    VideoColumn, 
    YoutubeEmbed
} from './HealthTrackerAppElements'

const HealthTrackerApp = () => {
  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Health Tracker App</TopLine>
            </InfoRow>
            <Subtitle>Duration: 8 weeks</Subtitle>
            <br/>
            <Subtitle>Date: August - September 2021</Subtitle>
            <br/>
            <Subtitle>Nature: an individual, personal project conducted in Summer 2021 in response to the need of young people to have a way of tracking their exercise and health during the Covid-19 pandemic</Subtitle>
            <br/>
            <Grid>
                <Row>
                    <VideoColumn><YoutubeEmbed/></VideoColumn>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default HealthTrackerApp
