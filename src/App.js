import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";

// deploy on Server
const InfoBar = React.lazy(() => import("./components/InfoBar/InfoBar"));
const MainHeader = React.lazy(() =>
  import("./components/MainHeader/MainHeader")
);
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <InfoBar />
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
    </Suspense>
  );
}

export default App;
