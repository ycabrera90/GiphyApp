import React from "react";
import classes from "./App.css";

import { Route, Redirect } from "react-router-dom";

import MainHeader from "./components/MainHeader/MainHeader";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";


function App() {
  return (
    <>
      <MainHeader />

      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/home" exact>
        <HomePage />
      </Route>

      <Route path="/search/:text">
        <SearchPage />
      </Route>
    </>
  );
}

export default App;
