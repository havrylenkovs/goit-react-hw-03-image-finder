import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    const codeKey = event.code;
    console.log(codeKey);
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackDropClick}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string,
};
