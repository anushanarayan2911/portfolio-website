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
} from './UMeElements'

const UMe = () => {

  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>U Me</TopLine>
            </InfoRow>
            <InfoRow>
                <SubHeading>product research | rendering | branding | app design | project management</SubHeading>
            </InfoRow>
            <br/>
            <br/>
            <br/>
            <br/>
            <PortfolioGrid>
                <PortfolioRow>
                    <Column>
                        <Image src={require('../../Visuals/Portfolio/U Me/U Me.png')}/>
                    </Column>
                    <Column>
                        <Subtitle>Duration: 8 weeks</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Date: May - June 2022</Subtitle>
                        <br/>
                        <br/>
                        <Subtitle>Nature: a group design project, working to design a communication device so that severely autistic, non-verbal children are able to communicate with their parents and carers</Subtitle>
                    </Column>
                </PortfolioRow>
                <br/>
                <br/>
                <PortfolioRow>
                    <Column>
                      <SectionHeading1>the problem</SectionHeading1>
                      <Subtitle>Children with severe autism are not able to take part in many activities, as they are not able to communicate with anyone, including parents or carers. They are not able to communicate their needs or wants, and this can create frustration for both the carer and the child.</Subtitle>
                      <br/>
                    </Column>
                    <Column>
                      <SectionHeading2>the outcomes</SectionHeading2>
                      <Subtitle>The U Me is a two way communication device with an accompanying app. Parents/carers are able to set tasks using the app, whilst the child can use the device to ask for help</Subtitle>
                        <br/>
                        <br/>
                        <br/>
                    </Column>
                </PortfolioRow>
                <br/>
                <Row>
                    <PDFDiv>
                        <Image src={require('../../Visuals/Portfolio/Arama/Anusha Concept Booklet-01.png')}/>
                        
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

export default UMe
