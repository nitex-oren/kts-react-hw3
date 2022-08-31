import "./MultiDropdown.scss";
import { useState } from "react";

import classNames from "classnames";

/** Вариант для выбора в фильтре */
export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, массив может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
};

const MultiDropdown = ({
  options,
  value,
  onChange,
  pluralizeOptions,
  ...rest
}: MultiDropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  let cn_button = classNames("mlt_button", { button_disabled: rest.disabled });
  const clickHandler = () => {
    setIsActive((state: boolean) => !state);
  };

  const changeHandler = (option: Option) => {
    const newValues = value.filter((el) => el.key !== option.key);

    if (newValues.length === value.length) {
      newValues.push(option);
    }
    onChange(newValues);
  };

  const btnText = pluralizeOptions(value);

  return (
    <>
      <button {...rest} className={cn_button} onClick={clickHandler}>
        {btnText}
      </button>
      {!rest.disabled && isActive && (
        <ul>
          {options.map((option) => (
            <li key={option.key} onClick={() => changeHandler(option)}>
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MultiDropdown;
