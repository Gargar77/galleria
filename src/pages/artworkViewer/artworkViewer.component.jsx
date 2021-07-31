import React from 'react';
import { useParams } from 'react-router-dom';

const ArtworkViewer = ({update,artworks}) => {
    const {id} = useParams();
    const artwork = artworks[id];
    console.log(artwork)
    return <div>Artwork</div>
}

export default ArtworkViewer;