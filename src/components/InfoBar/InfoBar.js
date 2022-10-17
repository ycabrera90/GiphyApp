import React from "react";
import { useEffect, useState } from "react";
import classes from "./InfoBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const InfoBar = () => {
  const { type, text } = useSelector((state) => state.ui.message);
  const componentClasses = `${classes["info-bar"]} ${
    type ? classes[type] : ""
  }`;
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
        <section className={componentClasses}>
          <h3>{text}</h3>
        </section>
      )}
    </>
  );
};

export default InfoBar;
