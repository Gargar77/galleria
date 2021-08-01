import React from 'react';

import {ReactComponent as ViewImageSvg} from '../../assets/shared/icon-view-image.svg'
import './artworkViewer.styles.scss'
import LightBox from '../../components/lightbox/lightbox.component';
class ArtworkViewer extends React.Component {
        state = {
            lightboxIsActive:false,
        }

    toggleLightbox(bool) {
        this.setState({
            ...this.state,
            lightboxIsActive:bool
        })
    }

  render() {
      let currId = this.props.activeId;
    if (currId === null) {
        let id = window.location.hash[1];
        currId = id;
    }
    const artwork = this.props.artworks[currId];
    let lightbox;
    if (this.state.lightboxIsActive) {
        lightbox = (
            <LightBox artwork={artwork} toggle={()=> this.toggleLightbox(false)}/>
        )
    }
    return (
        <article className="artwork">
            {lightbox}
            <div className="artwork-image-container">
                <div className="lightbox-button" onClick={()=> this.toggleLightbox(true)}>
                    <ViewImageSvg className="view-image-svg"/>
                    <p>VIEW IMAGE</p>
                </div>
                <picture>
                    <source media="(min-width:900px)" srcSet={artwork.images.hero.large}/>
                    <img src={artwork.images.hero.small} alt={artwork.name}/>
                </picture>
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
    
}

export default ArtworkViewer;