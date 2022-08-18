import React from 'react'
import { InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    TopLine, 
    Subtitle,
    Image,
    Column,
    SubHeading,
    PortfolioGrid,
    PortfolioRow,
    SectionHeading1,
    SectionHeading2,
    Row,
    PDFDiv,
    YoutubeEmbed
} from './HealthTrackerAppElements'

const TeddyBot = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Health Tracker App</TopLine>
            </InfoRow>
            <InfoRow>
                <SubHeading>computing | C# | XAML </SubHeading>
            </InfoRow>
            <br/>
            <br/>
            <br/>
            <br/>
            <PortfolioGrid>
                <PortfolioRow>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/TeddyBot/TeddyBot.png')}/>
                    </Column>
                    <Column>
                        <Subtitle>Duration: 8 weeks</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Date: August - September 2021</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Nature: an individual project to design a desktop application, in order to practise coding in C#.</Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <br/>
                <PortfolioRow>
                    <Column>
                      <SectionHeading1>the problem</SectionHeading1>
                      <Subtitle>Mathematics is considered to be the most boring subject for young children. The lack of interactivity means that children are frequently disengaged and do not enjoy this vital subject.</Subtitle>
                      <br/>
                    </Column>
                    <Column>
                      <SectionHeading2>the solution</SectionHeading2>
                      <Subtitle>In order to make learning maths more interactive  experience, I designed a robotic maths game to teach addition and subtraction to young children (3 - 4).</Subtitle>
                        <br/>
                        <br/>
                    </Column>
                </PortfolioRow>
                <br/>
                <InfoRow><YoutubeEmbed/></InfoRow>
                <br/>
                <Row>
                    <PDFDiv>
                        <Image src={require('../../Visuals/Portfolio/TeddyBot/Anusha Narayan Gizmo Poster-1.png')}/>
                    </PDFDiv>
                </Row>
                <br/>  
                <br/>  
                <br/>      
            </PortfolioGrid>
            
        </InfoWrapper>
    </InfoContainer>
  )
}

export default TeddyBot
