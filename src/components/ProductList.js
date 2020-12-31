import React, { useState, useEffect } from "react";
import Product from "./Product.js";
import { Spinner, Row } from "react-bootstrap";
import Error from "./Error.js";
import "../App.css";

function ProductList(props) {
  const [productname, setproductname] = useState("");
  const [productdata, setproductdata] = useState({ data: [] });
  const [isloading, setisloading] = useState(true);

  const fetchdata = async () => {
    try {
      await fetch(`https://fortnite-api.theapinetwork.com/store/get`)
        .then((res) => res.json())
        .then((result) => {
          setproductdata({ data: result.data });
        });

      setisloading(false);
    } catch (e) {
      return <Error />;
    }
  };

  useEffect(() => {
    setproductname(props.match.params.name);
    fetchdata();
  }, []);

  return (
    <div>
      <p>You clicked on {productname}</p>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0.05em"
        }}
      >
        {isloading ? (
          <Spinner animation="border" />
        ) : (
          productdata.data.map((product) => (
            <Product key={product.itemId} product={product} />
          ))
        )}
      </Row>
    </div>
  );
}

export default ProductList;
