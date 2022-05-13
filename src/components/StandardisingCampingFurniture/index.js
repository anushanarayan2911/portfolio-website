import React from 'react'
import { InfoContainer,  
    InfoWrapper, 
    InfoRow,
    TopLine, 
    Subtitle,
    Grid,
    Row,
    Column,
    Image,
    LinkWrap,
    ImageLink,
    LogoImage
} from './StandardisingCampingFurnitureElements'

const StandardisingCampingFurniture = () => {
  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <LinkWrap>
                <ImageLink to={"/"}>
                    <LogoImage src={require('../../Visuals/Home/Images/logoLight.png')}/>
                </ImageLink>
            </LinkWrap>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Standardising Camping Furniture</TopLine>
            </InfoRow>
            <Subtitle>Duration: 1 week</Subtitle>
            <br/>
            <Subtitle>Date: November 2021</Subtitle>
            <br/>
            <Subtitle>Nature: a group project outlining the development of the system for camping chair reuse as part of a Sustainable Design Engineering module in 2nd year</Subtitle>
            <br/>
            <Grid>
                <Row>
                    <Column><Image src={require('../../Visuals/Portfolio/Standardising Camping Furniture/Group 2D_Poster-1.png')}/></Column>
                </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default StandardisingCampingFurniture
