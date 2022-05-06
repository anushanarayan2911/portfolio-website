import styled from 'styled-components';

export const InfoContainer = styled.div`
    background: #f0f0f0;

    width: 100%;
    height: 100%;
    overflow: hidden
    
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
`

export const InfoRow = styled.div`
    display: grid;
    margin-top: 0px;
    grid-auto-columns: minmax(auto, 1fr)
    align-items: left;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const TopLine = styled.p`
    color: #4b4b4b;
    font-size: 30px;
    font-weight: 200;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 30px;
`

export const PortfolioGrid = styled.div`
    width: 100%;
`
export const PortfolioRow = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    width: 50%;
    border: 3px solid black;
`
