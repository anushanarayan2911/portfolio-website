import styled, { css } from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const InfoContainer = styled.div`
    background: #ffffff;
    width: 100%;
    height: 100%
    overflow: hidden;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 0px
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: auto;
    margin-right: 10%;
    margin-left: 10%;
    overflow: hidden;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-right: 5%;
        margin-left: 5%;
    }

    @media screen and (max-width: 400px) {
        margin-right: 0%;
        margin-left: 0%;
    }
`
export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const InfoRow = styled.div`
    display: grid;
    margin-top: 0px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    justify-items: center;
    overflow: hidden;
`

export const TopLine = styled.p`
    color: #787878;
    font-size: 30px;
    font-weight: 200;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 10px;
    align-items: center;
`

export const SubHeading = styled.p`
    color: #e8a1bf;
    font-size: 15px;
    font-weight: 500;
`

export const Subtitle = styled.p`
    max-width: max-content;
    font-size: 1em;
    line-height: 24px;
    color: #4b4b4b;
    text-align: justify;
`

export const PortfolioGrid = styled.div`
    width: 70%;
    overflow: hidden;
    margin: 0 15% 0 15%;
    align-items: center;
`

export const PortfolioRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    max-width: 70%;
    padding: 0px 0px 10px 0px;
    align-items: left;
    justify-items: left;
`

export const Image = styled.img`
    width: 100%;
    opacity: ${({ opacity }) => (opacity ? '0.25' : '1')};
`

export const ImageOverlay = styled.img`
    height: 100%;
    z-index: 2;
    padding: 15px 5px 15px 5px;
    position: fixed;
    top: 0%;
    left: 18%;
    
    ${({ visible }) => {
        return css`
            visibility: ${visible ? 'visible' : 'hidden'};
        `;
    }}
`

export const LinkWrap = styled.nav`
    display: flex;
    align-items: center
`

export const ImageLink = styled(LinkR)`
    background: #f0f0f0;
`

export const LogoImage = styled.img`
    width: 5%;
`