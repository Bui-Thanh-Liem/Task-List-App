import { ReactNode } from "react";
import { Modal } from "react-bootstrap";

//
import "./Modal.scss";

type propTypes = {
    show: boolean;
    handleOutClick: () => void;
    children: ReactNode;
};

const ModalFc = ({ show, children, handleOutClick }: propTypes) => {
    return (
        <Modal
            size="lg"
            centered
            show={show}
            className="modal-container"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={handleOutClick}
        >
            {children}
        </Modal>
    );
};

export default ModalFc;
