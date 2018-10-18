import React, { Component } from 'react';
import HeaderSearch from './HeaderSearch';
import SearchList from './SearchList'
import YTSearch from 'youtube-api-search';
import '../Styles/App.css';

const API_KEY = 'AIzaSyCiIrLaQwOC811i3hH8HZBrPW-Ihf-nw_0'


class App extends Component {

  state = {
    allVideos: [],
    selected: {}
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        allVideos: videos,
        selectedVideo: videos[0]
      });
      console.log("videos-> ", videos)
    });
  }
  
  render() {
    return (
      <div className="App">
        <HeaderSearch videoSearch={this.videoSearch} />
        <SearchList allVideos={this.state.allVideos} selected={this.state.selected}/>
      </div>
    );
  }
}

export default App;