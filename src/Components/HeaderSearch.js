import React, { Component } from 'react';
import '../Styles/HeaderSearch.css'
import _ from 'lodash';

const API_KEY = 'AIzaSyCiIrLaQwOC811i3hH8HZBrPW-Ihf-nw_0'
const result = 7;

//const keyword = "react"
//let finalURL = `https://www.googleapis.com/youtube/v3/search?q=${keyword}&key=${API_KEY}&part=snippet,id&order=date&maxResults=${result}`

class HeaderSearch extends Component {

  // videoSearch = (term) => {
  //   YTSearch({key: API_KEY, term: term}, (videos) => {
  //     this.setState({
  //       videos: videos,
  //       selectedVideo: videos[0]
  //     });
  //     console.log("videeoooosss", videos)
  //   });
  // }

  render(){
    const videoSearch = _.debounce( (term) => {this.props.videoSearch(term)}, 400);

    return(
      <div>
      <header className='header'>
        <div className="search-input">
          <input 
            placeholder="Search" 
            className="search-input-text" 
            onChange={e => videoSearch(e.target.value) }
          />    
        </div>
      </header>
      </div>
    );
  }
}

export default HeaderSearch;