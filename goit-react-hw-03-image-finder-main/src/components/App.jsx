import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import fetchImages from '../Services/fetchImages';
// import { fetchImages } from '../Services/fetchImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    page: '',
    searchQuery: '',

    per_page: 12,
    isLoading: false,
    loadMore: false,
    error: null,
    showModal: false,
    largeImageURL: 'largeImageURL',
    id: '',
  };

  componentDidUpdate(_, prevState) {
    // console.log(prevState.page);
    // console.log(this.state.page);
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.getImages(searchQuery, page);
    }
    // if (this.state.page > 1) {
    //   window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: 'smooth',
    //   });
    // }
  }

  formSubmit = searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      page: 1,
      loadMore: false,
    });
    console.log(searchQuery);
  };

  getImages = async (searchQuery, page) => {
    this.setState({ isLoading: true });

    if (!searchQuery) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchImages(searchQuery, page);
      console.log(totalHits, hits);
      const normalizedImages = hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => {
          return {
            id,
            webformatURL,
            largeImageURL,
            tags,
          };
        }
      );

      if (totalHits === 0) {
        alert('Sorry, we do not find images');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...normalizedImages],
        loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  onloadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = largeImageURL => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
    });
    console.log(largeImageURL);
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    // паттерн деструктуризации пропсов state
    const { images, isLoading, loadMore, page, showModal, largeImageURL } =
      this.state;

    return (
      <div>
        <Searchbar onSubmit={this.formSubmit} />
        {/* {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} openModal={this.openModal} />
        )} */}
        <Loader isLoading={isLoading} />
        <ImageGallery images={images} openModal={this.openModal} />
        {loadMore && <Button onloadMore={this.onloadMore} page={page} />}
        {/* портал для модалки в index.html */}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
