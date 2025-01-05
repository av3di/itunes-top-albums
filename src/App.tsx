import { useState, useEffect } from 'react';
import { AlbumType } from './types';
import Header from './components/Header';
import Loading from './components/Loading';
import AlbumsList from './components/AlbumsList';

function App() {
  const [error, setError] = useState<string | undefined>();
  const [albums, setAlbums] = useState<AlbumType[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

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

  return (
    <div className="container">
      <Header />
      { error && <p>{error}</p> }
      { loading && <Loading />}
      <div className="row">
      { !error && !loading && albums && <AlbumsList albums={albums} />}
      </div>
    </div>
  )
}

export default App;
