import React from "react";

import "./Loader.scss";
import classNames from "classnames";

export enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

export type LoaderProps = {
  /**
   * Идет ли загрузка.
   * По умолчанию - true, для удобства использования
   * Если false, то лоадер не должен отображаться
   */
  loading?: boolean;
  /**
   * Размер лоадера. При передаче данного пропса, должен добавляться css-класс loader_size-{size}
   * По умолчанию: размер - LoaderSize.m, css-класс - loader_size-m
   */
  size?: LoaderSize;
  /**
   * Дополнительные CSS-классы.
   */
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({
  loading = true,
  size = "m",
  className = "loader",
}) => {
  let cn = classNames(`${className}`, `loader_size-${size}`);
  if (!loading) {
    return null;
  }
  
  return (
      <svg className={cn} viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="6"
        ></circle>
      </svg>
    );
  }
};

export default Loader;
