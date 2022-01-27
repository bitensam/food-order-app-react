import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import styles from './Modal.module.css';

const ModalBackdrop = ({ onHideCart }) => {
  return <div className={styles.backdrop} onClick={onHideCart}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <Card className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </Card>
  );
};

const portalElement = document.getElementById('modal-root');

const Modal = ({ children, onHideCart }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop onHideCart={onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
