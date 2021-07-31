 import React from 'react';

 import './homepage.styles.scss';

 import Nav from '../../components/nav/nav.component';
 import ArtworkViewer from '../artworkViewer/artworkViewer.component';
 import artworksData from '../../data.json';
 import ArtworkReel from '../../components/artwork-reel/artwork-reel.component';
 import {Route, Switch} from 'react-router-dom'
 class Homepage extends React.Component {
    state = {
        activeArtworkId:0
    }
    
    updateActiveArtwork(id) {
        this.setState({
            ...this.state,
            activeArtworkId:id
        })
    }
     render() {
         return (
             <main className="homepage">
                 <Nav/>
                <Switch>
                    <Route path="/" exact><ArtworkReel artworks={artworksData} update={this.updateActiveArtwork}/></Route>
                    <Route path="/artwork/:id"><ArtworkViewer artworks={artworksData} update={this.updateActiveArtwork}/></Route>
                </Switch>
             </main>
        )
     }    
 }

 export default Homepage;  