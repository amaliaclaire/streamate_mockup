import React from 'react';
import ReactDOM from 'react-dom'

import Nav from "./components/Navbar";
import EmbedVideo from './components/EmbedVideo'
import AmateurVideosGrid from './components/AmateurVideosGrid'
import MobileDisplay from './components/MobileDisplay'
import RatedStars from './components/RatedStars'
import FeaturesContainer from './components/FeaturesContainer'
import FooterComponent from './components/FooterComponent'




class App extends React.Component {
    render() {
      return (
        <div>
          <Nav />
          <EmbedVideo playsinline/>
          < AmateurVideosGrid />
          <MobileDisplay />
          <RatedStars />
          <FeaturesContainer />
          <FooterComponent /> 
        </div>
      )
    }
}

export default App;
