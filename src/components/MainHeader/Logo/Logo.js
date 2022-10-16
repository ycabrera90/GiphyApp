import React from "react";
import classes from "./Logo.module.css";
import giphyLogo from "../../../images/giphy-logo.png";

const Logo = (props) => {
  return (
    <section className={classes.logo} onClick={props.onClick}>
      <img src={giphyLogo}></img>
      <h1>GIPHY</h1>
    </section>
  );
};

export default Logo;
