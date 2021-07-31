 import React from 'react';

 import './homepage.styles.scss';

 import Nav from '../../components/nav/nav.component';
 import Artwork from '../artwork/artwork.component';
 import artworksData from '../../data.json';
 import ArtworkReel from '../../components/artwork-reel/artwork-reel.component';
 import {Route, Switch} from 'react-router-dom'
 class Homepage extends React.Component {

     render() {
         return (
             <main className="homepage">
                 <Nav/>
                <Switch>
                    <Route path="/" exact><ArtworkReel artworks={artworksData}/></Route>
                    <Route path="/artwork"><Artwork artworks={artworksData}/></Route>
                </Switch>
             </main>
            
         
        )
     }    
 }

 export default Homepage;  