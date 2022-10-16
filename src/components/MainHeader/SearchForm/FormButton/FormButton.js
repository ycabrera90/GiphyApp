import React from "react";
import classes from "./FormButton.module.css";

const FormButton = (props) => {
  const { attrib, text } = props;

  return (
    <button className={classes.button} {...attrib}>
      {text}
    </button>
  );
};

export default FormButton;
