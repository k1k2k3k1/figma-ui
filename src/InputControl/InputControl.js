import React from "react";

import styles from "./InputControl.module.css";

function InputControl(props) {
  return (
    <div classNameName={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;
