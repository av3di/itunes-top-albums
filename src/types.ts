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

interface ReleaseDateAttributes {
  attributes: {
    label: string;
  }
}

interface LinkAttributes {
  attributes: {
    href: string;
  }
}

export interface AlbumType {
  id: IdAttributes;
  'im:artist': ArtistAttributes;
  'im:image': ImageAttributes[];
  'im:name': NameAttributes;
  'im:releaseDate': ReleaseDateAttributes;
  link: LinkAttributes;
}

export interface AlbumsListProps {
  albums: AlbumType[];
  handleClick: (album: AlbumType) => void;
}

export interface AlbumImagesProps {
  images: ImageAttributes[];
}

export interface ModalProps {
  show: boolean;
  handleClose: () => void;
  album: AlbumType | undefined;
}
 export interface ModalHeaderProps {
  handleClose: () => void;
  album: AlbumType;
 }

 export interface ModalBodyProps {
  album: AlbumType;
 }

 export interface SearchBarProps {
  setQuery: (q: string) => void;
  query: string;
  handleSearch: () => void;
 }

 export interface SearchInputProps {
  setQuery: (q: string) => void;
  query: string;
 }

 export interface SearchButtonProps {
  handleSearch: () => void;
 }