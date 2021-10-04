import React from 'react';
import { Link } from 'react-router-dom';

import LHDALogo from '../../images/lionheart-thick-circle.svg';

import { Wrapper, Content, LogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={LHDALogo} alt='lhda-logo'/>
            </Link>
            <ul>
            <Link className='header-links' to='/'><li>Home</li></Link>
            <Link className='header-links' to='/'><li>About</li></Link>
            <Link className='header-links' to='/'><li>Career</li></Link>
            <Link className='header-links' to='/'><li>Contact Us</li></Link>
            </ul>
        </Content>
    </Wrapper>
);

export default Header;