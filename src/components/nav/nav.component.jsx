import React from 'react';

import './nav.styles.css';
import {ReactComponent as Logo } from '../../assets/shared/logo.svg';

const Nav = () => (
    <div className="nav-container">
        <nav className="main-nav">
            <Logo/>
            <button>start Slideshow</button>
        </nav>
        <div></div>
    </div>
   
);

export default Nav;