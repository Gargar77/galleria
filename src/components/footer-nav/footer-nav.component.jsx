import { useParams } from "react-router-dom";

import './footer-nav.styles.scss';

import {ReactComponent as BackButton} from '../../assets/shared/icon-back-button.svg';
import {ReactComponent as NextButton} from '../../assets/shared/icon-next-button.svg';

const FooterNav = ({artworks}) => {
    let {id} = useParams();
    id = parseInt(id);
    const numArtworks = artworks.length;
    const artwork = artworks[id];
    let currentProgress;
    if (numArtworks === id + 1) {
        currentProgress = 100;
    } else {
        currentProgress = Math.ceil(((id + 1) / numArtworks) * 100);
        console.log(currentProgress)
    }
    return (
        <footer>
            <div className="progress-line"></div>
            <div className="active-line" style={{width:`${currentProgress}%`}}></div>
            <div className="footer-content">
                <div className="footer-text">
                    <h3 className="artwork-name">{artwork.name}</h3>
                    <p className="artwork-artist">{artwork.artist.name}</p>
                </div>
                <div className="footer-buttons">
                    <BackButton/>
                    <NextButton/>
                </div>
            </div>
        </footer>
    )
}

export default FooterNav;