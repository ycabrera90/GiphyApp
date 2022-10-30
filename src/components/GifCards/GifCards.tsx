import { BaseSyntheticEvent, FC, memo, useCallback } from "react";
import Card from "components/Card/Card";
import styles from "./GifCards.module.scss";

let scrollEvents = true;

interface IGifCardsProps {
  datas: { imageUrl: string }[];
  scroll: {
    trigger: number;
    onEvent: () => void;
  };
}

const GifCards: FC<IGifCardsProps> = ({ datas: itemList, scroll }) => {
  const scrollEventHandler = useCallback(
    (event: BaseSyntheticEvent) => {
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
    },
    [scrollEvents]
  );

  return (
    <main
      className={`${styles.main} ${styles["scroll-style"]}`}
      onScroll={scrollEventHandler}
    >
      <ul className={styles["cards-container"]}>
        {itemList.map(({ imageUrl }, index) => (
          <Card key={index} imageUrl={imageUrl} />
        ))}
      </ul>
    </main>
  );
};

export default memo(GifCards);
