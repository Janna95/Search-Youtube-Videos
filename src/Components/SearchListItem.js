import React, { Component } from 'react';
import ModalComponent from './ModalComponent';
import '../Styles/SearchListItem.css';

class SearchListItem extends Component {

    state = {
        modalIsOpen: false
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

  render() {
    const videoId = this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const imgUrl = this.props.video.snippet.thumbnails.default.url;


    return (
        <div className="list-item">
            <div className='video-img' onClick={this.openModal}>
                <img  src={imgUrl} alt="video-image" />
            </div>

            <div className="video-details" onClick={this.openModal}>
                <h5>{this.props.video.snippet.title}</h5>
                <p>{this.props.video.snippet.channelTitle}</p>
            </div>
            <ModalComponent 
                modalIsOpen={this.state.modalIsOpen} 
                url={url}
                title={this.props.video.snippet.title}
                closeModal={this.closeModal}
            />
        </div>
    );
  }
}

export default SearchListItem;