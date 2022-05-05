import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, TopLine } from './portfolioElements'

const PortfolioSection = (id) => {
  return (
    <InfoContainer id={id}>
      <InfoWrapper>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <InfoRow>
          <TopLine>P O R T F O L I O</TopLine>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default PortfolioSection
