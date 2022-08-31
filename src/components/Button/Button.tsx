import React from "react";

import Loader from "@components/Loader";
import { LoaderSize } from "@components/Loader";
import classNames from "classnames";

import "./Button.scss";
export enum ButtonColor {
  /** Основная, акцентная кнопка */
  primary = "primary",
  /** Второстепенная кнопка */
  secondary = "secondary",
}
type ButtonProps = React.PropsWithChildren<{
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

  return (
    <button {...rest} className={cn} disabled={rest.disabled || loading}>
      <Loader loading={loading} size={LoaderSize.s} />
      {children}
    </button>
  );
};

export default Button;
