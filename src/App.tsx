import { Suspense, lazy } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import MainLayout from "components/MainLayout/MainLayout";
import "./App.scss";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const SearchPage = lazy(() => import("pages/SearchPage/SearchPage"));

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/search/:text">
              <SearchPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
