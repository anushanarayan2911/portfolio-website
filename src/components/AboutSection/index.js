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
    textbox1,
    textbox2,
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <InfoRow>
          <TopLine>A B O U T</TopLine>
        </InfoRow>
        <InfoRow>
          <Column1><Subtitle>{textbox1}</Subtitle></Column1>
          <Column2><YoutubeEmbed/></Column2>
        </InfoRow>
        <InfoRow>
          <Subtitle>
            {textbox2}
          </Subtitle>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
