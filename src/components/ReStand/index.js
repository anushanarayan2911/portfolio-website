import React from 'react'
import { InfoContainer,
    InfoWrapper,
    InfoRow,
    TopLine,
    Grid,
    Row,
    Column,
    Image,
    YoutubeEmbed,
    VideoColumn
} from './ReStandElements'

const ReStand = () => {
  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>ReStand</TopLine>
            </InfoRow>
            <Grid>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-01.png')}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-02.png')}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-03.png')}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-04.png')}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-05.png')}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-06.png')}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-07.png')}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-08.png')}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-09.png')}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-10.png')}/>
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

export default ReStand
