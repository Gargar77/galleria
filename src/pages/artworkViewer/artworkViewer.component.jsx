import React from 'react';

import {ReactComponent as ViewImageSvg} from '../../assets/shared/icon-view-image.svg'
import './artworkViewer.styles.scss'
import LightBox from '../../components/lightbox/lightbox.component';
class ArtworkViewer extends React.Component {
        state = {
            lightboxIsActive:false,
            isUnmounting:false
        }

    toggleLightbox(bool) {
        this.setState({
            ...this.state,
            lightboxIsActive:bool
        })
    }
    getArtwork() {
        let currId = this.props.activeId;
        if (currId === null) {
            let id = window.location.hash[1];
            currId = id;
        }
        return this.props.artworks[currId];
    }

  render() {
    const artwork = this.getArtwork();
    let lightbox;
    if (this.state.lightboxIsActive) {
        lightbox = (
            <LightBox artwork={artwork} toggle={()=> this.toggleLightbox(false)}/>
        )
    }
    let navAnimation;
    if (this.props.direction === 'right') {
        navAnimation ={animation:'left-in 300ms ease-out'}
    } else {
        navAnimation = {animation:'right-in 300ms ease-out'}
    }
    if (this.props.isNavigating) {
        if (this.props.direction === 'right') {
            navAnimation = {animation:'right-out 300ms ease-in forwards'}
        } else {
            navAnimation = {animation:'left-out 300ms ease-in forwards'}
        }
    }
    return (
        <article className="artwork" style={navAnimation}>
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