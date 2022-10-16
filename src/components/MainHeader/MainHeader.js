import React from "react";
import classes from "./MainHeader.module.css";
import { useHistory } from "react-router-dom";
import Logo from "./Logo/Logo";
import SearchForm from "./SearchForm/SearchForm";

const MainHeader = (props) => {
  const history = useHistory();

  const searchFunctionHandler = (text) => {
    history.push(`/search/${text}`);
  };

  const goHomeFunctionHandler = (text) => {
    history.push(`/home`);
  };

  return (
    <header className={classes.header}>
      <Logo onClick={goHomeFunctionHandler} />
      <SearchForm onSubmit={searchFunctionHandler}/>
    </header>
  );
};

export default MainHeader;
