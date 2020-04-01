import styled from 'styled-components';

export const EuWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3em;
    max-width: 80%;
    margin: 0em auto;
    margin-top: 6em;
    height: auto;
    align-items: center;
    @media (max-width: 1300px){
        margin-top: 3em;
    }
    @media (max-width: 600px){
        grid-template-columns: 1fr;
        margin-top: 3em;
        margin-bottom: 2em;
        grid-gap: 5em;
    }

    h1{
        color: #f7f8f7;
        font-size: 2.5em;
        margin-bottom: 0.5em;
        @media (max-width: 1300px){
            font-size: 2.3em;
        }
        @media (max-width: 600px){
            font-size: 1.8em;
        }
    }
    p{
        color: #323232;
        line-height: 26px;
        letter-spacing: 1.02px;
        padding-right: 4em;
        @media (max-width: 1300px){
            padding-right: 0em;
        }
        @media (max-width: 600px){
            font-size: 0.9em;
            padding-right: 0em;
        }
    }
`;

export const ImagemEu = styled.img`
    width: 53%;
    height: auto;
    border-radius: 50%;
    
`;

export const Blob = styled.img`
    width: 65%;
    height: auto;
    z-index: -1;
    position: absolute;
    top: 0em;
    left: 6em;
    @media (max-width: 1300px){
        left: 5em;
    }
    @media (max-width: 600px){
        left: 4em;
    }
`;

export const LinkFotografia = styled.a`
    color: #14ffec;
    cursor: pointer;
`;

export const DivIcones = styled.div`
    display: flex;
    margin-top: 2em;
    align-items: flex-end;
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

    p{
        color: #14ffec;
    }
`;