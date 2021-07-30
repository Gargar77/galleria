 import React from 'react';

 import './homepage.styles.scss';

 import ArtworkReel from '../../components/artwork-reel/artwork-reel.component';

 class Homepage extends React.Component {
     render() {
         return (
             <main className="homepage"><ArtworkReel/></main>
         )
     }
 }

 export default Homepage;  