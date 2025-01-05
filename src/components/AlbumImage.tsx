import { AlbumImagesProps } from "../types";

function AlbumImage(props: AlbumImagesProps) {
    return (
      <div className="frame my-3">
        <img src={props.images[2].label} />
      </div>
    );
}
export default AlbumImage;