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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredAlbums, setFilteredAlbums] = useState<AlbumType[] | undefined>();

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
        setAlbums(data.feed.entry);
        setFilteredAlbums(data.feed.entry);
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

  const handleSearch = () => {
    if (searchQuery !== '' && albums) {
      const q = searchQuery.toLowerCase();
      setFilteredAlbums(albums.filter((album) => {
        return album['im:artist'].label.toLowerCase().includes(q) || album['im:name'].label.toLowerCase().includes(q)
      }));
    } else {
      setFilteredAlbums(albums);
    }
  }

  return (
    <div className="container">
      <Header />
      { error && <p className="text-danger">{ error }</p> }
      { loading && <Loading />}
      { !error && !loading && filteredAlbums && 
        <SearchBar setQuery={ setSearchQuery } query={ searchQuery } handleSearch={ handleSearch } />
      }
      <div className="row">
        { !error && !loading && filteredAlbums &&
          <AlbumsList albums={ filteredAlbums } handleClick={ handleOpenModal } />
        }
      </div>
      <Modal show={ modalShow } handleClose={ handleCloseModal } album={ selectedAlbum } />
      { modalShow && <ModalBackdrop /> }
    </div>
  )
}

export default App;