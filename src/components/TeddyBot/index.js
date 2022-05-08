import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    TopLine,
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
