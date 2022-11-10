import classes from "./FormInput.module.css";



const FormInput = ({ params }) => {

  return (
    <div className={classes.control}>
      <input {...params}></input>
    </div>
  );
};



export default FormInput;
