import React from 'react'
import Link from 'react-scroll/modules/components/Link'
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
        <PortfolioGrid>
          <PortfolioRow>
            <Column>
              <LinkWrap>
                <ImageLink to={"/ThePeriodSteriliserPage"}>
                  <Image src={require('../../Visuals/Portfolio/Landing Page/The Period Product Steriliser Title Card.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
            <Column>
              <LinkWrap>
                <ImageLink to={"/RestandPage"}>
                  <Image src={require('../../Visuals/Portfolio/Landing Page/ReStand Title Card.png')}/>
                </ImageLink>
              </LinkWrap>
            </Column>
          </PortfolioRow>
          
        </PortfolioGrid>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default PortfolioSection
