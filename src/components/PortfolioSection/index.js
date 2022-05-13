import React from 'react'
import { InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  TopLine, 
  PortfolioGrid, 
  PortfolioRow,
  Column,
  LinkWrap,
  ImageLink,
  Image
} from './portfolioElements'

const PortfolioSection = () => {
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
            <Column>
              <LinkWrap>
                <ImageLink to={"/ThePeriodSteriliserPage"}>
                  <Image src={require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-01.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <ImageLink to={"/ReStandPage"}>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-01.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <ImageLink to={"/TeddyBotPage"}>
                  <Image src={require('../../Visuals/Portfolio/TeddyBot/Anusha Narayan Gizmo Poster-1.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <ImageLink to={"/BouncerExperimentPage"}>
                  <Image src={require('../../Visuals/Portfolio/Bouncer Challenge/Anusha Narayan_Bouncer Challenge-01.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <ImageLink to={"/TheAmbioBracePage"}>
                  <Image src={require('../../Visuals/Portfolio/The Ambio Brace/Group 17_Documentation-01.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <a href="/SocialResponsibilityPage">
                <Image src={require('../../Visuals/Portfolio/Social Responsibility of Design Engineers/NARAYAN_anusha-1.png')}/>
              </a>
              </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <a href="https://medium.com/@anusha.narayan2002/the-drawbacks-of-technological-development-c069c4b65421">
                <Image src={require('../../Visuals/Portfolio/Drawbacks of Technological Development/Drawbacks of Technological Development-01.png')}/>
              </a>
            </Column>
            <Column>
              <a href="https://medium.com/@anusha.narayan2002/the-ageist-nature-of-technology-6b016143c88b">
                <Image src={require('../../Visuals/Portfolio/Ageist Nature of Technology/Ageist Nature of Technology-01.png')}/>
              </a>
            </Column>
            <Column>
              <a href="https://medium.com/@anusha.narayan2002/the-importance-of-human-centred-design-3c788997c14f">
                <Image src={require('../../Visuals/Portfolio/Importance of Human Centred Design/Importance of Human Centred Design-01.png')}/>
              </a>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <a href="/AramaPage">
                <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-01.png')}/>
              </a>
            </Column>
            <Column>
              <a href="/CarbonNeutralHousingPage">
                <Image src={require('../../Visuals/Portfolio/Carbon Neutral Housing/Anusha Narayan Carbon Neutral Housing-01.png')}/>
              </a>
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <a href="/TravelToothpastePage">
                <Image src={require('../../Visuals/Portfolio/Travel Toothpaste/SDE_Anusha Narayan-01.png')}/>
              </a>
            </Column>
            <Column>
              <a href="/MaterialisePage">
                <Image src={require('../../Visuals/Portfolio/Materialise/Materialise -01.png')}/>
              </a>            
            </Column>
          </PortfolioRow>
          <PortfolioRow>
            <Column>
              <a href="/HealthTrackerAppPage">
                <Image src={require('../../Visuals/Portfolio/Health Tracker App/Health Tracker App - 1.png')}/>
              </a>
            </Column>
            <Column>
              <a href="/FearOfFallingPage">
                <Image src={require('../../Visuals/Portfolio/Fear of Falling/Fear of Falling Title.png')}/>
              </a>
            </Column>
            <Column>
              <a href="/StandardisingCampingFurniturePage">
                <Image src={require('../../Visuals/Portfolio/Standardising Camping Furniture/Standardising Camping Furniture Title.png')}/>
              </a>
            </Column>
          </PortfolioRow>
        </PortfolioGrid>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default PortfolioSection
