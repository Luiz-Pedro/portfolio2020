import styled from 'styled-components';

export const EuWrapper = styled.section`
    display: flex;
    align-items:center;
    justify-content: space-around;
    padding: 3em 0em 0em 0em;
    position: relative;
    @media (max-width: 1300px){
        padding: 2em 3em 0em;
    }
    @media (max-width: 600px){
        flex-direction: column;
        padding: 4em 3em 0em;
    }


`;

export const ImagemEu = styled.img`
    width: 20%;
    height: auto;
    border-radius: 50%;
`;

export const Blob = styled.img`
    width: 30%;
    height: auto;
    position: absolute;
    z-index: -1;
    left: 8em;
    top: -1em;
`;