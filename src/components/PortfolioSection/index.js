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
    <InfoContainer id="portfolio">
      <InfoWrapper>
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
          <PortfolioRow>
            <Column><Image src={require('../../Visuals/Portfolio/TeddyBot/Anusha Narayan Gizmo Poster-1.png')}/></Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column><Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-01.png')}/></Column>
            <Column><Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-01.png')}/></Column>
            <Column><Image src={require('../../Visuals/Portfolio/Social Responsibility of Design Engineers/NARAYAN_anusha-1.png')}/></Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column><Image src={require('../../Visuals/Portfolio/Drawbacks of Technological Development/Drawbacks of Technological Development-01.png')}/></Column>
            <Column><Image src={require('../../Visuals/Portfolio/Ageist Nature of Technology/Ageist Nature of Technology-01.png')}/></Column>
            <Column><Image src={require('../../Visuals/Portfolio/Importance of Human Centred Design/Importance of Human Centred Design-01.png')}/></Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column><Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-01.png')}/></Column>
            <Column><Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-01.png')}/></Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column><Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-01.png')}/></Column>
            <Column><Image src={require('../../Visuals/Portfolio/Materialise/Materialise -01.png')}/></Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column><Image src={require('../../Visuals/Portfolio/Health Tracker App/Health Tracker App - 1.png')}/></Column>
          </PortfolioRow>
        </PortfolioGrid>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default PortfolioSection
