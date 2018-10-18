import React, { Component } from 'react';
import Modal from 'react-modal';
import '../Styles/ModalComponent.css'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      transition            : 'opacity 2000ms'
    },
    overlay: {
        backgroundColor: '#00000075'
    }
  };
  
class ModalComponent extends Component {

    componentWillMount () {
        Modal.setAppElement('body');
    }

    render() {
        return (  
            <Modal
            isOpen={this.props.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            >
                <div className='modal-content'>
                    <h4>{this.props.title}</h4>
                    <div className = "embed-responsive embed-responsive-16by9" >
                        <iframe src={this.props.url}></iframe>
                    </div>
                </div>
                <div className='btn'>
                    <button onClick={this.props.closeModal} className='btn-close' >Close</button>
                </div>
            </Modal>
        );
    }
}

export default ModalComponent;