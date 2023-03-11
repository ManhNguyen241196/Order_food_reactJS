import React from "react";
import classes from "./Modal.module.css";

import Cart from "../Cart/Cart";

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={classes.modal}>
        {" "}
        <Cart onCloseBtn={props.onClose} />
      </div>
    </>
  );
};

export default Modal;
