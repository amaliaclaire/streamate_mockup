import React from 'react';
import ReactDOM from 'react-dom'

import Nav from "./components/Navbar";
import EmbedVideo from './components/EmbedVideo'
import AmateurVideosGrid from './components/AmateurVideosGrid'
import MobileDisplay from './components/MobileDisplay'




class App extends React.Component {
    render() {
      return (
        <div>
          <Nav />
          <EmbedVideo playsinline/>
          < AmateurVideosGrid />
          <MobileDisplay /> 
        </div>
      )
    }
}

export default App;
