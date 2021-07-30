import React from 'react';

import './art-thumbnail.styles.scss';

const ArtThumbnail = ({data}) => {
    return (
    <section className="art-thumbnail">
        <h1>{data.name}</h1>
        <p>{data.artist.name}</p>
    </section>
    )
}
export default ArtThumbnail;