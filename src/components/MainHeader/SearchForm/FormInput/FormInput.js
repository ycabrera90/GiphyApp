import React from "react";
import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const { params } = props;

  return (
    <div className={classes.control}>
      <input {...params}></input>
    </div>
  );
};

export default FormInput;
