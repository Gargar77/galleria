import React from 'react';
import { useParams } from 'react-router-dom';

import './artworkViewer.styles.scss'

const ArtworkViewer = ({update,artworks}) => {
    const {id} = useParams();
    const artwork = artworks[id];
    return (
        <article className="artwork">
            <div className="artwork-image-container">
                <img src={artwork.images.gallery} alt={`${artwork.name}`}/>
            </div>
            <div className="artwork-header">
                <h1 className="artwork-name">{artwork.name}</h1>
                <p className="artist-name">{artwork.artist.name}</p>
                <div className="artist-profile-pic-container">
                <img src={artwork.artist.image} alt={artwork.artist.name}></img>
            </div>
            </div>
           <div className="artwork-bio">
               <h2 className="artwork-date">{artwork.year}</h2>
                <p className="artwork-description">{artwork.description}</p>
                <a className="source-link" target="_blank" rel="noreferrer" href={artwork.source}>go to source</a>
           </div>
        </article>
    )
}

export default ArtworkViewer;