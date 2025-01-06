import { useState, useEffect } from 'react';
import { AlbumType } from './types';
import Header from './components/Header';
import Loading from './components/Loading';
import AlbumsList from './components/AlbumsList';
import Modal from './components/Modal/Modal';
import ModalBackdrop from './components/Modal/ModalBackdrop';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [error, setError] = useState<string | undefined>();
  const [albums, setAlbums] = useState<AlbumType[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumType | undefined>();

  useEffect(() => {
    const getAlbums = async () => {
      setError(undefined);
      setLoading(true);

      try {
        const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
        if (!response.ok) {
          throw new Error('Response not ok');
        }
        const data = await response.json();
        console.log(data.feed.entry);
        setAlbums(data.feed.entry);
      } catch(e) {
        setError('Sorry, there was an error getting the albums. Please try again later.');
        console.error(`Error with fetching data: ${e}`);
      } finally {
        setLoading(false);
      }
    }
    getAlbums();
  }, []);

  const handleOpenModal = (album: AlbumType) => {
    setSelectedAlbum(album);
    setModalShow(true);
  }
  const handleCloseModal = () => {
    setModalShow(false);
  }

  return (
    <div className="container">
      <Header />
      { error && <p className="text-danger">{error}</p> }
      { loading && <Loading />}
      { !error && !loading && albums && <SearchBar />}
      <div className="row">
      { !error && !loading && albums && <AlbumsList albums={albums} handleClick={handleOpenModal} />}
      </div>
      <Modal show={modalShow} handleClose={handleCloseModal} album={ selectedAlbum }/>
      { modalShow && <ModalBackdrop /> }
    </div>
  )
}

export default App;