import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import MultiDropdown from "@components/MultiDropdown";
import { Option } from "@components/MultiDropdown";

import styles from "./HeaderMain.module.scss";

const HeaderMain = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Products</h1>
      <p className={styles.header__text}>
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>
      <div className={styles.header__find}>
        <form className={styles.find_form}>
          <Input
            name="find_input"
            // eslint-disable-next-line no-console
            onChange={console.log}
            placeholder="Начните набирать свой вопрос"
            className={styles.find_form__input}
          />
          <Button className={styles.find_form__button}>Find now</Button>
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
