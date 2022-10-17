import React from "react";
import { useEffect } from "react";
import classes from "./SearchForm.module.css";
import FormInput from "./FormInput/FormInput";
import FormButton from "./FormButton/FormButton";
import useInput from "../../../hooks/use-input";
import { useLocation } from "react-router-dom";

const SearchForm = (props) => {
  let location = useLocation();

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
    props.onSubmit(searchText);
  };

  useEffect(() => {
    if (location.pathname === "/home") {
      resetFirstNameInput();
    }
  }, [location.pathname]);

  return (
    <form onSubmit={submitFormHandler} className={classes["search-form"]}>
      <FormInput
        params={{
          type: "text",
          placeholder: "Buscar",
          value: searchText,
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
