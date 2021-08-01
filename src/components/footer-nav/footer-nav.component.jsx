import React from "react";
import './footer-nav.styles.scss';

import {ReactComponent as BackButton} from '../../assets/shared/icon-back-button.svg';
import {ReactComponent as NextButton} from '../../assets/shared/icon-next-button.svg';

const FooterNav = ({artworks,update,activeId}) => {
    let id = activeId;
    if (id === null) {
        let currId = window.location.hash[1];
        id = parseInt(currId);
    }
    const numArtworks = artworks.length;
    if (id <= 0) id = 0;
    if (id >= numArtworks) id = numArtworks -1;

    const artwork = artworks[id];
    let currentProgress;
    if (numArtworks === id + 1) {
        currentProgress = 100;
    } else {
        currentProgress = Math.ceil(((id + 1) / numArtworks) * 100);
    }
    const move = (direction) => {
       if (direction === 'next' && id < numArtworks -1) {
           update(id+1);
       } else if (direction === "prev" && id > 0){
           update(id-1);
       }
    }
      

    return (
        <footer>
            <div className="progress-line"></div>
            <div className="active-line" style={{width:`${currentProgress}%`}}></div>
            <div className="footer-content">
                <div className="footer-text">
                    <h3 className="artwork-name">{artwork.name}</h3>
                    <p className="artwork-artist">{artwork.artist.name}</p>
                </div>
                <div className="footer-buttons">
                    <BackButton
                        className={id === 0 ? 'disabled' : ""} 
                        onClick={()=>move('prev')}/>
                    <NextButton 
                        className={id === numArtworks -1 ? 'disabled' : ""}
                        onClick={()=>move('next')}/>
                </div>
            </div>
        </footer>
    )
}

export default FooterNav;