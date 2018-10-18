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
        <div>
            <div className="list-item" onClick={this.openModal}>
                <div className='video-img'>
                    <img  src={imgUrl} alt="video cover" />
                </div>

                <div className="video-details">
                    <h5>{this.props.video.snippet.title}</h5>
                    <p className='uploader-name'>{this.props.video.snippet.channelTitle}</p>
                </div>
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