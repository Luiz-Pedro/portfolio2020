import React from 'react';

import Header from '../Header';
import { EuWrapper, ImagemEu, Blob } from './style';
import euImg from '../../Assets/eu.png';
import blob from '../../Assets/blob.svg';

export default function Eu(){
    return(
        <>
            <Header />
            <EuWrapper>
                
                    <ImagemEu src={euImg}/>
                    <Blob src={blob}/>
            
            
                <p>blablabla</p>
            </EuWrapper>
        </>
    );
}