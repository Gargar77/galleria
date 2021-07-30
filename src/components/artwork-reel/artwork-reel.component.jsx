import React from 'react';

import './artwork-reel.styles.scss';
import artworks from '../../data.json';
import ArtThumbnail from '../art-thumbnail/art-thumbnail.component';

class ArtworkReel extends React.Component {
    state = {
        selectedArtwork:null
    }
    constructArtThumbnail(data,id) {
        return <ArtThumbnail key={id} data={data}/>
    }

    render() {
        const reel = [];
        artworks.forEach( (data,index) => reel.push(this.constructArtThumbnail(data,index)));
        return <div>{reel}</div>
    }
}

export default ArtworkReel;