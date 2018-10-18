import React, { Component } from 'react';

class SelectedVideo extends Component {

    render () {
        return (
            <div className = "embed-responsive embed-responsive-16by9" >
                <p> Selected Video </p>
                <iframe src={this.props.url}></iframe>
            </div>
        )
    }

};

export default SelectedVideo;