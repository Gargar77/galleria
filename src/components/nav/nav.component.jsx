import React from 'react';

import './nav.styles.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/shared/logo.svg';

const Nav = () => (
    <div className="nav-container">
        <nav className="main-nav">
            <Logo/>
            <Link to="/artwork?id=0">
                <button>start Slideshow</button>
            </Link>
        </nav>
        <div></div>
    </div>
   
);

export default Nav;