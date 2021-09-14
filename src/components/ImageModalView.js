import React from "react";
import { Modal } from "react-bootstrap";

const ImageModalView = ({ setShowModal, showModal, modalBody, modalTitle }) => {
  return (
    <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
    </Modal>
  );
};

export default ImageModalView;
