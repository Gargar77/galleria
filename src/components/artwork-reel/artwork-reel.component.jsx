import React from 'react';

import './artwork-reel.styles.css';
import artworks from '../../data.json';
import ArtThumbnail from '../art-thumbnail/art-thumbnail.component';
import Masonry from 'react-masonry-css';
class ArtworkReel extends React.Component {
    state = {
        selectedArtwork:null
    }
    getWindowDimensions() {
        const {innerWidth:width,innerHeight:height} = window;
        return {width,height};
    }
   
    constructArtThumbnail(data,id) {
        return <ArtThumbnail key={id} data={data}/>
    }

    render() {
        const reel = [];
        artworks.forEach( (data,index) => reel.push(this.constructArtThumbnail(data,index)));
        let {width} = this.getWindowDimensions()
        let columnCount;
        if (width < 700) {
            columnCount = 1;
        } else if(width < 1024) {
            columnCount = 2;
        } else {
            columnCount = 4;
        }
            return (<Masonry 
            className="artwork-reel"
            columnClassName="reel-column"
            breakpointCols={columnCount}
            >{reel}</Masonry>
            )
    }
}

export default ArtworkReel;