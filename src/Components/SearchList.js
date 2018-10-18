import React, { Component } from 'react';
import SearchListItem from './SearchListItem'
import { connect } from 'react-redux';

class SearchList extends Component {

  state = {
    modalIsOpen: false
    }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  render() {
    return (
      <div className='container'>
        {
          !this.props.videos? null :
          this.props.videos.map((item) => 
            <SearchListItem 
                video={item}
                key={item.etag}
            />
          )
        }
        <div className='next-page'>
          { this.props.videos.length >= 5 && 
            <button onClick={() => this.props.searchNextPage(this.props.term, this.props.nextPageToken)} className='next-page-btn' >next page</button>
          }
        </div>

      </div>
    );
  }
}


export default connect()(SearchList);