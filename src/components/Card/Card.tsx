import { FC, memo, useEffect, useRef, useState } from "react";
import { Skeleton } from "antd";
import styles from "./Card.module.scss";

export interface ICardProps {
  imageUrl: string;
}

const Card: FC<ICardProps> = ({ imageUrl }) => {
  const [cardHeight, setCardHeight] = useState(0);
  const cardDOM = useRef<HTMLLIElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    new ResizeObserver(() => {
      if (cardDOM.current) {
        setCardHeight(cardDOM.current?.clientWidth * 1.26);
      }
    }).observe(cardDOM.current!);
  }, []);

  return (
    <li className={styles.card} ref={cardDOM} style={{ height: cardHeight }}>
      {!imageLoaded && (
        <Skeleton.Image active={true} className={styles.skeleton} />
      )}
      <a href={imageUrl} download>
        <img src={imageUrl} onLoad={() => setImageLoaded(true)} />;
      </a>
    </li>
  );
};

export default memo(Card);
