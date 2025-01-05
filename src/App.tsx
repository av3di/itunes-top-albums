import { useState, useEffect } from 'react';
import headphones from './assets/headphones-outline.svg';
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
      <header>
        <div className="row justify-content-between">
          <h1 className="col-auto text-left my-5 rubik-vinyl-regular">iTunes Top 100 Albums</h1>
          <div className="col logo row align-items-center d-none d-sm-flex">
            <img src={headphones} />
          </div>
        </div>
      </header>
      { error && <p>{error}</p> }

      <div className="row">
       { !error && albums && albums.map((album, index) => (
       <div className="album col-6 col-sm-4 col-lg-3 text-left" key={album.id.attributes['im:id']}>
       <h2 className="rubik-vinyl-regular">{index + 1}</h2>
        <div className="frame my-3">
          <img src={album['im:image'][2].label} />
        </div>
        <div className="mb-4">
          <p className="album-name fw-bold">{album['im:name'].label}</p>
          <p className="album-artist">{album['im:artist'].label}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
  )
}

export default App
