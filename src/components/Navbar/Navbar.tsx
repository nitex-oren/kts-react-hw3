import React from "react";

import { Link } from "react-router-dom";

import bag from "../../assets/img/bag.svg";
import logo from "../../assets/img/logo.svg";
import user from "../../assets/img/user.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logo__image} />
        <p className={styles.logo__title}>Lalasia</p>
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link to="/"> Product</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Services</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Article</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">About Us</Link>
        </li>
      </ul>
      <div className={styles.login}>
        <img src={bag} alt="Корзина" />
        <img src={user} alt="Пользователь" />
      </div>
    </nav>
  );
};

export default Navbar;
