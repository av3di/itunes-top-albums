import { ModalHeaderProps } from "../../types";

function ModalHeader(props: ModalHeaderProps) {
    return (
        <div className="modal-header">
            <h1 className="modal-title fs-5" id="albumModalLabel">{ props.album['im:name'].label }</h1>
            <button onClick={props.handleClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
    );
}

export default ModalHeader;