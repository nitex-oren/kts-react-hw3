import React from "react";

import Button from "@components/Button";
import { ButtonColor } from "@components/Button";
import Input from "@components/Input";
import "./HeaderMain.scss";
import MultiDropdown from "@components/MultiDropdown";
import { Option } from "@components/MultiDropdown";

const HeaderMain = () => {
  return (
    <header className="header">
      <h1 className="header__title">Products</h1>
      <p className="header__text">
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>
      <div className="header__find">
        <form className="find-form">
          <Input
            name="find_input"
            onChange={(value: string) => alert(value)}
            placeholder="Начните набирать свой вопрос"
            className="find-form__input"
          />
          <Button className="find-form__button">Find now</Button>
        </form>
        <MultiDropdown
          options={
            [
              // { key: "msk", value: "Москва" },
              // { key: "spb", value: "Санкт-Петербург" },
              // { key: "ekb", value: "Екатеринбург" },
            ]
          }
          value={[]}
          onChange={(selected: Option[]) => alert(JSON.stringify(selected))}
          pluralizeOptions={(values: Option[]) =>
            values.length === 0 ? "Filter" : `Выбрано: ${values.length}`
          }
        />
      </div>
    </header>
  );
};

export default HeaderMain;
