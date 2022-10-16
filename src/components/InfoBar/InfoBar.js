import React from "react";
import { useEffect } from "react";
import classes from "./InfoBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const InfoBar = () => {
  let { type, text } = useSelector((state) => state.ui.message);
  const dispatch = useDispatch();

  let componentClasses = classes["info-bar"];

  componentClasses =
    type === "error"
      ? `${componentClasses} ${classes.error}`
      : `${componentClasses}`;

  componentClasses =
    type === "alert"
      ? `${componentClasses} ${classes.alert}`
      : `${componentClasses}`;

  componentClasses =
    type === "message"
      ? `${componentClasses} ${classes.message}`
      : `${componentClasses}`;

  useEffect(() => {
    let timerOut;
    timerOut = setTimeout(() => {
      dispatch(uiActions.cleanMessage());
    }, 3000);
    return () => {
      clearTimeout(timerOut);
    };
  }, [text]);

  return (
    <section className={componentClasses}>
      <h3>{text}</h3>
    </section>
  );
};

export default InfoBar;
