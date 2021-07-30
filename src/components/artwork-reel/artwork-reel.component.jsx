import React from 'react';

import './artwork-reel.styles.scss';
import artworks from '../../data.json';

class ArtworkReel extends React.Component {
    state = {
        selectedArtwork:null
    }
    constructArtThumbnail(data,id) {
        return <div key={id}>{data.name}</div>
    }

    render() {
        const reel = [];
        artworks.forEach( (data,index) => reel.push(this.constructArtThumbnail(data,index)));
        return <div>{reel}</div>
    }
}

export default ArtworkReel;