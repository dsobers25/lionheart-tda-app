import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Button } from '../../GlobalStyle';
import {animateScroll as scroll} from 'react-scroll';

import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSeciton.elements';

export const InfoSection = ({
    primary, 
    sectionOneImg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description, 
    headline, 
    lightText, 
    alt, 
    start
}) => {
    return (
    <>
        <InfoSec sectionOneImg={sectionOneImg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>
                            {headline}</Heading>
                            <Subtitle lightTextDesc=
                            {lightTextDesc}>
                            {description}</Subtitle>
                            <Link to='/contact' onClick={() => scroll.scrollToTop()}>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}</Button>
                            </Link>
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

export default InfoSection;
