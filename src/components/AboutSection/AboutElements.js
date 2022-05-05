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

export const Column1 = styled.div`
    margin-bottom: 0px;
    padding: 0 10% 0 0;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0;
    grid-area: col2;
    align-items: center;
`

export const TextWrapper = styled.div`
    max-width: 100vw;
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
    max-width: max-content;
    font-size: 18px;
    line-height: 24px;
    color: #4b4b4b;
    text-align: justify;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
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


