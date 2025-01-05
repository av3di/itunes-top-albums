interface IdAttributes {
  attributes: {
    "im:id": string;
  }
}
interface ArtistAttributes {
  label: string;
}
export interface AlbumType {
  id: IdAttributes;
  'im:artist': ArtistAttributes;
}
