import React from 'react';
import ReactDOM from 'react-dom'

import Nav from "./components/Navbar";
import EmbedVideo from './components/EmbedVideo'
import AmateurVideosGrid from './components/AmateurVideosGrid'




class App extends React.Component {
    render() {
      return (
        <div>
          <Nav />
          <EmbedVideo playsinline/>
          < AmateurVideosGrid /> 
        </div>
      )
    }
}

export default App;
