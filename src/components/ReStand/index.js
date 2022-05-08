import React from 'react'
import { InfoContainer,
    InfoWrapper,
    InfoRow,
    TopLine,
    Grid,
    Row,
    Column,
    Image
} from './ReStandElements'

const ReStand = () => {
  return (
    <InfoContainer>
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>ReStand</TopLine>
            </InfoRow>
            <Grid>
              <Row>
                <Column>
                  <Image src={require('../../Visuals/Portfolio/ReStand/Group2D_S4.1-01.png')}/>
                </Column>
              </Row>
            </Grid>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default ReStand
