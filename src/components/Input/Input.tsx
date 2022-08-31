import React from "react";

import classNames from "classnames";

import styles from "./Input.module.scss";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value?: string /** Значение поля */;
  onChange: (
    value: string
  ) => void /** Callback, вызываемый при вводе данных в поле */;
};

const Input: React.FC<InputProps> = ({ value, onChange, ...rest }) => {
  let cn = classNames(
    `${styles.input}`,
    { input_disabled: rest.disabled },
    rest.className
  );

  return (
    <input
      {...rest}
      name={rest.name}
      value={value}
      type="text"
      className={cn}
      onChange={(event) => onChange(event.target.value)}
      placeholder={rest.placeholder}
    />
  );
};
export default Input;
