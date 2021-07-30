import React from 'react';
import './art-thumbnail.styles.scss';
const ArtThumbnail = ({data}) => {
    return (
    <section className="art-thumbnail">
        <div className="image-container">
            <img src={data.images.thumbnail} alt=""></img>
            <div className="screen"></div>
        </div>
        <div className="thumbnail-text">
            <h1>{data.name}</h1>
            <p>{data.artist.name}</p>
        </div>
    </section>
    )
}
export default ArtThumbnail;