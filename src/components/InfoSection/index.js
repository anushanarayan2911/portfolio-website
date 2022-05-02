import React, {useState} from 'react'
import {Button} from '../ButtonElements'
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
    Img
} from './InfoElements'

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
            <ImgWrap>
                <Img src={img} alt={alt}/>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
