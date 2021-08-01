import React, { useState } from 'react';

import './lightbox.styles.scss';

const LightBox = ({artwork,toggle}) => {
    const [isUnmounting,toggleMount] = useState(false);
    let unmount = {};
    const exit = () => {
       toggleMount(true);
       window.setTimeout(toggle,300)
    }
    if (isUnmounting) {
        unmount = {animationName:'disappear',animationDuration:'300ms',animationFillMode:'forwards'}
    }
    return (
        <div className="lightbox-container" style={unmount}>
            <button className="lightbox-close-button" onClick={exit}>CLOSE</button>
            <div className="lightbox-image-container">
                <img src={artwork.images.gallery} alt={artwork.name}/>
            </div>
        </div>
    )
}

export default LightBox;