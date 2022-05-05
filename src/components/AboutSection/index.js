import React from 'react'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    YoutubeEmbed
} from './AboutElements'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark, 
    dark2
}) => {
  return (
    <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>A B O U T</TopLine>
              <Subtitle darkText={darkText}>{description}</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <YoutubeEmbed/>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection