import React from 'react';

import Header from '../Header';
import developer from '../../Assets/developer2.png';
import blob from '../../Assets/wave.svg';
import { DeveloperImg, HomeWrapper, Introduction, Blob } from './style';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home(){

    return(
        <>
            <Header />
            <HomeWrapper>
                <Introduction>
                    <h1>Desenvolvedor Front-End</h1>
                    <p>Criação de aplicações web do layout ao código.</p>
                    <div>
                        <a target="_blank" href="https://github.com/Luiz-Pedro"><FaGithub size={36}/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/luizpedromaciel/"><FaLinkedin size={36}/></a>
                    </div>
                </Introduction>
                <DeveloperImg src={developer} alt="programador"/>
            </HomeWrapper>
            <Blob src={blob} alt="bolha"/> 
        </>
    );
}