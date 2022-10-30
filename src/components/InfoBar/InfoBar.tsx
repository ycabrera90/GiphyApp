import { FC, memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { cleanMessage } from "redux/reducers/ui.actions";
import { selectAppMessage } from "redux/reducers/ui.selectors";
import styles from "./InfoBar.module.scss";

export interface IInfoBar {}

const InfoBar: FC<IInfoBar> = ({}) => {
  const { text, type } = useAppSelector(selectAppMessage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(cleanMessage());
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [type, text]);

  return (
    <>
      {type && (
        <section
          className={`${styles.container} ${type ? styles[type] : ""}`}
          data-testid="InfoBar"
        >
          <h3>{text}</h3>
        </section>
      )}
    </>
  );
};

export default memo(InfoBar);
