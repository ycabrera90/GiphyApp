import React from "react";
import classes from "./ItemGrid.module.css";

const ItemGrid = (props) => {
  const { datas: itemList } = props;
  let itemId = 0;
  return (
    <>
      <div className={classes.background} />
      <main className={classes["images-container"]}>
        {itemList.map((imgUrl) => (
          <img key={itemId++} src={imgUrl}></img>
        ))}
      </main>
    </>
  );
};

export default ItemGrid;
