import { useState, useEffect } from 'react';
import { AlbumType } from './types';
function App() {
  const [error, setError] = useState<string | undefined>();
  const [albums, setAlbums] = useState<AlbumType[] | undefined>();

  useEffect(() => {
    const getAlbums = async () => {
      setError(undefined);

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
      }
    }
    getAlbums();
  }, []);

  return (
    <div className="container">
      <h1 className="col-auto text-left my-5">iTunes Top 100 Albums</h1>
      { error && <p>{error}</p> }
    </div>
  )
}

export default App
