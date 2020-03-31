import styled from 'styled-components';


export const Header = styled.header`
    background: transparent ;
    display:flex;
    justify-content: space-between;
    padding: 2.5em 5em 1.5em 5em;
    align-items: center;
    @media (max-width: 600px){
        padding: 1.5em 1em 1.5em 1em;
    }

    a{
        
        font-family: 'Baloo Da 2', cursive !important;
        padding: 0.5em;
        color: #14ffec;
        font-size: 1.7em;
        font-weight: bolder;
        @media (max-width: 600px){
            font-size: 1.2em;
        }
    }

    
`;

export const Menus = styled.ul`
    display:flex;

    li{
        margin-left: 1em;

        a{
            font-size: 1.2em;
            font-family: 'Roboto', sans-serif !important;
            font-weight: lighter;
            @media (max-width: 600px){
                font-size: 0.85em;
            }
        }
    }

`;