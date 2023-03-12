import { FC, memo, SyntheticEvent, useCallback, useEffect } from "react";
import useInput from "hooks/use-input";
import { useLocation } from "react-router-dom";
import styles from "./SearchForm.module.scss";

interface ISearchFormProps {
  onSubmit: (searchText: string) => void;
}

const SearchForm: FC<ISearchFormProps> = ({ onSubmit }) => {
  let location = useLocation();

  const {
    value: searchText,
    isValid: searchTextIsValid,
    hasError: searchTextInputHasError,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    resetInput: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const submitFormHandler = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      if (!searchTextIsValid) return;
      onSubmit(searchText);
    },
    [searchTextIsValid, searchText]
  );

  useEffect(() => {
    if (location.pathname === "/") {
      resetFirstNameInput();
    }
  }, [location.pathname]);

  return (
    <form
      onSubmit={submitFormHandler}
      className={styles["search-form"]}
      data-testid="SearchForm"
    >
      <input
        className={styles["search-input"]}
        type="text"
        placeholder="Buscar"
        value={searchText}
        onChange={firstNameInputChangeHandler}
        onBlur={firstNameInputBlurHandler}
      />
      <button
        className={styles["button-submit"]}
        type="submit"
        disabled={searchTextInputHasError}
      >
        Go
      </button>
    </form>
  );
};

export default memo(SearchForm);
