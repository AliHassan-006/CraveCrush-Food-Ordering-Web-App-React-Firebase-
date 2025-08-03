import { Fragment } from 'react'
import reactDOM from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = props => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
    </div>
  );
}
const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
  <div className={classes.scrollContent}>
    {props.children}  {/* This includes cart + form */}
  </div>
</div>

  );

}
const PortalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>

      {reactDOM.createPortal(<Backdrop onClose={props.onClose}/>, PortalElement)}
      {reactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>, PortalElement)}
    </Fragment>
  );
}

export default Modal;