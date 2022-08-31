import React from "react";

import classNames from "classnames";

import styles from "./Card.module.scss";

export type CardProps = {
  image: string /** URL изображения */;

  title: React.ReactNode;

  subtitle: React.ReactNode /** Подзаголовок карточки */;
  category?: React.ReactNode /**Категория карточки */;

  content?: React.ReactNode /** Содержимое карточки (футер/боковая часть), может быть пустым */;

  onClick?: React.MouseEventHandler /** Клик на карточку */;
};
const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  category,
  onClick,
  ...rest
}) => {
  let cn = classNames(`${styles.card}`);
  return (
    <div {...rest} className={cn} onClick={onClick}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <img src={image} alt={image} /> */}
      </div>
      <p className={styles.category}>{category}</p>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <p className={styles.content}>$ {content}</p>
    </div>
  );
};

export default Card;
