 import React from 'react';
 import {Route, Switch} from 'react-router-dom'

 import './homepage.styles.scss';

 import Nav from '../../components/nav/nav.component';
 import ArtworkViewer from '../artworkViewer/artworkViewer.component';
 import artworksData from '../../data.json';
 import ArtworkReel from '../../components/artwork-reel/artwork-reel.component';
 import FooterNav from '../../components/footer-nav/footer-nav.component';

 class Homepage extends React.Component {
    state = {
        activeArtworkId:null
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
                 <Nav activeArtwork={this.state.activeArtworkId} update={this.updateActiveArtwork.bind(this)}/>
                <Switch>
                    <Route path="/" exact><ArtworkReel artworks={artworksData} update={this.updateActiveArtwork.bind(this)}/></Route>
                    <Route path="/artwork/:id">
                        <ArtworkViewer artworks={artworksData} update={this.updateActiveArtwork.bind(this)}/>
                        <FooterNav artworks={artworksData}/>
                    </Route>
                </Switch>
             </main>
        )
     }    
 }

 export default Homepage;  