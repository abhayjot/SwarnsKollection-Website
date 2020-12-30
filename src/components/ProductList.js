import React, { useState, useEffect } from "react";
import Product from "./Product.js";

function ProductList(props) {
  const [productname, setproductname] = useState("");
  const [productdata, setproductdata] = useState({ data: [] });

  useEffect(() => {
    setproductname(props.match.params.name);

    fetch("https://fortnite-api.theapinetwork.com/store/get")
      .then((res) => res.json())
      .then((result) => {
        setproductdata({ data: result.data });
        console.log(productdata.data[0]);
      });
  }, []);

  return (
    <div>
      <p>You clicked on {productname}</p>
      {productdata.data.map((product) => (
        <Product key={product.itemId} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
