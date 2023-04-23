import './ImageGalleryItem.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => openModal(largeImageURL)}>
      <img src={src} alt={alt} className="ImageGalleryItem-big" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
