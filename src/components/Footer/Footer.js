import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaRegCopyright } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import LHDALogo from '../../images/lionheart-black-circle-with-shade-lrg.svg';

import { 
    FooterContainer, 
    FooterLogo,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialLogo,
    WebsiteRights,
    SocialIconLink,
    SocialMedia,
    SocialIcons,
    SocialMediaWrap
} from './Footer.elements'

const Footer = () => {


    

    return (
        <FooterContainer>
            {/* <FooterSubscription>
            </FooterSubscription> */}
            <FooterLinksContainer>
                <FooterLinksWrapper>
                <FooterLinksItems>
                        <FooterLinkTitle>ABOUT US</FooterLinkTitle>
                        <FooterLink to='/contact'>At Lion Heart Truck Driving Academy we privde you with all the skills necessary to earn your CDL in as little as 4 weeks!</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <IconContext.Provider value={{ color: '#A02D2B', size: 64 }}>
                        <MdLocationOn />
                        </IconContext.Provider>
                        <FooterLinkTitle>Location?</FooterLinkTitle>
                        <FooterLink to='/contact'>We are local to Oklahoma City</FooterLink>
                        <FooterLink to='/contact'>3200 Aluma Valley Dr, Oklahoma City, OK 73121</FooterLink>
                        <FooterLink to='/contact'>(405) 254-5556</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>FEED YOUR LION</FooterLinkTitle>
                        <FooterLink to='/contact'>Discover the Lion Heart Difference with hands-on training and guidence rom seasoned professionals</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={() => scroll.scrollToTop()}>
                        <FooterLogo src={LHDALogo} alt='lhda-logo'/>
                    </SocialLogo>
                        <WebsiteRights>Lion Heart Driving Academy School LLC <FaRegCopyright/> 2021</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank"
                            arial-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank"
                            arial-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href={'https://www.youtube.com/channel/UChHCoHLsFxmYwsq1fZIy5jA'} target="_blank"
                            arial-label="YouTube" rel="noopener noreferrer">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank"
                            arial-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank"
                            arial-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            
        </FooterContainer>
    )
}

export default Footer
