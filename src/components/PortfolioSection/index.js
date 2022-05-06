import React from 'react'
import { InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  TopLine, 
  PortfolioGrid, 
  PortfolioRow,
  Column,
  Image
} from './portfolioElements'

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
        <PortfolioGrid>
          <PortfolioRow>
            <Column><Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-01.png')}/></Column>
            <Column><Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-01.png')}/></Column>
          </PortfolioRow>
        </PortfolioGrid>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default PortfolioSection
