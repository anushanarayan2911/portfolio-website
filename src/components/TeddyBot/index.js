import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    TopLine,
    Subtitle,
    Grid,
    Row,
    Column,
    Image,
    VideoColumn,
    YoutubeEmbed
} from './TeddyBotElements'

const TeddyBot = () => {
  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>TeddyBot</TopLine>
            </InfoRow>
            <Subtitle>Duration: 3 weeks</Subtitle>
            <br/>
            <Subtitle>November - December 2021</Subtitle>
            <br/>
            <Subtitle>Nature: an individual project in response to a brief to create a plywood machine which uses embedded computing, as well as having strong user interaction and a sense of iteration throughout the process</Subtitle>
            <br/>
            <Grid>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/TeddyBot/Anusha Narayan Gizmo Poster-1.png')}/>
                </Column>
              </Row>
              <Row>
                  <VideoColumn>
                      <YoutubeEmbed/>
                  </VideoColumn>
              </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default TeddyBot
