import { useHistory } from "react-router-dom";

import Logo from "./Logo/Logo";

import SearchForm from "./SearchForm/SearchForm";

import classes from "./MainHeader.module.css";



const MainHeader = () => {
  const history = useHistory();

  const searchFunctionHandler = (text) => {
    history.push(`/search/${text}`);
  };

  const goHomeFunctionHandler = () => {
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
