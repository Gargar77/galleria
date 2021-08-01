import React from 'react';

import './lightbox.styles.scss';

const LightBox = ({artwork,toggle}) => {
    return (
        <div className="lightbox-container">
            <button className="lightbox-close-button" onClick={toggle}>CLOSE</button>
            <div className="lightbox-image-container">
                <img src={artwork.images.gallery} alt={artwork.name}/>
            </div>
        </div>
    )
}

export default LightBox;