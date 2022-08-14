import React, {useState} from 'react'
import { InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    TopLine, 
    Subtitle,
    Image,
    Grid,
    Row,
    Column,
    ImageOverlay,
    LinkWrap,
    ImageLink,
    LogoImage,
    SubHeading,
    PortfolioGrid,
    PortfolioRow
} from './ThePeriodSteriliserElements'

const ThePeriodSteriliser = () => {
    const [isOverlay, setIsOverlay] = useState(false);
    const [isImage, setIsImage] = useState('')

    var imagesPath = [
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-01.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-02.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-03.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-04.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-05.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-06.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-07.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-08.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-09.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-10.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-11.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-12.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-13.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-14.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-15.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-16.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-17.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-18.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-19.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-20.png'),
        require('../../Visuals/Portfolio/The Period Steriliser/The Period Steriliser-21.png')
    ]

    const setImage = (sourceLink) => {
        setIsImage(imagesPath[sourceLink]);
    }

    const showOverlay = () => {
        setIsOverlay(!isOverlay);
    }

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>The Period Product Steriliser</TopLine>
            </InfoRow>
            <InfoRow>
                <SubHeading>user-centred design | sketching | CAD | lo-fi prototyping</SubHeading>
            </InfoRow>
            <br/>
            <br/>
            <br/>
            <br/>
            <PortfolioGrid>
                <PortfolioRow>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/The Period Steriliser/Period Product Steriliser.png')}/>
                    </Column>
                    <Column>
                        <Subtitle>Duration: 10 weeks</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Date: July - September 2021</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Nature: an individual personal project carried out in Summer 2021, looking to design a solution to the problem of period poverty in developing countries</Subtitle>
                    </Column>
                </PortfolioRow>
                <PortfolioRow>
                    <Column>
                    <LinkWrap>
                        <ImageLink to={"/ThePeriodSteriliserPage"}>
                        <Image src={require('../../Visuals/Portfolio/Landing Page/TeddyBot Title Card.png')}/>
                        </ImageLink>
                    </LinkWrap>
                    </Column>
                    <Column>
                    <LinkWrap>
                        <ImageLink to={"/RestandPage"}>
                        <Image src={require('../../Visuals/Portfolio/Landing Page/Travel Toothpaste Title Card.png')}/>
                        </ImageLink>
                    </LinkWrap>
                    </Column>
                </PortfolioRow>
            </PortfolioGrid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default ThePeriodSteriliser
