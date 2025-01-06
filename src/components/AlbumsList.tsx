import { AlbumsListProps } from "../types";
import AlbumImage from "./AlbumImage";

function AlbumsList(props: AlbumsListProps) {
    const albumsHtml = props.albums.map((album, index) => (
        <div className="album col-6 col-sm-4 col-lg-3 text-left" 
          key={album.id.attributes['im:id']} 
          data-bs-toggle="modal" 
          data-bs-target="#albumModal"
          onClick={() => props.handleClick(album)}
        >
          <h2 className="rubik-vinyl-regular">{index + 1}</h2>
          <AlbumImage images={album["im:image"]} />
          <div className="mb-4">
            <p className="album-name fw-bold">{album['im:name'].label}</p>
            <p className="album-artist">{album['im:artist'].label}</p>
          </div>
        </div>
      )
    )
    return <>{ albumsHtml }</>;
}

export default AlbumsList;