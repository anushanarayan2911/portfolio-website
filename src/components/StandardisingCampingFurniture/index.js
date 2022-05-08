import React from 'react'
import { InfoContainer,  
    InfoWrapper, 
    InfoRow,
    TopLine, 
    Grid,
    Row,
    Column,
    Image
} from './StandardisingCampingFurnitureElements'

const StandardisingCampingFurniture = () => {
  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>Standardising Camping Furniture</TopLine>
            </InfoRow>
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
