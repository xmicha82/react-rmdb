import React from 'react';

import RMDBLogo from '../images/react-movie-logo.svg';
import TMDBLogo from '../images/tmdb-logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

function Header() {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
            </Content>
        </Wrapper>
    )
}

export default Header;
