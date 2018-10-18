import React, { Component } from 'react';
import SearchListItem from './SearchListItem'
import ModalComponent from './ModalComponent'

class SearchList extends Component {

  state = {
    allVideos: [],
    modalIsOpen: false
    }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  render() {
    return (
      <div className='container'>
        {
          this.props.allVideos.map((item) => 
            <SearchListItem 
                video={item}
                key={item.id.videoId}
            />
          )
        }

      </div>
    );
  }
}

export default SearchList;