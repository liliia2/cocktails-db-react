import React from 'react';

import './header.css';
import logo from '../../assets/logo.svg';

const Header = () => {
    return(
        <div className='Header'>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
};

export default Header;