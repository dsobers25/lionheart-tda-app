import React from 'react';
import { Container } from '../../GlobalStyle';

import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSeciton2.elements';

export const InfoSection2 = ({
    sectionOneImg, 
    imgStart, 
    lightTextDesc, 
    description, 
    headline, 
    lightText, 
    sectionColor, 
    alt, 
    start
}) => {
    return (
    <>
        <InfoSec sectionOneImg={sectionOneImg} sectionColor={sectionColor}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>
                            {headline}</Heading>
                            <Subtitle lightTextDesc=
                            {lightTextDesc}>
                            {description}</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={sectionOneImg} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>  
        </InfoSec>  
    </>
    )
}

export default InfoSection2;
