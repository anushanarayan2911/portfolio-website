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
} from './TeddyBotElements'

const ReStand = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>TeddyBot</TopLine>
            </InfoRow>
            <InfoRow>
                <SubHeading>electronics | robotics | C++ | arduino</SubHeading>
            </InfoRow>
            <br/>
            <br/>
            <br/>
            <br/>
            <PortfolioGrid>
                <PortfolioRow>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/ReStand/ReStand.png')}/>
                    </Column>
                    <Column>
                        <Subtitle>Duration: 3 weeks</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Date: November - December 2021</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Nature: a project in response to a brief to create a machine which uses embedded computing and has a strong sense of user interaction as part of a Physical Computing module </Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <br/>
                <PortfolioRow>
                    <Column>
                      <SectionHeading1>the problem</SectionHeading1>
                      <Subtitle>In 2015, there were 2200 camping chairs left at the Glastonbury festival. There are few product service systems in place to remove the waste left behind and the materials used add to energy wasteage and carbon footprint.</Subtitle>
                      <br/>
                    </Column>
                    <Column>
                      <SectionHeading2>the solution</SectionHeading2>
                      <Subtitle>We designed a system in which festival goers can rent their chairs and return them for small rewards. The chairs themselves have been designed in a manner which means that they can easily be disassembled, so that they can be recycled, reducing the problem of wastage.</Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <InfoRow><YoutubeEmbed/></InfoRow>
                <br/>
                <Row>
                    <PDFDiv>
                        <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-01.png')}/>
                        <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-02.png')}/>
                        <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-03.png')}/>
                        <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-04.png')}/>
                        <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-05.png')}/>
                        <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-06.png')}/>
                        <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-07.png')}/>
                        <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-08.png')}/>
                        <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-09.png')}/>
                        <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-10.png')}/>
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

export default ReStand
