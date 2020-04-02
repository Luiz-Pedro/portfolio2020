import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
    animation: fadeIn .3s forwards;
    max-width: 70%;
    margin: 5em auto;
`;

export const ProjectsUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3em;
    list-style: none;
    @media (max-width: 990px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }
    
`;

export const Project = styled.li`
    a{
        cursor: pointer;
        height: 275px;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        color: #f7f8f7;
        border: solid 4px #14ffec;
        border-radius: 20px;
        text-align:center;
        position: relative;
        transition: 0.5s;

        &:hover{
            background: #14ffec;
            color: #111116;
            transform: scale(1.05);
            p{
                background: #111116;
                color: #14ffec;
            }
        }

        div{
            padding: 0em 2em;
            h2{
                font-size: 1.3em;
            }
        }

        p{
            background: #14ffec;
            color: #111116;
            font-weight: bold;
            padding: 0.4em 1em;
            position: absolute;
            bottom: 0em;
            left: 3em;
            right: 3em;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            transition: 0.5s;
        }
    }
`;


