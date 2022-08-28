import React from "react";

import Loader from "@components/Loader";
import classNames from "classnames";

import { LoaderSize } from "../Loader";
import "./Button.scss";
export enum ButtonColor {
  /** Основная, акцентная кнопка */
  primary = "primary",
  /** Второстепенная кнопка */
  secondary = "secondary",
}
export type ButtonProps = React.PropsWithChildren<{
  /**
   * Если true, то внутри кнопки вместе с children отображается компонент Loader
   * Также кнопка должна переходить в состояние disabled
   * По умолчанию - false
   */
  loading?: boolean;
  /** Цвет кнопки, по умолчанию -  ButtonColor.primary*/
  color?: ButtonColor;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  loading = false,
  color = "primary",
  children,
  ...rest
}) => {
  let cn = classNames(
    "button",
    `button_color-${color}`,
    { button_disabled: rest.disabled || loading },
    rest.className
  );

  if (loading) {
    rest.disabled = true;
  }

  return (
    <button {...rest} className={cn}>
      <Loader loading={loading} size={LoaderSize.s} />
      {children}
    </button>
  );
};

export default Button;
