import React, {useState} from 'react'
import { InfoContainer,
    InfoWrapper,
    InfoRow,
    TopLine,
    Subtitle,
    Grid,
    Row,
    Column,
    Image,
    YoutubeEmbed,
    VideoColumn,
    ImageOverlay,
    LinkWrap,
    ImageLink,
    LogoImage
} from './ReStandElements'

const ReStand = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [isImage, setIsImage] = useState('');

  var imagesPath = [
    require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-01.png'),
    require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-02.png'),
    require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-03.png'),
    require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-04.png'),
    require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-05.png'),
    require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-06.png'),
    require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-07.png'),
    require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-08.png'),
    require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-09.png'),
    require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-10.png'),
  ]

  const setImage = (sourceLink) => {
    setIsImage(imagesPath[sourceLink]);
  }

  const showOverlay = () => {
    setIsOverlay(!isOverlay);
  }

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <LinkWrap>
                <ImageLink to={"/"}>
                    <LogoImage src={require('../../Visuals/Home/Images/logoLight.png')}/>
                </ImageLink>
            </LinkWrap>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>ReStand</TopLine>
            </InfoRow>
            <Subtitle>Duration: 5 weeks</Subtitle>
            <br/>
            <Subtitle>Date: November - December 2021</Subtitle>
            <br/>
            <Subtitle>Nature: a group project, designing a system for reusing camping chairs after festivals to prevent them from being sent to a landfill site, as part of a Sustainable Design Engineering module in 2nd year</Subtitle>
            <br/>
            <ImageOverlay onClick={showOverlay} src={isImage} visible={isOverlay}/>
            <Grid>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-01.png')} onClick={() => {showOverlay() ; setImage(0)}} opacity={isOverlay}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-02.png')} onClick={() => {showOverlay() ; setImage(1)}} opacity={isOverlay}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-03.png')} onClick={() => {showOverlay() ; setImage(2)}} opacity={isOverlay}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-04.png')} onClick={() => {showOverlay() ; setImage(3)}} opacity={isOverlay}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-05.png')} onClick={() => {showOverlay() ; setImage(4)}} opacity={isOverlay}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-06.png')} onClick={() => {showOverlay() ; setImage(5)}} opacity={isOverlay}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-07.png')} onClick={() => {showOverlay() ; setImage(6)}} opacity={isOverlay}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-08.png')} onClick={() => {showOverlay() ; setImage(7)}} opacity={isOverlay}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-09.png')} onClick={() => {showOverlay() ; setImage(8)}} opacity={isOverlay}/>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-10.png')} onClick={() => {showOverlay() ; setImage(9)}} opacity={isOverlay}/>
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
