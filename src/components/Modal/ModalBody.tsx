import { ModalBodyProps } from "../../types";
import AlbumImage from "../AlbumImage";

function ModalBody(props: ModalBodyProps) {
    return (
        <div className="modal-body">
            <div className="row mb-3">
                <div className="col-auto">
                    <AlbumImage images={ props.album["im:image"] } />
                </div>
                <div className="col">
                    <p className="album-name mt-3 mb-0 fw-bold">{ props.album['im:name'].label }</p>
                    <p className="album-artist"><i>{ props.album['im:artist'].label }</i></p>
                    <p className="">Released: { props.album['im:releaseDate'].attributes.label }</p>
                    <a href={ props.album.link.attributes.href } target="_blank" type="button" className="btn btn-primary">Check it out on &#63743; Music</a>
                </div>
            </div>
      </div>
    );
}

export default ModalBody;