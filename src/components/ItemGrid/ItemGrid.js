import React from "react";
import classes from "./ItemGrid.module.css";

let scrollEvents = true;

const ItemGrid = (props) => {
  const { datas: itemList, scroll } = props;

  let itemId = 0;

  const scrollEventHandler = (event) => {
    const domElement = event.target;
    let scrolledContainer = domElement.scrollTop;
    let containerHeight = domElement.getBoundingClientRect().height;
    let itemsHeght = domElement.childNodes[0].getBoundingClientRect().height;
    let maxScrollItems = itemsHeght - containerHeight;
    let percentScrolledContainer = (scrolledContainer / maxScrollItems) * 100;
    if (percentScrolledContainer > scroll.trigger) {
      if (scrollEvents) {
        scroll.onEvent();
        scrollEvents = false;
        setTimeout(() => {
          scrollEvents = true;
        }, 3000);
      }
    }
  };

  return (
    <>
      <div className={classes.background} />
      <main className={classes.main} onScroll={scrollEventHandler}>
        <div className={classes["images-container"]}>
          {itemList.map((imgUrl) => (
            <img key={itemId++} src={imgUrl}></img>
          ))}
        </div>
      </main>
    </>
  );
};

export default ItemGrid;
