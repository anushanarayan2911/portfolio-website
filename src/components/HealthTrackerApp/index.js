import React from 'react'
import { InfoContainer, 
    InfoWrapper,
    InfoRow, 
    TopLine,
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
