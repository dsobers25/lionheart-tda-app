import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { VscMail, VscOutput } from 'react-icons/vsc';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../GlobalStyle';
import LHDALogo from '../../images/lionheart-black-circle-with-shade-lrg.svg';
import {animateScroll as scroll} from 'react-scroll';

import { 
    Nav, 
    NavbarContainer, 
    NavLogo,
    LogoImg, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },[]);

    const changeNavbarSize = () => {
        
        if(document.body.scrollTop > 100) {
            document.getElementById("navbar").style.padding = "30px 10px";
        }
    }

    window.addEventListener('scroll', changeNavbarSize);

    return (
        <>
        <IconContext.Provider value={{ color: '#000', style: { verticalAlign: 'middle' } }}>
            <Nav id="navbar">
                <NavbarContainer>
                    <NavLogo to='/' onClick={handleClick} >
                        <LogoImg src={LHDALogo} alt='lhda-logo'/>
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/>: <FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/' onClick={() => scroll.scrollToTop()}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            {button ? (
                                    <NavLinks to='/' onClick={() => scroll.scrollTo(1120)}>About</NavLinks>
                                ) : (
                                    <NavLinks to='/' onClick={() => scroll.scrollTo(1120)}>About</NavLinks>
                                )}
                        </NavItem>
                        <NavItem>
                        {button ? (
                                    <NavLinks to='/services' onClick={() => scroll.scrollToTop()}>Services</NavLinks>
                                ) : (
                                    <NavLinks to='/services' onClick={() => scroll.scrollToTop()}>Services</NavLinks>
                                )}
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/contact'>
                                    <Button primary>Contact <VscMail size={28} color='#000'/></Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/contact' >
                                    <Button fontBig primary>
                                    Contact <VscMail size={28} color='#000'/>
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/apply'>
                                    <Button primary>Apply <VscOutput size={28} color='#000'/></Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/apply'>
                                    <Button fontBig primary>
                                    Apply <VscOutput size={28} color='#000'/>
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
