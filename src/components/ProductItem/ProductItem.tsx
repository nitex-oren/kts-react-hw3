import React from "react";
import { useState, useEffect } from "react";

import Button from "@components/Button";
import { ButtonColor } from "@components/Button";
import Card from "@components/Card";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import styles from "./ProductItem.module.scss";

interface IProduct {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  category: string;
  content: string;
}
const ProductItem = () => {
  const [allproducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetchAllproducts = async () => {
      const result = await axios(ENDPOINTS.products);
      setAllProducts(
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
    };
    fetchAllproducts();
  }, []);

  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url: `https://fakestoreapi.com/products/${id}`,
      });
      const raw = result.data;
      setProduct({
        id: raw.id,
        image: raw.image,
        title: raw.title,
        subtitle: raw.description,
        category: raw.category,
        content: raw.price,
      });
    };
    fetch();
  }, [id]);
  let relatedProducts = allproducts.filter(
    (item: IProduct) => item.category === product?.category
  );
  relatedProducts.splice(3);

  return (
    <>
      <div className={styles.product_item}>
        <div className={styles.product_img_wrapper}>
          <img src={product?.image} alt={product?.title} />
        </div>
        <div className={styles.desc_block}>
          <h2 className={styles.desc_block__title}>{product?.title}</h2>
          <h3 className={styles.desc_block__category}>{product?.category}</h3>
          <p className={styles.desc_block__color}>Color</p>
          <div className={styles.coolor_select}>
            <div className={styles.bl_color_1}></div>
            <div className={styles.bl_color_2}></div>
            <div className={styles.bl_color_3}></div>
            <div className={styles.bl_color_4}></div>
          </div>
          <h3 className={styles.desc_block__subtitle}>{product?.subtitle}</h3>
          <p className={styles.desc_block__price}>$ {product?.content}</p>
          <Button>Buy Now</Button>
          <Button className={styles.btn_chart} color={ButtonColor.secondary}>
            Add to Chart
          </Button>
        </div>
      </div>
      <h2 className={styles.related_title}>Related Items</h2>
      <div className={styles.related_products}>
        {relatedProducts.map(
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

export default ProductItem;
