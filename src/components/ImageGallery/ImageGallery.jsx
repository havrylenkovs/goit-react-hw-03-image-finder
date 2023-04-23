import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, openModal }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
        openModal={openModal}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  openModal: PropTypes.func.isRequired,
};
