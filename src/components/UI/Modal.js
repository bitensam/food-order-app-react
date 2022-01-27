import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import styles from './Modal.module.css';

const ModalBackdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <Card className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </Card>
  );
};

const portalElement = document.getElementById('modal-root');

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
