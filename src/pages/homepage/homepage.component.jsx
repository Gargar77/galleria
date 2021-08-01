 import React from 'react';
 import {Route, Switch} from 'react-router-dom'

 import './homepage.styles.scss';

 import Nav from '../../components/nav/nav.component';
 import ArtworkViewer from '../artworkViewer/artworkViewer.component';
 import artworksData from '../../data.json';
 import ArtworkReel from '../../components/artwork-reel/artwork-reel.component';
 import FooterNav from '../../components/footer-nav/footer-nav.component';

 
 class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeArtworkId:null,
            activeListener:null,
            windowDimensions:null
        }
        if (this.state.activeListener === null) {
            const updateDimensions = ()=> {
                const {innerWidth:width,innerHeight:height} = window;
                this.setState({
                    ...this.state,
                    windowDimensions: {
                        currWidth:width,
                        currHeight:height
                    }
                })
            }
            window.addEventListener('resize',updateDimensions)
            this.state.activeListener = true;
        }
    }
 
    updateActiveArtwork(id) {
        window.location.hash = `#${id}`
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
                    <Route path="/artwork">
                        <ArtworkViewer 
                            artworks={artworksData} 
                            activeId={this.state.activeArtworkId} 
                            update={this.updateActiveArtwork.bind(this)}
                            />
                        <FooterNav 
                            artworks={artworksData} 
                            activeId={this.state.activeArtworkId} 
                            update={this.updateActiveArtwork.bind(this)}/>
                    </Route>
                </Switch>
             </main>
        )
     }    
 }

 export default Homepage;  