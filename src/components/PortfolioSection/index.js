import React from 'react'
import { InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  TopLine, 
  PortfolioGrid, 
  PortfolioRow,
  Column
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
            <Column>Jo</Column>
            <Column>Hi</Column>
          </PortfolioRow>
        </PortfolioGrid>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default PortfolioSection
