import React from "react";
import { useState, useEffect } from "react";

import Card from "@components/Card";
import HeaderMain from "@components/HeaderMain";
import axios from "axios";
import { Link } from "react-router-dom";

import styles from "./Products.module.scss";
let productCount: number = 0;
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      });
      setProducts(
        result.data.map(
          (raw: {
            id: number;
            image: string;
            title: string;
            description: string;
            category: string;
            price: number;
          }) => ({
            id: raw.id,
            image: raw.image,
            title: raw.title,
            subtitle: raw.description,
            category: raw.category,
            content: raw.price,
          })
        )
      );
      productCount = result.data.length;
    };
    fetch();
  }, []);

  return (
    <>
      <HeaderMain />
      <div className={styles.total_products}>
        Total Products <span>{productCount}</span>
      </div>
      <div className={styles.products_all}>
        {products.map(
          (product: {
            id: number;
            image: string;
            title: string;
            subtitle: string;
            category: string;
            content: string;
          }) => (
            <Link to={`/product/${product.id}`}>
              <Card
                key={product.id}
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
                category={product.category}
                content={product.content}
              />
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default Products;
