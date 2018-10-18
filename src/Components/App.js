import React, { Component } from 'react';
import HeaderSearch from './HeaderSearch';
import SearchList from './SearchList';
import _ from 'lodash';
import '../Styles/App.css';
import { connect } from 'react-redux';
import { getVideos, searchNextPage } from '../actions/searchAction';


class WrappedApp extends Component {

  state = {
    term: '',
  }
  
  getTermAndSearch = (term) => {
    
    this.setState({term});

    const videoSearch = _.debounce( (term) => {this.props.searchVideo(term)}, 400);
    videoSearch(term);
  }

  render() {
 
    return (
      <div className="app">
        <HeaderSearch 
          getTermAndSearch={this.getTermAndSearch} 
        />
      {
        this.props.videos ?
        <SearchList 
          videos={this.props.videos}
          nextPageToken={this.props.nextPageToken}
          term={this.state.term}
          searchNextPage={this.props.searchNextPage}
         /> : 
         <div className='inital-text'>Search And Enjoy Watching!</div> 
      }
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    videos: state.videos,
    nextPageToken: state.nextPageToken

  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchVideo: term => dispatch(getVideos(term)),
    searchNextPage:  (term, token) => dispatch(searchNextPage(term, token)),
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(WrappedApp);

export default App;