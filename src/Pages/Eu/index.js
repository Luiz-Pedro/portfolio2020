import React from 'react';

import Header from '../Header';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { EuWrapper, ImagemEu, Blob, LinkFotografia, DivIcones } from './style';
import euImg from '../../Assets/eu.jpg';
import blob from '../../Assets/bolha.png';

export default function Eu(){
    return(
        <>
            <Header />
            <EuWrapper>
                <div style={{textAlign: "center", position: "relative"}}>
                    <ImagemEu src={euImg}/>
                    <Blob src={blob}/>
                </div>
                <div>
                    <h1>Luiz Pedro Maciel</h1>
                    <p>
                        Graduando em Ciência da Computação pela PUC, mora em Belo Horizonte - MG e possui 20 anos.
                        Com quase 3 anos de experiência no mercado, atualmente trabalha como desenvolvedor front-end e ja trabalhou com desenvolvimento SharePoint.
                        Tem a <LinkFotografia href="https://www.instagram.com/uauluiz/" target="_blank">fotografia</LinkFotografia> como um hobby e gosta de equilibrar o final de semana com futebol, estudos e cerveja.
                    </p>
                    <DivIcones>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Luiz-Pedro"><FaGithub size={36}/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luizpedromaciel/"><FaLinkedin size={36}/></a>
                        <p>lpedro.maciel@gmail.com</p>
                    </DivIcones>
                    
                </div>
            </EuWrapper>
        </>
    );
}