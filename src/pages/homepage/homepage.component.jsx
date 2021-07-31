 import React from 'react';

 import './homepage.styles.scss';
 import artworksData from '../../data.json';
 import ArtworkReel from '../../components/artwork-reel/artwork-reel.component';

 class Homepage extends React.Component {

     render() {
         return (
             <main className="homepage"><ArtworkReel artworks={artworksData}/></main>
         )
     }    
 }

 export default Homepage;  