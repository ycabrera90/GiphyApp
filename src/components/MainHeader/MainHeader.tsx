import { FC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import styles from "./MainHeader.module.scss";
import giphyLogo from "assets/png/giphy-logo.png";

interface IMainHeaderProps {}

const MainHeader: FC<IMainHeaderProps> = ({}) => {
  const history = useHistory();

  const searchFunctionHandler = useCallback(
    (text: string) => {
      history.push(`/search/${text}`);
    },
    [history]
  );

  const goHomeFunctionHandler = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <header className={styles.header} data-testid="MainHeader">
      <section className={styles.logo} onClick={goHomeFunctionHandler}>
        <img src={giphyLogo} alt={'logo-icon'}></img>
        <h1>GIPHY</h1>
      </section>

      <SearchForm onSubmit={searchFunctionHandler} />
    </header>
  );
};

export default memo(MainHeader);
