import React from "react";
import { productData } from "../static/productsData";
import "./hero.scss";
import ProductCard from "../cards/product/ProductCard";

const Hero = () => {
  console.log(productData);
  return (
    <section className="products container">
      <div className="product__cards">
        {productData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
