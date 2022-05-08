import styled from 'styled-components';

export const InfoContainer = styled.div`
    background: #f0f0f0;
    width: 100%;
    height: 100%
    overflow: hidden;

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

    @media screen and (max-width: 768px) {
        margin-right: 5%;
        margin-left: 5%;
    }

    @media screen and (max-width: 400px) {
        margin-right: 0%;
        margin-left: 0%;
    }
`

export const InfoRow = styled.div`
    display: grid;
    margin-top: 0px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: left;
    overflow: hidden;
`

export const TopLine = styled.p`
    color: #4b4b4b;
    font-size: 30px;
    font-weight: 200;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 30px;
`

export const Grid = styled.div`
    width: 100%;
    overflow: hidden;
    align-items: center;
`

export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Column = styled.div`
    max-width: max-content;
    padding: 10px 10px 10px 10px;
`

export const Image = styled.img`
    width: 100%;
`