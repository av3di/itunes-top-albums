import { ModalProps } from "../../types";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";

function Modal(props: ModalProps) {
    const modalStyle = props.show ? {display: "block"} : {display: "none"};
    
    return (
      <>
        { props.album && 
            <div className={`modal fade ${props.show ? 'show' : ''}`} style={ modalStyle } id="albumModal" tabIndex={-1} aria-labelledby="albumModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ModalHeader handleClose={props.handleClose} album={props.album} />
                        <ModalBody album={props.album} />
                    </div>
                </div>
            </div>
        }
      </>
    );
}

export default Modal;