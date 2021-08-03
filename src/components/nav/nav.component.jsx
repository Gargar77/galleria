import React from 'react';
import './nav.styles.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/shared/logo.svg';

const Nav = ({activeArtwork,update}) => {
    let button;
    if (activeArtwork === null) {
        button = <button onClick={()=> update(0)}>start Slideshow</button>
    } else {
        button = <button onClick={()=> update(null)}>stop slideshow</button>
    }
    return ( 
        <div className="nav-container">
            <nav className="main-nav">
                <Link to="/galleria" onClick={()=> update(null)}><Logo/></Link>
                <Link to={activeArtwork === null ? "galleria/artwork#0" : "/galleria"}>
                    {button}
                </Link>
            </nav>
        <div></div>
    </div>
    )
};

export default Nav;