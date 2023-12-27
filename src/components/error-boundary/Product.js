import React from "react";

const Product = ({ model, brand, price, desc }) => {
  if (!price) throw new Error("Price is required");
  return (
    <div
      style={{ width: 200, padding: 5, margin: 5, border: "1px solid #000" }}
    >
      <h3>{model}</h3>
      <h4>Brand:{brand}</h4>
      <h4>Price:{price}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Product;
