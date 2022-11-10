import giphyLogo from "../../../images/giphy-logo.png";

import classes from "./Logo.module.css";



const Logo = ({ onClick }) => {
  return (
    <section className={classes.logo} onClick={onClick}>
      <img src={giphyLogo}></img>
      <h1>GIPHY</h1>
    </section>
  );
};



export default Logo;
