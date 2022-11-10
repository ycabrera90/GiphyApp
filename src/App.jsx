import { Suspense, lazy } from 'react'
import {Switch, Route, Redirect } from "react-router-dom";

import MainLayout from './components/UI/MainLayout/MainLayout';

import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));



function App() {

  return (
    <Suspense fallback={<></>}>
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <HomePage />
          </Route>
          <Route path="/search/:text">
            <SearchPage />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </MainLayout>
    </Suspense>
  );
}



export default App;
