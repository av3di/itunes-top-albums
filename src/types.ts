interface IdAttributes {
  attributes: {
    "im:id": string;
  }
}

interface ArtistAttributes {
  label: string;
}

interface ImageAttributes {
  attributes: {
    height: string;
  }
  label: string;
}

interface NameAttributes {
  label: string;
}

export interface AlbumType {
  id: IdAttributes;
  'im:artist': ArtistAttributes;
  'im:image': ImageAttributes[];
  'im:name': NameAttributes;
}

export interface AlbumsListProps {
  albums: AlbumType[];
}

export interface AlbumImagesProps {
  images: ImageAttributes[];
}
