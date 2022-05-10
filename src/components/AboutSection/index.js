import React from 'react'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TopLine,
    Subtitle,
    YoutubeEmbed
} from './AboutElements'

const InfoSection = ({
    id,
    textbox1,
    textbox2,
}) => {
  return (
    <InfoContainer id={id}>
      <InfoWrapper>
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
