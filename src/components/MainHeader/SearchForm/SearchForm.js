import React from "react";
import classes from "./SearchForm.module.css";
import FormInput from "./FormInput/FormInput";
import FormButton from "./FormButton/FormButton";
import useInput from "../../../hooks/use-input";

const SearchForm = (props) => {
  const {
    value: searchText,
    isValid: searchTextIsValid,
    hasError: searchTextInputHasError,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    resetInput: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!searchTextIsValid) {
      return;
    }
    // resetFirstNameInput();
    props.onSubmit(searchText);
  };

  return (
    <form onSubmit={submitFormHandler} className={classes["search-form"]}>
      <FormInput
        params={{
          type: "text",
          placeholder: "Buscar",
          value: searchText,
          // className: searchTextInputHasError ? classes.invalid : "",
          onChange: firstNameInputChangeHandler,
          onBlur: firstNameInputBlurHandler,
        }}
      />
      <FormButton
        text="Go"
        attrib={{
          type: "submit",
          disabled: searchTextInputHasError,
        }}
      />
    </form>
  );
};

export default SearchForm;
