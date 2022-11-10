import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";

import classes from "./InfoBar.module.css";



const InfoBar = () => {
  const { type, text } = useSelector((state) => state.ui.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(uiActions.cleanMessage());
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [type, text]);

  return (
    <>
      {type && (
        <section className={`${classes["info-bar"]} ${type ? classes[type] : ""}`}>
          <h3>{text}</h3>
        </section>
      )}
    </>
  );
};



export default InfoBar;
