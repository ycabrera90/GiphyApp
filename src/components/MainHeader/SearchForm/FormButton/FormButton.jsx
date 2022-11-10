import classes from "./FormButton.module.css";



const FormButton = ({ attrib, text }) => {

  return (
    <button className={classes.button} {...attrib}>
      {text}
    </button>
  );
};



export default FormButton;
