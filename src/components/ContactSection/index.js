import React from 'react'
import { InfoContainer, 
    InfoWrapper,
    InfoRow,
    TopLine,
    ContactGrid, 
    ContactRow,
    Column,
    Image,
    Subtitle
} from './ContactElements'

const ContactSection = () => {
  return (
    <InfoContainer id="contact">
        <InfoWrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <InfoRow>
                <TopLine>C O N T A C T</TopLine>
            </InfoRow>
            <ContactGrid>
              <ContactRow>
                <Column><Image src={require('../../Visuals/Contact/Images/1.png')}/></Column>
                <Column><Subtitle>anusha.narayan2002@outlook.com</Subtitle></Column>
              </ContactRow>
              <br/>
              <br/>
              <br/>
              <ContactRow>
                <Column><Image src={require('../../Visuals/Contact/Images/2.png')}/></Column>
                <Column><Subtitle>https://www.linkedin.com/in/a-k-narayan/</Subtitle></Column>
              </ContactRow>
              <br/>
              <br/>
              <br/>
              <ContactRow>
                <Subtitle>Please feel free to get in touch, by sending a message or an email! I will respond within 24 hours.</Subtitle>
              </ContactRow>
            </ContactGrid>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default ContactSection
