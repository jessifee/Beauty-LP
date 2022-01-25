import React from "react";
import "./Product.css";
import ProductImage from "./Images/ProductImage.jpg";

function Product() {
  return (
    <div className="product" id="productSection">
      <img className="productImage" src={ProductImage} alt="" />
      <div className="description">
        <p className="serum">The Serum</p>
        <p className="info">
          Praesent lacinia lectus tortor, nec placerat ante blandit eu.
          Pellentesque vitae pulvinar nulla. Nulla sodales accumsan volutpat.
          Donec eleifend pulvinar erat scelerisque sollicitudin. Duis dictum
          magna mattis accumsan cursus. Pellentesque rhoncus molestie egestas.
          Etiam vulputate rhoncus suscipit. Pellentesque convallis tellus
          rhoncus, mattis enim sit amet, molestie ante. Donec tincidunt, orci et
          posuere consequat, felis nibh finibus orci, nec aliquet risus ante
          quis nisl.
        </p>
        <button className="more-btn">More Information</button>
      </div>
    </div>
  );
}

export default Product;
