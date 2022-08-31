import React from "react";

import classNames from "classnames";

import styles from "./Card.module.scss";

type CardProps = React.HTMLProps<HTMLDivElement> & {
  image: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  category?: React.ReactNode;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler;
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
      ></div>
      <p className={styles.category}>{category}</p>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <p className={styles.content}>$ {content}</p>
    </div>
  );
};

export default Card;
