import styled from 'styled-components';

export const HomeWrapper = styled.section`
    position: relative;
    display: flex;
    align-items:center;
    justify-content: space-around;
    padding: 5em 3em 0em;
    @media (max-width: 1300px){
        padding: 2em 3em 0em;
    }
    @media (max-width: 600px){
        flex-direction: column;
    }
`;

export const Introduction = styled.div`
    
    h1{
        color: #f7f8f7;
        font-size: 3em;
        margin-bottom: 0.5em;
        @media (max-width: 1300px){
            font-size: 2.4em;
            margin-bottom: 0.3em;
        }
    }

    p{
        color: #323232;
        line-height: 1.5em;
        font-size: 1.1em;
        letter-spacing: 0.03em;
        margin-bottom: 2.4em;
        @media (max-width: 1300px){
            font-size: 0.8em;
        }
        
    }

    a{
        background: transparent;
        color: #14ffec;
        border:0;
        margin-right: 1em;
        cursor: pointer;

        svg{
            transition: 0.4s;
            &:hover{
                transform: scale(1.4);
            }
        }
        
    }

`;

export const DeveloperImg = styled.img`
    width: auto;
    height: 22em;
    @media (max-width: 1300px){
        height: 18em;
    }
    @media (max-width: 600px){
        margin-top: 7em;
    }
`;

export const Blob = styled.img`
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0em;
    z-index: -1;
    @media (max-width: 1300px){
        bottom: -2em;
    }
    @media (max-width: 600px){
        position: static;
        margin-top: 2em;
    }
    
`;