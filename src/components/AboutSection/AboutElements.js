import styled from 'styled-components';
import PropTypes from 'prop-types';

export const InfoContainer = styled.div`
    background: #f0f0f0;
    
    @media screen and (max-width: 768px) {
        padding: 100px 0
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    padding: 0 120px 0 120px;
`
export const TitleRow = styled.div`
    display: flex;
    align-items: left;
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr)
    align-items: left;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 0px;
    padding: 0;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px
`

export const TopLine = styled.p`
    color: #4b4b4b;
    font-size: 30px;
    font-weight: 200;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 30px;
`

export const Subtitle = styled.p`
    max-width: 600px;
    font-size: 18px;
    line-height: 24px;
    color: #4b4b4b;
    text-align: justify;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const YoutubeEmbed = ({ embedId }) => (
    <div className='video-responsive'>
        <iframe
        src="https://www.youtube.com/embed/ag9uYc9hJRk"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        title="video"
        width="auto"
        height="100%"
        position="absolute"
      />{" "}
    </div>
)


