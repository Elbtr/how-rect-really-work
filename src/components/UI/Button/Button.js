import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("this Button");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
// React.memo() mepertimbangkan props karna props Button berubah setiap kali ada aksi didalam button maka reactDOM tetap merender ulang Button
